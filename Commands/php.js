const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'php',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
        .setColor("#561FE0")
        .setTitle("Documentation de PHP")
        .setAuthor('R2D3 by Merwan ')
        .setURL("https://www.php.net/manual/fr/index.php")
        .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/php-2752101-2284918.png")
        .setTimestamp()
        .setFooter('Add me Merwan#4680');
        channel.send({embeds: [Embed]});
    },
};