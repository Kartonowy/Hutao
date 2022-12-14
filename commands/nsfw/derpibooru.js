const Booru = require('booru')

module.exports = {
    id: ['dp', 'derpi', 'derpibooru'], 
    name: 'derpibooru',
    description: 'Sends an image from Derpibooru!',
    async execute(message, args, client) {
        Booru.search('derpibooru', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}