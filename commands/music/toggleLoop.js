const { RepeatMode } = require("discord-music-player");

module.exports = {
    id: ['loop', 'l'],
    name: 'Loop',
    description: 'Loop options',
    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
        let queuedObject = args.join(' ');
        if (queuedObject === "song" || queuedObject === "Song") {
            guildQueue.setRepeatMode(RepeatMode.SONG); // or 1 instead of RepeatMode.SONG
            await message.channel.send('Zapętlono piosenkę.')
        } else if (queuedObject === "queue" || queuedObject === "Queue") {
            guildQueue.setRepeatMode(RepeatMode.QUEUE); // or 2 instead of RepeatMode.QUEUE
            await message.channel.send('Zapętlono kolejkę.')
        } else if (queuedObject === "disable" || queuedObject === "Disable") {
            guildQueue.setRepeatMode(RepeatMode.DISABLED); // or 0 instead of RepeatMode.DISABLED
            await message.channel.send('Zatrzymano kolejkę.')
        }
    },
}