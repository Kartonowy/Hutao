module.exports = {
    id: ['skip', 's'],
    name: 'Skip',
    description: 'Skip a song',
    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id)
        guildQueue.skip()
        await message.reply('Pominięto utwór!')
    },
}
