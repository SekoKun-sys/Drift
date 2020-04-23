const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "sayembed",
    category: "fun",
    aliases: ["se", "сп"],
    run: async (client, message, args) => {
        var text = message.content.split(' ').slice(1).join(' ');
        var sayembed = new MessageEmbed()
        .setDescription(text)
        .setColor("66ffff")
        .setTimestamp()
        var errembed = new MessageEmbed()
        .setTitle('Invalid syntax!')
        .setColor("66FFFF")
        .setTimestamp()
        .setDescription(`Invalid command syntax! Example of use:\n**d!say Text**`)
        message.delete().catch()
        if(!text) return message.channel.send(errembed); message.delete().catch();
         message.channel.send(sayembed);
        message.delete().catch()
        message.channel.stopTyping()
        client.channels.cache.get("702059843875373076").send(`Выполнено: sayembed пользователем ${message.author.tag}`)
    } 
 }
