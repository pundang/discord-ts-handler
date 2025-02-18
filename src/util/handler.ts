import { Client, Collection, REST, Routes } from "discord.js"
import { readdirSync } from "node:fs"
import path from "node:path"
import Command from "./command"
import Logger from "./logger"

class Handler {
	private client: Client
	private clientId: string
	private token: string
	public commands: Collection<any, any> | null
	private slashCommands: Command[]

	constructor(client: Client, clientId: string, token: string) {
		this.client = client
		this.clientId = clientId
		this.token = token
		this.commands = new Collection()
		this.slashCommands = [] // this will be later pushed to Discord's API

		this.pushCommands()

		client.login(token).then(() => {
			this.getEvents() // this ensures client is not undefined
		})
	}

	async pushCommands() {
		const commandsPath = path.join(__dirname, "../commands")
		const commandFiles = readdirSync(commandsPath, { recursive: true }).filter((file) => file.toString().endsWith(".ts"))

		for (const file of commandFiles) {
			const commandPath = path.resolve(commandsPath, file.toString())
			const commandModule = await import(`file://${commandPath}`)
			const currentCommand = await commandModule.default as Command

			this.commands?.set(currentCommand.name, currentCommand)
			this.slashCommands.push(currentCommand)

			Logger.log(`Added command - ${currentCommand.name}`)
		}

		const rest = new REST().setToken(this.token)

		await rest.put(Routes.applicationCommands(this.clientId), {
			body: this.slashCommands
		})
	}

	async getEvents() {
		const eventsPath = path.resolve(__dirname, "../events")
		const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith(".ts"))

		eventFiles.forEach(async file => {
			const filePath = path.resolve(eventsPath, file)
			const module = await require(filePath.toString())
			try {
				module.default
			} catch (err) {
				Logger.error(err)
			}
		})

		Logger.log("Events registered!")
	}
}

export default Handler