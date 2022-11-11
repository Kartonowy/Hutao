const { GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates] });
const { RepeatMode } = require("discord-music-player");
const { OpusEncoder } = require('@discordjs/opus');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10')

const prefix = ".";

const fs = require('fs');

const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false, // This options are optional.
});
client.player = player; // You can define the Player as *client.player* to easily access it.

const rest = new REST({ version: '10'}).setToken('MTAzNTI4OTY4MDI3NjYyMzQ1Mw.GerC5S.4YPS1bTofY_8C3NkaDBKDUW2tl4BzLQA8My8iI');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log("Time to go!")
})


client.player
    // Emitted when channel was empty.
    .on('channelEmpty',  (queue) =>
        console.log(`Everyone left the Voice Channel, queue ended.`))
    // Emitted when a song was added to the queue.
    .on('songAdd',  (queue, song) =>
        console.log(`Song ${song} was added to the queue.`))
    // Emitted when a playlist was added to the queue.
    .on('playlistAdd',  (queue, playlist) =>
        console.log(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`))
    // Emitted when there was no more music to play.
    .on('queueDestroyed',  (queue) =>
        console.log(`The queue was destroyed.`))
    // Emitted when the queue was destroyed (either by ending or stopping).    
    .on('queueEnd',  (queue) =>
        console.log(`The queue has ended.`))
    // Emitted when a song changed.
    .on('songChanged', (queue, newSong, oldSong) =>
        console.log(`${newSong} is now playing.`))
    // Emitted when a first song in the queue started playing.
    .on('songFirst',  (queue, song) =>
        console.log(`Started playing ${song}.`))
    // Emitted when someone disconnected the bot from the channel.
    .on('clientDisconnect', (queue) =>
        console.log(`I was kicked from the Voice Channel, queue ended.`))
    // Emitted when deafenOnJoin is true and the bot was undeafened
    .on('clientUndeafen', (queue) =>
        console.log(`I got undefeanded.`))
    // Emitted when there was an error in runtime
    .on('error', (error, queue) => {
        console.log(`Error: ${error} in ${queue.guild.name}`);
    });

client.on("ready", async () => {
    try {
        await rest.put(
            Routes.applicationCommand(client.user.id),
            { body: commands}
        );
    } catch (error) {
        console.error(error);
    }
    log(`${client.user.username} activated!`)
})

client.on('messageCreate', async (message) => {
    console.log(message.guild.id + " " + message.guild.name + ": " + message.channel + " " + message.channel.name + ": " + message.author.username + "#" + message.author.discriminator + ": " + message.content)
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    console.log("Message starts with prefix!")
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    let guildQueue = client.player.getQueue(message.guild.id)

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args) //pong
    } 

    if(command === 'play' || command=== 'p') {
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(err => {
            console.log(err);
            if(!guildQueue)
                queue.stop();
        });
        client.commands.get('nowplaying').execute(message,song,Discord);
    }

    if(command === 'playlist') {
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.playlist(args.join(' ')).catch(err => {
            console.log(err);
            if(!guildQueue)
                queue.stop();
        });
        client.commands.get('nowplaying').execute(message,song,Discord);
    }

    if(command === 'skip') {
        guildQueue.skip();
    }
    if(command === 'stop') {
        guildQueue.stop();
    }

    if(command === 'removeLoop') {
        guildQueue.setRepeatMode(RepeatMode.DISABLED); // or 0 instead of RepeatMode.DISABLED
    }

    if(command === 'toggleLoop') {
        guildQueue.setRepeatMode(RepeatMode.SONG); // or 1 instead of RepeatMode.SONG
    }

    if(command === 'toggleQueueLoop') {
        guildQueue.setRepeatMode(RepeatMode.QUEUE); // or 2 instead of RepeatMode.QUEUE
    }

    if(command === 'setVolume') {
        guildQueue.setVolume(parseInt(args[0]));
    }

    if(command === 'seek') {
        guildQueue.seek(parseInt(args[0]) * 1000);
    }

    if(command === 'clearQueue') {
        guildQueue.clearQueue();
    }

    if(command === 'shuffle') {
        guildQueue.shuffle();
    }

    if(command === 'getQueue') {
        console.log(guildQueue);
    }

    if(command === 'getVolume') {
        console.log(guildQueue.volume)
    }

    if(command === 'nowPlaying') {
        console.log(`Now playing: ${guildQueue.nowPlaying}`);
    }

    if(command === 'pause') {
        guildQueue.setPaused(true);
    }

    if(command === 'resume') {
        guildQueue.setPaused(false);
    }

    if(command === 'remove') {
        guildQueue.remove(parseInt(args[0]));
    }

    if(command === 'createProgressBar') {
        const ProgressBar = guildQueue.createProgressBar();
        
        // [======>              ][00:35/2:20]
        console.log(ProgressBar.prettier);
    } 
    switch (command) {
        case 'sex':
            client.commands.get('sex command').execute(message, args)
            break; //funni command
        case 'this':
            client.commands.get('this_').execute(message, args, Discord);
            break; //test embed with censored
        case 'clear':
            client.commands.get('clear').execute(message,args);
            break;
        // case 'play':
        //     client.commands.get('play').execute(message,args, guildQueue);
        //     break;
        // case 'leave':
        //     break;
        default:
            break; //none of the cases eqals value of message.content
    }
})






































































client.login(token);
