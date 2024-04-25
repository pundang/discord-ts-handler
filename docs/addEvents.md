# How to add events

1. Create a file under `src/events` with any name you want (should have .ts extension)
2. Add the next code block to the file
```ts
// you should always import client because we use it for registering the events
import { client } from "../.."

client.once("ready", client => {
	console.log(`Logged in as ${client.user.username}`)
})
```
3. Launch your bot, the bot automatically registers all the events under that directory.