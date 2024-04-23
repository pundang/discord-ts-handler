import type { ChatInputCommandInteraction } from "discord.js";
import type { newClient } from "../lib/classes";

export default {
	name: "interactionCreate",
	once: false,
	async execute(interaction: ChatInputCommandInteraction) {
		if (!interaction.isChatInputCommand()) return

		const client = interaction.client as newClient

		const command = client.commands?.get(interaction.commandName)

		if (!command) throw new Error(`Command ${command} wasn't found or registered`)

		await command.execute(interaction)
	}
}