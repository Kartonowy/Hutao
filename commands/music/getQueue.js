const { EmbedBuilder } = require('discord.js')

module.exports = {
    id: ['queue', 'q'],
    name: 'Queue',
    description: 'Shows queue',
    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id)
        let queueEmbed = new EmbedBuilder()
            .setColor('#213769')
            .setTitle('Kolejka:');
        let songList = guildQueue.songs
        for (let i = 0; i<songList.length;i++) {
            queueEmbed.addFields({ name: `${i+1}`, value: `${songList[i].name}`})
            console.log(songList[i].name)
        }
        await message.reply({ embeds: [queueEmbed]})
    },
}
