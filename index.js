
// --------------------------
//Mise en place des modules
// --------------------------
const fs = require("fs");
const config = require("./config/config.json")
const Discord = require('discord.js');
const client = new Discord.Client({ intents: Object.values(Discord.Intents.FLAGS) });
const prefix = "!";
client.once('ready', () => { console.log("Ouais mon poto tout est OP"); });

const commandFolders = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));; // on fais parcourir les fichier du dossier Command


client.guildSettings = new Discord.Collection();
client.commands = new Discord.Collection(); // On crée une nouvelle collection
client.categories = new Array(); // on crée un tableau des catégories qui extend de client




// --------------------------
// Commands Handler
// --------------------------

for (const file of commandFolders) { // On parcourt les dossiers du dossier Commands 
    const command = require(`./Commands/${file}`)
    client.commands.set(command.name, command);


}


client.on("messageCreate", message => {
    if (message.author.bot) return;

    const [commandName, ...args] = message.content.slice(prefix.length).trimStart().toLowerCase().split(/\s+/)

    const command = message.client.commands.get(commandName);

    if (!command) return;

    try {
        command.execute(client, message.channel, args);
    } catch (error) {
        console.error(error);
        return message.channel.send("Erreur de la commande. ");
    }





});
client.login(config.token);