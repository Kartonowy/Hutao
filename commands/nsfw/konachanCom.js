const Booru = require('booru')

module.exports = {
    id: ['kc', 'konac', 'kcom'], 
    name: 'konachancom',
    description: 'Sends an image from Konachan.com!',
    async execute(message, args, client) {
        Booru.search('konac', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}