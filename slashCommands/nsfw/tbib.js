const { SlashCommandBuilder } = require('discord.js')
const Booru = require('booru')

module.exports = {
    name: 'tbib',
    description: 'Replies with an image from tbib!',
    data: new SlashCommandBuilder()
        .setName('tbib')
        .setDescription('Replies with an image from tbib!')
        .addStringOption(option => 
            option.setName('tags')
            .setDescription('Tagi wyszukiwanego obrazka')
            .setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply()
        Booru.search('tbib', interaction.options.get('tags').value, {random: true})
            .then(posts => {
                for (let post of posts) {
                    interaction.editReply(post.fileUrl)
                }
            })
    },
}
