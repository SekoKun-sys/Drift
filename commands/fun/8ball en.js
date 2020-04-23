const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "8ball",
    category: "fun",
    aliases: ["8b"],
    run: async (client, message, args) => {
        let text = args.slice(0).join(" ")
        if(!text) return message.channel.send("Ask me.")
        let rand = ["Yes!", "Of course!", "No!", "Unlikely.", "I doubt.", "Ask later."]
        let temp = rand[Math.floor(Math.random() * rand.length)]
        let embed = new MessageEmbed()
        .setAuthor(`${message.author.username} asked:`, message.author.displayAvatarURL())
        .setDescription(`\`\`\`${text}\`\`\` \n**8ball answered:** \n \`\`\`${temp}\`\`\``)
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: 8ball пользователем ${message.author.tag}`)
    }
}