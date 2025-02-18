FROM node:20
WORKDIR /bot

# do not copy the bot files yet, otherwise the cache will be retriggered
COPY package*.json .
RUN npm ci

COPY . .
CMD [ "npm", "run", "start" ]