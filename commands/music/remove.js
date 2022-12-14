module.exports = {
    id: ['remove', 'r'],
    name: 'Remove',
    description: 'Removes song from the queue',
    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
        let songR = guildQueue.songs[parseInt(args[0])-1].name
        guildQueue.remove(parseInt(args[0])-1)
        if (parseInt(args[0]) === 1 && guildQueue.songs.length === 1) {
            guildQueue.stop()
        } else if (parseInt(interaction.option.get('index')) === 1) {
            guildQueue.skip()
        } else {
            guildQueue.remove(parseInt(args[0])-1)
        }
        await message.channel.send(`Usunięto z kolejki **${songR}**`)
    },
}