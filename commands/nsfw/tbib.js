const Booru = require('booru')

module.exports = {
    id: ['tb', 'tbib', 'big'], 
    name: 'Tbib',
    description: 'Sends an image from Tbib!',
    async execute(message, args, client) {
        Booru.search('tbib', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}