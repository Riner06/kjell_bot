const Discord = require ('discord.js');
const client = new Discord.Client();

client.on("ready",async () => {
    client.user.setActivity("Talking to people")
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
    msg.reply('the ironfister');
  }
});
   

client.login(process.env.BOT_TOKEN);

