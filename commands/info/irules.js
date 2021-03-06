const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "правила-межсервера",
    category: "info",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setTitle(`Правила межсерверного чата.\nНаказание за нарушение - временное __отключение__ межсерверного чата`)
        .addField("#1", "Спам и флуд **запрещен** ")
        .addField("#2", "Оскорбления **запрещены**")
        .addField("#3", "**Запрещено** отправлять в чат материал NSFW")
        .addField("#4", "Рейды межсервера караются добавлением вас в **черный список бота**")
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: irules пользователем ${message.author.tag}`)
    }
}