const Discord = require ('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('I am Ready');
});

client.on('message', message => {
   if (message.content === 'hello') {
      message.reply ('Hello');
   }
   else if(message.content === "fuck")
   {
      message.messageDelete();
   }
});

client.login(process.env.BOT_TOKEN);

