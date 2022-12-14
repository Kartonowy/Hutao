const { SlashCommandBuilder } = require('discord.js')
const Booru = require('booru')

module.exports = {
    name: 'e926',
    description: 'Replies with an image from e926!',
    data: new SlashCommandBuilder()
        .setName('e926')
        .setDescription('Replies with an image from e926!')
        .addStringOption(option => 
            option.setName('tags')
            .setDescription('Tagi wyszukiwanego obrazka')
            .setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply()
        Booru.search('e926', interaction.options.get('tags').value, {random: true})
            .then(posts => {
                for (let post of posts) {
                    interaction.editReply(post.fileUrl)
                }
            })
    },
}
