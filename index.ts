import { Collection, GatewayIntentBits } from "discord.js"
import { newClient } from "./src/lib/classes"
import { token, clientId } from "./config.json"
import Handler from "./src/lib/handler"

const client = new newClient({ intents: [GatewayIntentBits.Guilds] })
const handler = new Handler(token, clientId, client)

client.commands = new Collection()

handler.retrieveEvents()
handler.publishCommands()

client.login(token)