const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "статы",
    category: "info",
    description: "Показывает задержку команд(пинг)",
    run: async (client, message, args) => {   
        let embed = new MessageEmbed()
        .setTitle("Статы бота")
        .setThumbnail(client.user.avatarURL())
        .addField("⚙️Сервера", `${client.guilds.cache.size}`)
        .addField("⚙️Участники", `${client.users.cache.size}`)
        .addField(`**⚙️Пинг**:`, `${Math.round(client.ws.ping)}`)
        .addField("⚙️Каналы", `${client.channels.cache.size}`)
        .addField("⚙️Количество команд", `${client.commands.size}`)
        .setColor("66FFFF")
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: stats пользователем ${message.author.tag}`)
    }
}