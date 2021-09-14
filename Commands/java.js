const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'java',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
        .setColor("#561FE0")
        .setTitle("Documentation de Java")
        .setAuthor('R2D3 by Merwan ')
        .setURL("https://docs.oracle.com/en/java/javase/17/")
        .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/java-3628857-3029997.png")
        .setTimestamp()
        .setFooter('Add me Merwan#4680');
        channel.send({embeds: [Embed]});
    },
};