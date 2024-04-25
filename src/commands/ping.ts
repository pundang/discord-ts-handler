import { ApplicationCommandType } from "discord.js"
import command from "../lib/interfaces"

const cmd: command = {
	name: "ping",
	description: "Replies to ping",
	type: ApplicationCommandType.ChatInput,
	run: (client, interaction, args) => {
		interaction.reply("Pong!")
	}
}

export default cmd