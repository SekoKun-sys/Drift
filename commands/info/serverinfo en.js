const { MessageEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions");

module.exports = {
    name: "server",
    aliases: ["serverinfo"],
    category: "info",
    run: async (client, message, args) => {

        let created = formatDate(message.guild.createdAt)

        let embed = new MessageEmbed()
            .setTitle(`Server information ${message.guild.name}`)
            .addField("ID", message.guild.id)
            .addField("Server owner", message.guild.owner.tag)
            .addField("Server created", created)
            .setColor("66FFFF")
            .setThumbnail(message.guild.iconURL())
            .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: server пользователем ${message.author.tag}`)
    }
}