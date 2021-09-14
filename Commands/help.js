const database = require("mime-db");

const { MessageEmbed } = require("discord.js");
const { channel } = require("diagnostics_channel");
const { url } = require("inspector");

module.exports = {
    name: 'help',
    execute(client, channel, args) {
        const Embed = new MessageEmbed()
            .setColor('#561FE0')
            .setTitle('Liste des commande disponible')
            .setAuthor('R2D3 by Merwan ')
            .setDescription('Les commandes actuelles permettent de trouver la documentation de votre langage de progammation ')
            .setImage('https://sayingimages.com/wp-content/uploads/is-there-anything-help-meme.png')
            .addFields({ name: 'Help', value: '!help' })
            .addFields({ name: 'CSS', value: '!css' })
            .addFields({ name: 'Java', value: '!java' })
            .addFields({ name: 'JavaScript', value: '!js' })
            .addFields({ name: 'PHP', value: '!php' })
            .addFields(	{ name: 'Python', value: '!python' })
            .addFields(	{ name: 'React Js', value: '!react' })
            .setTimestamp()
            .setFooter('Add me Merwan#4680');

        channel.send({ embeds: [Embed], });
    }
}