const { SlashCommandBuilder } = require('discord.js')
const { RepeatMode } = require("discord-music-player");

module.exports = {
    name: 'Loop',
    description: 'Loops the song or queue, or disables the queue.',
    data: new SlashCommandBuilder()
        .setName('loop')
        .setDescription('Loops the song or queue')
        .addStringOption(option =>
            option.setName('option')
                .setDescription('What do you want to queue, song or queue, or disable the queue')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id)
        let queuedObject = interaction.options.get('option').value
        if (queuedObject === "song" || queuedObject === "Song") {
            guildQueue.setRepeatMode(RepeatMode.SONG); // or 1 instead of RepeatMode.SONG
            await interaction.editReply('Zapętlono piosenkę.')
        } else if (queuedObject === "queue" || queuedObject === "Queue") {
            guildQueue.setRepeatMode(RepeatMode.QUEUE); // or 2 instead of RepeatMode.QUEUE
            await interaction.editReply('Zapętlono kolejkę.')
        } else if (queuedObject === "disable" || queuedObject === "Disable") {
            guildQueue.setRepeatMode(RepeatMode.DISABLED); // or 0 instead of RepeatMode.DISABLED
            await interaction.editReply('Zatrzymano kolejkę.')
        }        
    },
}

