const Discord = require ('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('I am Ready');
});

client.on('message', message => {
   if (message.content === 'hello') {
      message.reply ('Hello');
   }
  client.on('message', message => {
   if (message.content === 'vad heter johannes') {
      message.reply ('the Ironfister');
   }
   
   
   
   else if(message.content === "fuck")
   {
      message.delete();
   }
});

client.login(process.env.BOT_TOKEN);

