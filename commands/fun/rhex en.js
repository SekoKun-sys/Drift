const rh = require("random-hex")
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "rhex",
    public: true,
    run: async (client, message, args) => {
        let color = rh.generate()
        let embed = new MessageEmbed()
        .setDescription(`Random color and his hex: - \`${color}\` \n
        👈Color`)
        .setColor(`${color}`)
        .setTimestamp()
        message.channel.send(embed)
        client.channels.cache.get("702059843875373076").send(`Выполнено: rhex пользователем ${message.author.tag}`)
    }
}