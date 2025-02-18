# Discord TypeScript handler (v14)
* A fully functional and modular Discord.js handler built with TypeScript.

## Features
* Advanced slash commands support - Slash commands are directly pushed to Discord's API, allowing you to use the latest available features.
* Event handling - Handle events like message creation, deletion, etc...
* Logging system with `Logger` - JS's `console` API wrapper.
* Automatic sharding system - You won't need to care about performance, the bot automatically distributes the load between multiple shards.
* Docker-ready deployment - The bot is already configured to run in a Docker container.

## Running the bot
Follow these simple steps to get your bot running.


```bash
git clone https://github.com/pundang/discord-ts-handler.git

cd ./discord-ts-handler
```

### Option 1 (recommended): run a Docker container.
Build the docker image and run it.
```bash
docker build . -t "YOUR_TAG"

docker run --name "YOUR_CONTAINER_NAME" -d "YOUR_TAG"
```

### Option 2: run locally
Install the dependencies and run the project
```bash
npm ci

npm run start
```