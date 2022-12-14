const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'Queue',
    description: 'Displays queue.',
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription("Displays guild's queue"),
    async execute(interaction) {
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id)
        await interaction.deferReply()
        let queueEmbed = new EmbedBuilder()
            .setColor('#213769')
            .setTitle('Kolejka:');
        let songList = guildQueue.songs
        for (let i = 0; i<songList.length;i++) {
            queueEmbed.addFields({ name: `${i+1}`, value: `${songList[i].name}`})
            console.log(songList[i].name)
        }
        await interaction.editReply({ embeds: [queueEmbed]})
    },
}
