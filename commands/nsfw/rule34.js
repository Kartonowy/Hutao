const Booru = require('booru')

module.exports = {
    id: ['r34', 'rule34'], 
    name: 'Rule34',
    description: 'Sends an image from rule34.xxx!',
    async execute(message, args, client) {
        Booru.search('rule34', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}