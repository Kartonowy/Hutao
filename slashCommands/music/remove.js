const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    name: 'Remove',
    description: 'Removes the song from the.',
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Removes the song from the queue')
        .addStringOption(option =>
            option.setName('index')
                .setDescription('Miejsce utwóru w kolejce, który chcesz usunąć')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id)
        let songR = guildQueue.songs[parseInt(interaction.options.get('index').value)-1].name
        if (parseInt(interaction.options.get('index')) === 1 && guildQueue.songs.length === 1) {
            guildQueue.stop()
        } else if (parseInt(interaction.option.get('index')) === 1) {
            guildQueue.skip()
        } else {
            guildQueue.remove(parseInt(interaction.options.get('index').value)-1)
        }
        await interaction.editReply(`Usunięto z kolejki **${songR}**`)
    },
}
