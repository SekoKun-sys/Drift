const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "тест",
    category: "fun",
    aliases: ["т"],
    run: async (client, message, args) => {
        message.react("🇷")
        message.react("🇪")
        message.react("🇦")
        message.react("🇩")
        message.react("🇾")
        message.react("✅")
        client.channels.cache.get("702059843875373076").send(`Выполнено: тест пользователем ${message.author.tag}`)
    }
}