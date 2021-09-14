
// --------------------------
//Mise en place des modules
// --------------------------
const fs = require("fs");
const config = require("./config/config.json")
const Discord = require('discord.js');
const client = new Discord.Client({ intents: Object.values(Discord.Intents.FLAGS)});

const prefix = "!";

client.once('ready', () => {
    console.log("Ouais mon poto tout est OP");
});



client.on("messageCreate", message => {

    if (message.author.bot) return;
    if (message.content === prefix + "camion") {
        message.reply("Pouet pouet")
    }


});
client.login(config.token);