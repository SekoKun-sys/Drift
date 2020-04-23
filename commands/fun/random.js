const {MessageEmbed} = require("discord.js");
  module.exports = {
    name: "случайное-число",
    category: "fun",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        console.log(`Выполнено: random пользователем ${message.author.tag}`)
        .setTitle("Случайное число")
        .setDescription("Выпало: " + getRandomInt(args[0], args[1]))
        .setColor("66FFFF")
        .setTimestamp()
        if(!args[0]) {
            return message.channel.send("Укажите первое число!")
        }
        if(!args[1]) {
            return message.channel.send("Укажите второе число!")
        }
        if(isNaN(args[1])) return message.channel.send("Вы указали не число!")
        if(isNaN(args[0])) return message.channel.send("Вы указали не число!")
        client.channels.cache.get("702059843875373076").send(`Выполнено: случайное число пользователем ${message.author.tag}`)
        message.channel.send(embed);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }