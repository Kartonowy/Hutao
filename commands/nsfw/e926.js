const Booru = require('booru')

module.exports = {
    id: ['e926', 'e9'], 
    name: 'e926',
    description: 'Sends an image from e926!',
    async execute(message, args, client) {
        Booru.search('e926', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}