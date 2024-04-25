# How to add commands

1. Create a file under `src/commands` with any name you want (should have .ts extension)
2. Add the next code block to the file
```ts
import { ApplicationCommandType } from "discord.js"
// you should always import this for intellisense
import command from "../lib/interfaces"

const cmd: command = {
	// command name
	name: "ping",
	// command description
	description: "Replies to ping",
	// type, could be a message command, a chat input command or a user command
	type: ApplicationCommandType.ChatInput,
	// the function that is going to execute
	run: (client, interaction, args) => {
		interaction.reply("Pong!")
	}
}

export default cmd
```
3. Launch the bot, your commands are auto registered every time you launch.

## Subcommands

If you want to add subcommands you need to add the `options` property to `cmd`
```ts
import { ApplicationCommandType } from "discord.js"
import command from "../lib/interfaces"

const cmd: command = {
	name: "ping",
	description: "Replies to ping",
	type: ApplicationCommandType.ChatInput,
	// "options" should be an array of objects with the Application Command Options syntax
	options: [{
		name: "reply",
		description: "Should i reply to this message?"
		type: ApplicationCommandOptionType.Boolean,
		required: true
	}]
	run: (client, interaction, args) => {
		interaction.reply("Pong!")
	}
}

export default cmd
```

## Notes
* If you need documentation about all of these things you can read the [Application Commands](https://discord.com/developers/docs/interactions/application-commands) docs