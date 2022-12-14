const Booru = require('booru')

module.exports = {
    id: ['gelbooru', 'gel', 'gb'], 
    name: 'gelbooru',
    description: 'Sends an image from Gelbooru!',
    async execute(message, args, client) {
        Booru.search('gelbooru', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}