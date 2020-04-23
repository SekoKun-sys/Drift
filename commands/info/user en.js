const { MessageEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions");

module.exports = {
    name: "user",
    aliases: ["whois"],
    category: "info",

    run: async (client, message, args) => {
        let member = getMember(message, args.join(" "))

        let joined = formatDate(member.user.joinedAt)
        let created = formatDate(member.user.createdAt)

        let embed = new MessageEmbed()
        .setTitle(`Information ${member.user.tag}`)
        .addField ("ID", member.user.id)
        .addField ("Nickname", member.user.username)
        .addField ("Nickname on the server", member.displayName)
        .addField ("Discrim", member.user.discriminator)
        .addField ("Tag ", member.user. tag)
        .addField ("Created account", created)
        .addField ("Joined", joined)
        .setColor("66FFFF")
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: user пользователем ${message.author.tag}`)
    }
}