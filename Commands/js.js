const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'js',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
        .setColor("#561FE0")
        .setTitle("Documentation de JavaScript")
        .setAuthor('R2D3 by Merwan ')
        .setURL("https://developer.mozilla.org/fr/docs/Web/JavaScript")
        .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png")
        .setTimestamp()
        .setFooter('Add me Merwan#4680');
        channel.send({embeds: [Embed]});
    },
};