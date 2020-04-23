const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "stats",
    category: "info",
    description: "Показывает задержку команд(пинг)",

    run: async (client, message, args) => {   
        let embed = new MessageEmbed()
        .setTitle("Статы бота")
        .setThumbnail(client.user.avatarURL())
        .addField("⚙️Servers", `${client.guilds.cache.size}`)
        .addField("⚙️Users", `${client.users.cache.size}`)
        .addField(`⚙️Ping:`, `${Math.round(client.ws.ping)}`)
        .addField("⚙️Channels", `${client.channels.cache.size}`)
        .addField("⚙️Number of commands", `${client.commands.size}`)
        .setColor("66FFFF")
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: stats пользователем ${message.author.tag}`)
    }
}