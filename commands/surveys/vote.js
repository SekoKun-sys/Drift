const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "голосование",
    category: "surveys",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("У Вас недостаточно прав!")
        let text = args.slice(0).join(" ")
        if(args[0]) {
        let vot = new MessageEmbed()
            .setTitle("Голосование!")
            .setImage(`https://i.gifer.com/ULAK.gif`)
            .setDescription(text)
            .setColor("66FFFF")
        message.channel.send(vot).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        })
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: vote пользователем ${message.author.tag}`)
        } else {
            return message.channel.send("Укажите текст чтобы провести голосование")
        }
    }
}