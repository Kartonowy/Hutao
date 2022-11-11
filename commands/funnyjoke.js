module.exports = {
    name: 'sex command',
    description: 'xd command',
    execute(message, args){

        if(message.member.roles.cache.has("1035616422317015140")) {
            message.channel.send('yes sex is funny :rofl:');
        } else {
            message.channel.send('no sex for you');
            message.channel.send('https://tenor.com/view/nosex-sex-cat-gif-18490822')
            message.member.roles.add('1035616422317015140').catch(console.error);
        }
        
    }
}