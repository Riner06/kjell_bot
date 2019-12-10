const Discord = require ('discord.js');
const client = new Discord.Client();

bot.on("ready",async () => {
    console.log(bot.user.username + " is ready");
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }

});

client.on('message', message => {
   if (message.content === 'hello') {
      message.reply ('Hello');
    if (message.content === 'vad heter johannes') {
      message.reply ('the Ironfister');
   }
   });

   
   
   
   else if(message.content === "fuck")
   {
      message.delete();
   }
});

client.login(process.env.BOT_TOKEN);

