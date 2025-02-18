import { ApplicationCommandType } from "discord.js"
import command from "../util/command"

const ping: command = {
	name: "ping",
	description: "Replies with pong!",
	type: ApplicationCommandType.ChatInput,
	options: [], // you can ignore this option if you want.
	run(client, interaction, args) {
		interaction.reply("Pong!")
	},
}

export default ping