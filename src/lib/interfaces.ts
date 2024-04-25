import { ApplicationCommandOptionType, ApplicationCommandType, Client, CommandInteraction } from "discord.js"

interface command {
	name: string
	description: string
	type: ApplicationCommandType
	options?: options[]
	run: (client: Client, interaction: CommandInteraction, args: any[]) => void
}

interface options {
	name: string
	description: string
	type: ApplicationCommandOptionType
	required?: boolean
	options?: subcommand_options[]
}

interface subcommand_options {
	name: string
	description: string
	type: ApplicationCommandOptionType
}

export default command