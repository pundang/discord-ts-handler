import { newClient } from "../lib/classes";
import { client } from "../..";
import { ApplicationCommandOptionType } from "discord.js";

client.on("interactionCreate", async interaction => {
	if (!interaction.isChatInputCommand()) return

	const client = interaction.client as newClient

	const command = client.commands?.get(interaction.commandName)
	let args: any[] = []

	if (!command) throw new Error(`Command ${command} wasn't found or registered`)

	for (let option of interaction.options.data) {
		if (option.type === ApplicationCommandOptionType.Subcommand) {
			if (option.name) args.push(option.name)
			option.options?.forEach(x => {
				if (x.value) args.push(x.value)
			})
		} else if (option.value) args.push(option.value)
	}


	await command.run(client, interaction, args)
})