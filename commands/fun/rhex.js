const rh = require("random-hex")
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "цвет",
    public: true,
    run: async (client, message, args) => {
        let color = rh.generate()
        let embed = new MessageEmbed()
        .setDescription(`Случайный цвет и его код: - \`${color}\` \n
        👈Предпросмотр`)
        .setColor(`${color}`)
        .setTimestamp()
        message.channel.send(embed)
        client.channels.cache.get("702059843875373076").send(`Выполнено: цвет пользователем ${message.author.tag}`)
    }
}