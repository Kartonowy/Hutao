const { SlashCommandBuilder } = require('discord.js')
const Booru = require('booru')

module.exports = {
    name: 'galbooru',
    description: 'Replies with an image from galbooru!',
    data: new SlashCommandBuilder()
        .setName('galbooru')
        .setDescription('Replies with an image from galbooru!')
        .addStringOption(option => 
            option.setName('tags')
            .setDescription('Tagi wyszukiwanego obrazka')
            .setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply()
        Booru.search('galbooru', interaction.options.get('tags').value, {random: true})
            .then(posts => {
                for (let post of posts) {
                    interaction.editReply(post.fileUrl)
                }
            })
    },
}
