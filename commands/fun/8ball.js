const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "шар",
    category: "fun",
    aliases: ["ш"],
    run: async (client, message, args) => {
        let text = args.slice(0).join(" ")
        if(!text) return message.channel.send("Спроси меня о чём-нибудь")
        let rand = ["Да!", "Конечно!", "Нет!", "Маловероятно", "Вряд ли", "Сомневаюсь", "Спроси позже"]
        let temp = rand[Math.floor(Math.random() * rand.length)]
        let embed = new MessageEmbed()
        .setAuthor(`${message.author.username} спросил у шара:`, message.author.displayAvatarURL())
        .setDescription(`\`\`\`${text}\`\`\` \n**Шар предсказал:** \n \`\`\`${temp}\`\`\``)
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: 8ball пользователем ${message.author.tag}`)
    }
}