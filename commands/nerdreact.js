module.exports = {
    name: 'this_',
    description: 'vulcan',
    execute(message, args, Discord){
        const {EmbedBuilder} = require('discord.js')
        const newEmbed = new EmbedBuilder()
        .setColor("#F8B511")
        .setTitle("Let The Hunger Games Begin")
        .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        .setDescription("smieszne")
        .addFields(
            {name: 'wartosc1', value: 'milusio'},
            {name: 'wartosc2', value: 'bardzo'},
            {name: 'wartosc3', value: 'niesamowite'}
        )
        .setImage("https://media.tenor.com/vuUIcHmySbkAAAAC/censored-anime-pussy-pussy.gif")        
        message.channel.send({ embeds: [newEmbed]})
    }
}