
module.exports = {
    name: "hi",
    category: "fun",
    run: async (client, message, args) => {
        message.delete().catch()
        message.channel.send("Hi all:wave:")
        client.channels.cache.get("702059843875373076").send(`Выполнено: hi пользователем ${message.author.tag}`)
        }
    }

