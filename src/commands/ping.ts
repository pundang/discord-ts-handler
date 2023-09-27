import { SlashCommandBuilder, Message } from "discord.js";

export default {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies to ping"),
	async execute(interaction: Message) {
		interaction.reply("Pong")
	}
}