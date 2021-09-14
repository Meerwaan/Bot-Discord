const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'python',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
        .setColor("#561FE0")
        .setTitle("Documentation de Python")
        .setAuthor('R2D3 by Merwan ')
        .setURL("https://docs.python.org/fr/3/")
        .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png")
        .setTimestamp()
        .setFooter('Add me Merwan#4680');
        channel.send({embeds: [Embed]});
    },
};