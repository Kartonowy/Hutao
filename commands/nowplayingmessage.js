module.exports = {
    name: 'nowplaying',
    description: 'Message which shows what was added to the queue',
    execute(message,song,Discord){
        const {EmbedBuilder} = require('discord.js')
        const newEmbed = new EmbedBuilder()
        .setColor("#F8B511")
        .setTitle(song.name)
        .setURL(song.url)
        .setDescription("Dodano do Kolejki")        
        .setImage(song.thumbnail)
        message.channel.send({ embeds: [newEmbed]})
    }
}