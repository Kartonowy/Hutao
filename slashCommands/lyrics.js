require('dotenv').config()

const { SlashCommandBuilder } = require('discord.js')
const Genius = require('genius-lyrics')
const Client = new Genius.Client(process.env.GENIUS_TOKEN)


module.exports = {
    name: 'Lyrics',
    description: 'Replies with lyrics of the song!',
    data: new SlashCommandBuilder()
        .setName('lyrics')
        .setDescription('Replies with lyrics of the song!'),
    async execute(interaction) {
        await interaction.deferReply()
        let guildQueue = interaction.client.player.getQueue(interaction.guild.id);
        const searches = await Client.songs.search('faded');
        const firstSong = searches[0];
        
        const lyrics = await firstSong.lyrics();
        await interaction.editReply("Lyrics of the Song: \n", lyrics)
    },
}
