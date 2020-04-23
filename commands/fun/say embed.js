const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "панель",
    category: "fun",
    run: async (client, message, args) => {
        var text = message.content.split(' ').slice(1).join(' ');
        var sayembed = new MessageEmbed()
        .setDescription(text)
        .setColor("66ffff")
        .setTimestamp()
        var errembed = new MessageEmbed()
        .setTitle('Инвалидный синтаксис!')
        .setColor("66FFFF")
        .setTimestamp()
        .setDescription(`Инвалидный синтаксис команды! Пример использования:\n**d!say Текст**`)
        message.delete().catch()
        if(!text) return message.channel.send(errembed); message.delete().catch();
         message.channel.send(sayembed);
        message.delete().catch()
        message.channel.stopTyping()
        client.channels.cache.get("702059843875373076").send(`Выполнено: панель пользователем ${message.author.tag}`)
    } 
 }
