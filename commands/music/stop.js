module.exports = {
    id: ['stop'],
    name: 'Stop',
    description: 'Stop the queue',
    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id)
        guildQueue.stop()
        await interaction.reply('Zatrzymano kolejkę!')
    },
}
