const { MessageEmbed } = require("discord.js");
const { getMember } = require("../../functions");

module.exports = {
    name: "avatar",
    aliases: ["ava", "а"],
    category: "images",
    run: async (client, message, args) => {
        let member = getMember(message, args.join(" "));
        let embed = new MessageEmbed()
        .setDescription(`[${member.displayName}'s avatar](${member.user.displayAvatarURL()})`)
        .setTimestamp()
        .setImage(member.user.displayAvatarURL())
        .setColor("66FFFF")
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: avatar пользователем ${message.author.tag}`)
    }
}