const path = require('path')
const fs = require('fs')
module.exports = (client) => {
    /*
     * SLASH COMMANDS
     * */
    const slashCommandsPath = path.join(__dirname, 'slashCommands')
    const slashCommandFiles = fs
        .readdirSync(slashCommandsPath)
        .filter((file) => file.endsWith('.js'))

    for (const file of slashCommandFiles) {
        const filePath = path.join(slashCommandsPath, file)
        const command = require(filePath)
        if ('data' in command && 'execute' in command) {
            client.slashCommands.set(command.data.name, command)
        } else {
            console.log(
                `[WARNING] The slash command at ${filePath} is missing a required "data" or "execute" property.`
            )
        }
    }

    /*
     * COMMANDS
     * */
    const commandsPath = path.join(__dirname, 'commands')
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file) => file.endsWith('.js'))

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file)
        const command = require(filePath)
        if ('execute' in command) {
            for (const id of command.id) {
                client.commands.set(id.toLowerCase(), command)
            }
        } else {
            console.log(
                `[WARNING] The command at ${filePath} is missing a required "execute" property.`
            )
        }
    }
}
