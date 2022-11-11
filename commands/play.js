const ytdl = require("ytdl-core");
const ytSearch = require('yt-search');
const { joinVoiceChannel } = require("@discordjs/voice");
const { AudioPlayerStatus, createAudioPlayer, createAudioResource } = require("@discordjs/voice");

module.exports = {
    name: "play",
    description: "joins and plays a video from youtube",
    async execute(message,args, guildQueue) {
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(err => {
            console.log(err);
            if(!guildQueue)
                queue.stop();
        });
        // const voiceChannel = message.member.voice.channel;

        // if (!voiceChannel) return message.channel.send("Musisz byc na vc by to wykonac");
        // const permissions = voiceChannel.permissionsFor(message.client.user);
        // if (!permissions.has('CONNECT')) return message.channel.send("Nie masz permisji");
        // if (!permissions.has('SPEAK')) return message.channel.send("Nie masz permisji");
        // if (!args.length) return message.channel.send("dodaj argumenty")

        // const connection = joinVoiceChannel(
        //     {
        //         channelId: message.member.voice.channel.id,
        //         guildId: message.guild.id,
        //         adapterCreator: message.guild.voiceAdapterCreator
        //     });


        // const videoFinder = async (query) => {
        //     const videoResult = await ytSearch(query);

        //     return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        // }
        
        // const video = await videoFinder(args.join(" "));

        // // if (video) {
        // //     const stream = ytdl(video.url, {filter: "audioonly"})
        // //     // connection.play(stream, {seek: 0, volume: 1})
        // //     const player = createAudioPlayer();
        // //     const resource = createAudioResource(video);
        // //     async function play() {
        // //         await player.play(resource);
        // //         connection.subscribe(player);
        // //     }
        // //     // .on('finish', ()=> {
        // //     //     voiceChannel.leave();
        // //     // })
        // //     await message.reply(`Now playing ***${video.title}***`)
        // // } else {
        // //     message.channel.send("no videos found")
        // // }
        // if (video) {
        //     const stream = ytdl(video.url, { filter: 'audioonly' });
        //     const player = createAudioPlayer();
        //     const resource = createAudioResource(stream);
      
        //     await player.play(resource);
        //     connection.subscribe(player);
      
        //     player.on('error', (error) => console.error(error));
        //     player.on(AudioPlayerStatus.Idle, () => {
        //       console.log(`song's finished`);
        //       connection.disconnect();
        //     });
      
        //     await message.reply(`:thumbsup: Now playing ***${video.title}***`);
        // } else {
        //     message.channel.send('No video results found');
        //  }
    }
}