const { SlashCommandBuilder } = require('discord.js')
const Booru = require('booru')

module.exports = {
    name: 'rule34',
    description: 'Replies with an image from rule34.xxx!',
    data: new SlashCommandBuilder()
        .setName('rule34')
        .setDescription('Replies with an image from rule34.xxx!')
        .addStringOption(option => 
            option.setName('tags')
            .setDescription('Tagi wyszukiwanego obrazka')
            .setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply()
        Booru.search('rule34', interaction.options.get('tags').value, {random: true})
            .then(posts => {
                for (let post of posts) {
                    interaction.editReply(post.fileUrl)
                }
            })
    },
}
