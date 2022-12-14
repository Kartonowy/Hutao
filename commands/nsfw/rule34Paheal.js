const Booru = require('booru')

module.exports = {
    id: ['pa', 'paheal'], 
    name: 'rule34.paheal',
    description: 'Sends an image from rule34.paheal.net!',
    async execute(message, args, client) {
        Booru.search('paheal', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}