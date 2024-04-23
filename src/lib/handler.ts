import { Routes, REST } from "discord.js"
import fs from "node:fs"
import path from "node:path"
import { newClient } from "./classes"

export default class Handler {
	private client: newClient
	private token: string
	private clientId: string

	constructor(token: string, clientId: string, client: newClient) {
		this.token = token
		this.clientId = clientId
		this.client = client
	}

	async publishCommands() {
		const commandsPath = path.join(__dirname, "../commands")
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".ts"))

		const commands: object[] = []

		commandFiles.forEach(file => {
			const filePath = path.join(commandsPath, file)
			const command = require(filePath).default

			if ("data" in command && "execute" in command) {
				commands.push(command.data.toJSON())
				this.client.commands?.set(command.data.name, command)
			} else {
				console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
			}
		})

		const rest = new REST().setToken(this.token)

		try {
			console.log(`Refreshing global command list with ${commands.length} slashCommands`)

			const data: any = await rest.put(Routes.applicationCommands(this.clientId), {
				body: commands
			})

			console.log(`Successfully registered ${data.length} slashCommands`)

		} catch (e) {
			console.error(`CRITICAL ERROR WHEN UPDATING COMMANDS: ${e}`)
		}
	}

	async retrieveEvents() {
		const eventsPath = path.join(__dirname, "../events")
		const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".ts"))

		eventFiles.forEach(file => {
			const filePath = path.join(eventsPath, file)
			require(filePath).default
		})
	}
}