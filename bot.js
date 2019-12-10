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

client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Hello!');
  }
  if (msg.content === 'Hej Johannes') {
    msg.reply('iron fist!');
  }
});
   
   
   else if(message.content === "fuck")
   {
      message.delete();
   }
});

client.login(process.env.BOT_TOKEN);

