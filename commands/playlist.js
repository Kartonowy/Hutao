module.exports = {
    name:'playlist',
    description:'Wyświetla playliste',
    async execute(message,args) {
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.playlist(args.join(' ')).catch(err => {
            console.log(err);
            if(!guildQueue)
                queue.stop();
        });
    }
}