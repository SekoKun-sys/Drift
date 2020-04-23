const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "bug",
    aliases: ["b", "bu", "б", "баг", "ба"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
        var text = message.content.split(' ').slice(1).join(' ');
        if(!text) return message.channel.send("Enter a content of message."); message.delete().catch();
        let embed1 = new MessageEmbed()
        .setTitle("Bug.")
        .addField("Message sended.", "Thanks for found a bug!")
        .setTimestamp()
        let embed2 = new MessageEmbed()
        .setTitle("Сообщение о баге.")
        .addField("Найденный баг:", text)
        .addFields(		
            { name: 'Сервер:', value: `\`${message.guild.name}\``, inline: true },
            { name: 'Канал:', value: `\`${message.channel.name}\``, inline: true },
            { name: 'Автор:', value: `\`${message.author.tag}\``, inline: true },
            { name: 'Айди сервера:', value: `\`${message.guild.id}\``, inline: true },
            { name: 'Айди канала:', value: `\`${message.channel.id}\``, inline: true },
            { name: 'Айди автора:', value: `\`${message.author.id}\``, inline: true },
            )
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed1)
        client.channels.cache.get("700002508344393829") .send(embed2)
        client.channels.cache.get("702059843875373076").send(`выполнено: bug пользователем ${message.author.tag}`)
    }
}