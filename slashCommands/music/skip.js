const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    name: 'Skip',
    description: 'Skips a song in queue.',
    data: new SlashCommandBuilder()
        .setName('skip')
        .setDescription('Skips a song in queue'),
    async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id)
        guildQueue.skip()
        await interaction.reply('Pominięto utwór!')
    },
}
