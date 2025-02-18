import {
	ApplicationCommandOptionType,
	ApplicationCommandType,
	Client,
	CommandInteraction,
} from "discord.js"

interface Options {
	name: string
	description: string
	type: ApplicationCommandOptionType
	required?: boolean
	options?: SubcommandOptions[]
}

interface SubcommandOptions {
	name: string
	description: string
	type: ApplicationCommandOptionType
}

interface Command extends Object {
	name: string
	description: string
	type: ApplicationCommandType
	options?: Options[]
	run: (client: Client, interaction: CommandInteraction, args: any[]) => void
}

export default Command
