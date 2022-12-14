const Booru = require('booru')

module.exports = {
    id: ['hh', 'hypno', 'hypnohub'], 
    name: 'Hypnohub',
    description: 'Sends an image from HypnoHub!',
    async execute(message, args, client) {
        Booru.search('hypnohub', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}