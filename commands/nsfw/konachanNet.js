const Booru = require('booru')

module.exports = {
    id: ['kn', 'konan', 'knet'], 
    name: 'konachannet',
    description: 'Sends an image from konachan.net!',
    async execute(message, args, client) {
        Booru.search('konan', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}