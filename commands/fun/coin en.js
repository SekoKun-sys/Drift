const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "coin",
    category: "fun",

    run: async (client, message, args) => {
        let rand = ["Решка!", "Орёл!"]
        let temp = rand[Math.floor(Math.random() * rand.length)]
        let embed12 = new MessageEmbed()
        .setAuthor("Подбросить монетку")
        .setDescription(temp)
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed12)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: coin пользователем ${message.author.tag}`)
    }
}