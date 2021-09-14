const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'css',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
        .setColor("#561FE0")
        .setTitle("Documentation de CSS")
        .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png")
        .setAuthor('R2D3 by Merwan ')
        .setURL("https://docs.python.org/fr/3/")
        //.setImage("https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png")
        .setTimestamp()
        .setFooter('Add me Merwan#4680');
        channel.send({embeds: [Embed]});
    },
};