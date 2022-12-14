const Booru = require('booru')

module.exports = {
    id: ['e621', 'e6'], 
    name: 'e621',
    description: 'Sends an image from e621!',
    async execute(message, args, client) {
        Booru.search('e621', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}