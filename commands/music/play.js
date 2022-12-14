module.exports = {
    id: ['play', 'p'],
    name: 'Play',
    description: 'Play a song',
    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id)
        if (!guildQueue) {
            guildQueue = client.player.createQueue(message.guild.id)
            await guildQueue.join(message.member.voice.channel)
        }
        let song = await guildQueue.play(args.join(' ')).catch((err) => {
            console.log(err)
            if (!guildQueue) guildQueue.stop()
        })
        await message.channel.send(`Dodano do kolejki **${song.name}**`)
    },
}