const Booru = require('booru')

module.exports = {
    id: ['db', 'danbooru', 'dan'], 
    name: 'danbooru',
    description: 'Sends an image from danbooru!',
    async execute(message, args, client) {
        Booru.search('danbooru', args, {random: true})
            .then(posts => {
                for (let post of posts) {
                    message.channel.send(post.fileUrl)
                }
            })
    },
}