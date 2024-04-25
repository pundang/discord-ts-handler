import { ApplicationCommandType, Client, Message } from "discord.js"

interface command {
	name: string
	description: string
	type: ApplicationCommandType
	options?: options[]
	run: (client: Client, interaction: Message, args: any[]) => void
}

interface options {
	name: string
	description: string
	type: ApplicationCommandType
	required?: boolean
}

export default command