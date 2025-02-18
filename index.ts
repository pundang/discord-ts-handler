import { ShardingManager } from "discord.js"
import { configDotenv } from "dotenv"
import Logger from "./src/util/logger"

configDotenv()

const shardManager = new ShardingManager("src/bot.ts", {
  execArgv: ["--import", "tsx"], // this is to make sure node loads the file with tsx
  token: process.env.TOKEN,
})

shardManager.on("shardCreate", (shard) => {
  Logger.log(`Created shard with id ${shard.id}`)
})

shardManager.spawn()
