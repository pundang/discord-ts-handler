import { client } from "../.."

client.once("ready", client => {
	console.log(`Logged in as ${client.user.username}`)
})