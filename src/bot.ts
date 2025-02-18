import { Client, GatewayIntentBits as Intent } from "discord.js"
import Handler from "./util/handler"

const clientId = process.env.CLIENT_ID as string
const token = process.env.TOKEN as string

const client = new Client({
  intents: [
    Intent.Guilds,
    Intent.GuildMembers,
    Intent.GuildModeration,
    Intent.GuildExpressions,
    Intent.GuildIntegrations,
    Intent.GuildWebhooks,
    Intent.GuildInvites,
    Intent.GuildMessages,
    Intent.GuildScheduledEvents,
    Intent.AutoModerationExecution,
    Intent.AutoModerationConfiguration,
  ],
})

const handler = new Handler(
  client,
  clientId,
  token
)

export default client
export { handler }

