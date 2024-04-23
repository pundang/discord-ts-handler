import { Collection, GatewayIntentBits } from "discord.js"
import { newClient } from "./src/lib/classes"
import dotenv from "dotenv"
import Handler from "./src/lib/handler"

dotenv.config()

const token = process.env.TOKEN as string
const clientId = process.env.CLIENT_ID as string

const client = new newClient({ intents: [GatewayIntentBits.Guilds] })
const handler = new Handler(token, clientId, client)

client.commands = new Collection()

handler.retrieveEvents()
handler.publishCommands()

client.login(token)
