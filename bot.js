const Discord = require ('discord.js');
const client = new Discord.Client();

client.on("ready",async () => {
    console.log(client.user.username + " is ready");
    try {
        let link = await client.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }

});

client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Hello!');
  }
  if (msg.content === 'vad heter johannes') {
  }
    msg.reply('the ironfister');
  if (msg.content === 'vad heter melker') {
    msg.reply("the maggot");
  }
});
   

client.login(process.env.BOT_TOKEN);

