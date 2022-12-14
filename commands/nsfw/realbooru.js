const Booru = require('booru')

module.exports = {
    id: ['rb', 'realbooru'], 
    name: 'Realbooru',
    description: 'Sends an image from Realbooru!',
    async execute(message, args, client) {
        Booru.search('rb', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}