const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    name: 'Stop',
    description: 'Stops queue.',
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stops the queue'),
    async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id)
        guildQueue.stop()
        await interaction.reply('Zatrzymano kolejkę!')
    },
}
