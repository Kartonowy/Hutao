module.exports = {
    name: 'clear',
    description: 'clear messages command',
    async execute(message, args){
        if (!args[0]) return message.reply("Podaj ilość wiadomości które chcesz usunąć")
        if (isNaN(args[0])) return message.reply("Proszę podaj liczbę!")
        
        if (args[0] > 100) return message.reply("Nie możesz usunąć więcej niż 100 wiadomości!")
        if (args[0] < 1) return message.reply("Musisz usunąć conajmniej 1 wiadomość!")

        await message.channel.messages.fetch({limit: args[0]}).then (messages => {
            message.channel.bulkDelete(messages);
        })
        
    }
}