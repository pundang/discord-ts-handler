import client from "../bot"
import Logger from "../util/logger"

client.once("ready", (client) => {
  Logger.log(`Logged in as ${client.user.username}`)
})
