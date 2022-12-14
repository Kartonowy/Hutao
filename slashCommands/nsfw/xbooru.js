const { SlashCommandBuilder } = require('discord.js')
const Booru = require('booru')

module.exports = {
    name: 'xbooru',
    description: 'Replies with an image from xbooru!',
    data: new SlashCommandBuilder()
        .setName('xbooru')
        .setDescription('Replies with an image from xbooru!')
        .addStringOption(option => 
            option.setName('tags')
            .setDescription('Tagi wyszukiwanego obrazka')
            .setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply()
        Booru.search('xbooru', interaction.options.get('tags').value, {random: true})
            .then(posts => {
                for (let post of posts) {
                    interaction.editReply(post.fileUrl)
                }
            })
    },
}
