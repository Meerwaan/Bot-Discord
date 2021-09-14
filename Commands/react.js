const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'react',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
        .setColor("#561FE0")
        .setTitle("Documentation de React JS")
        .setAuthor('R2D3 by Merwan ')
        .setURL("https://fr.reactjs.org/docs/getting-started.html")
        .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png")
        .setTimestamp()
        .setFooter('Add me Merwan#4680');
        channel.send({embeds: [Embed]});
    },
};