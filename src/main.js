import dotenv from 'dotenv'
import { Client } from "discord.js"

const client = new Client()
dotenv.config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login(process.env.TOKEN);