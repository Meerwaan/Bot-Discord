const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'html',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
        .setColor("#561FE0")
        .setTitle("Documentation de Html 5")
        .setAuthor('R2D3 by Merwan ')
        .setURL("https://developer.mozilla.org/fr/docs/Web/HTML")
        .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/html-3628838-3030115.png")
        .setTimestamp()
        .setFooter('Add me Merwan#4680');
        channel.send({embeds: [Embed]});
    },
};