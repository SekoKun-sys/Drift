const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    category: "fun",
    run: async (client, message, args) => {
        var text = message.content.split(' ').slice(1).join(' ');
        message.delete().catch()
        if(!text) return message.channel.send("Enter the vontent of message."); message.delete().catch();
         message.channel.send(text);
        message.delete().catch()
        message.channel.stopTyping()
        client.channels.cache.get("702059843875373076").send(`Выполнено: say пользователем ${message.author.tag}`)
    } 
 }
