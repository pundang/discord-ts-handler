import client, { handler } from "../bot";
import Command from "../util/command";

client.on("interactionCreate", (interaction) => {
	if (!interaction.isChatInputCommand()) return

	let args: any[] = []

	for (const arg of interaction.options.data) {
		args.push(arg.value)
	}

	const command = handler.commands?.get(interaction.commandName) as Command

	command.run(client, interaction, args)
})