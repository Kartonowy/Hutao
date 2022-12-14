const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    name: 'Play',
    description: 'Adds a song to queue.',
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Adds a song to the queue')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('Song query')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id)
        if (!guildQueue) {
            guildQueue = interaction.client.player.createQueue(interaction.guild.id)
            await guildQueue.join(interaction.member.voice.channel)
        } 
        console.log(interaction.options.get('query').value)
        let song = await guildQueue.play(interaction.options.get('query').value).catch((err) => {
            console.log(err)
            if (!guildQueue) guildQueue.stop()
        })
        console.log(song.name)
        await interaction.editReply(`Dodano do kolejki **${song.name}**`)
    },
}
