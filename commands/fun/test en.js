const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "test",
    category: "fun",
    aliases: ["t"],
    run: async (client, message, args) => {
        message.react("🇷")
        message.react("🇪")
        message.react("🇦")
        message.react("🇩")
        message.react("🇾")
        message.react("✅")
        client.channels.cache.get("702059843875373076").send(`Выполнено: test пользователем ${message.author.tag}`)
    }
}