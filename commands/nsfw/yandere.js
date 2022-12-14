const Booru = require('booru')

module.exports = {
    id: ['yd', 'yand', 'yandere'], 
    name: 'Yandere',
    description: 'Sends an image from Yandere!',
    async execute(message, args, client) {
        Booru.search('yandere', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}