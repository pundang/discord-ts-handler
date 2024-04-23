import { newClient } from "../lib/classes";
import { client } from "../..";

client.on("interactionCreate", async interaction => {
	if (!interaction.isChatInputCommand()) return

	const client = interaction.client as newClient

	const command = client.commands?.get(interaction.commandName)

	if (!command) throw new Error(`Command ${command} wasn't found or registered`)

	await command.execute(interaction)
})