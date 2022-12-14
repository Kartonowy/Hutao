const Booru = require('booru')

module.exports = {
    id: ['xb', 'xbooru'], 
    name: 'xbooru',
    description: 'Sends an image from xbooru!',
    async execute(message, args, client) {
        Booru.search('xbooru', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}