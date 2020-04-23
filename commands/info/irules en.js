const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "irules",

    category: "info",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setTitle(`the Rules of cross-server chat.\penalty for violation - temporary __disabling__ interserver chat`)
        .addField("#1", " Spam and flood **prohibited** ")
        .addField("#2", " Insults **forbidden**")
        .addField("#3", "**Forbidden** to send NSFW material to chat")
        .addField("#4", "interserver Raids are punishable by adding you to the bot's **blacklist**")
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: irules пользователем ${message.author.tag}`)
    }
}