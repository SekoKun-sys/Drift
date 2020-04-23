const { MessageEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions");

module.exports = {
    name: "юзер",
    category: "info",
    run: async (client, message, args) => {
        let member = getMember(message, args.join(" "))

        let joined = formatDate(member.user.joinedAt)
        let created = formatDate(member.user.createdAt)

        let embed = new MessageEmbed()
            .setTitle(`Информация ${member.user.tag}`)
            .addField("ID", member.user.id)
            .addField("Ник", member.user.username)
            .addField("Ник на сервере", member.displayName)
            .addField("Дискрим", member.user.discriminator)
            .addField("Тэг ", member.user.tag)
            .addField("Создан аккаунт", created)
            .addField("Присоединился", joined)
            .setColor("66FFFF")
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: user пользователем ${message.author.tag}`)
    }
}