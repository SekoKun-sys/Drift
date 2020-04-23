const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "vote",
    category: "surveys",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You haven't permissions!")
        let text = args.slice(0).join(" ")
        if(args[0]) {
        let vot = new MessageEmbed()
            .setTitle("Voting!")
            .setImage(`https://i.gifer.com/ULAK.gif`)
            .setDescription(text)
            .setColor("66FFFF")
        message.channel.send(vot).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        })
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: vote пользователем ${message.author.tag}`)
        } else {
            return message.channel.send("Enter the content of message.")
        }
    }
}