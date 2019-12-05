const Discord = require ('discord.js');
const client = new Discord.Client();

var bad_words = ["fuck", "nigger", "nigga", "neger", "bitch"]; 

client.on('ready', () => {
   console.log('I am Ready');
});

client.on('message', message => {
   if (message.content === 'hello') {
      message.reply ('Hello');
   }
   for (i = 0; i < bad_words.length; i++){
   if (message.content === bad_words[i]) {
      message.reply("dont use bad words");
      message.delete();
   }
});

client.login(process.env.BOT_TOKEN);
