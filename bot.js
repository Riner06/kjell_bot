const Discord = require ('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('I am Ready');
});

client.on('message', message => {
   if (message.content === 'hello') {
      message.reply ('Hello');
   }
   if (message.content === 'fuck') {
      message.reply("dont use bad words");
      message.delete();
   }
});

client.login(process.env.BOT_TOKEN);

