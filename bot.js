const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjUwNzI0Nzg5NDg0NTE5NDQ1.XeQcJg.988evVJE2GMvUaq1fCFnes7bseM";

bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", msg => {
  if (msg.content --- "hello") {
    msg.reply("hello");
  }
});

bot.login(token);
