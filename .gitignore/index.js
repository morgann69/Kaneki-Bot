const Discord = require("discord.js")

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Vous faire plaisir, Salut")
    console.log("Le bot c'est bien connecté")
});

bot.login("NDU2NDA2NzUwNzI0MzU4MTY4.DgLCVQ.5FlyKvwkexRJ0sOcBdf-ysGvEyY");
