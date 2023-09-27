import { Client, type ClientOptions, type Collection } from "discord.js";

export class newClient extends Client {
	commands: Collection<any, any> | null

	constructor(Intents: ClientOptions) {
		super(Intents)
		this.commands = null
	}
}