const { REST, Routes } = require('discord.js')
const fs = require('fs')

const CLIENT_ID = process.env.CLIENT_ID
const TOKEN = process.env.TOKEN

const commands = []
const commandFiles = fs
    .readdirSync('./slashCommands')
    .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./slashCommands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: '10' }).setToken(TOKEN)

// and deploy your commands!
;(async () => {
    try {
        console.log(
            `Started refreshing ${commands.length} application (/) commands.`
        )

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(Routes.applicationCommands(CLIENT_ID), {
            body: commands,
        })

        console.log(
            `Successfully reloaded ${data.length} application (/) commands.`
        )
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error)
    }
})()
