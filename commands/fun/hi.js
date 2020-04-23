
module.exports = {
    name: "привет",
    category: "fun",
    aliases: ["п"],
    run: async (client, message, args) => {
        message.delete().catch()
        message.channel.send("Привет всем:wave:")
        client.channels.cache.get("702059843875373076").send(`Выполнено: hi пользователем ${message.author.tag}`)
        }
    }

