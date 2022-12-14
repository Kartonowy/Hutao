const Booru = require('booru')

module.exports = {
    id: ['sb', 'safe', 'safebooru'], 
    name: 'Safebooru',
    description: 'Sends an image from Safebooru!',
    async execute(message, args, client) {
        Booru.search('safebooru', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}