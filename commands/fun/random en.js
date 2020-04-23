const {MessageEmbed} = require("discord.js");
  module.exports = {
    name: "random",
    aliases: ["randnum", "rannum", "randomnumber"],
    category: "fun",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        console.log(`Выполнено: random пользователем ${message.author.tag}`)
        .setTitle("Random number")
        .setDescription("Random number: " + getRandomInt(args[0], args[1]))
        .setColor("66FFFF")
        .setTimestamp()
        if(!args[0]) {
            return message.channel.send("Enter the first number!")
        }
        if(!args[1]) {
            return message.channel.send("Enter the second number!")
        }
        if(isNaN(args[1])) return message.channel.send("You enter a wrong number!")
        if(isNaN(args[0])) return message.channel.send("You enter a wrong number!")
        client.channels.cache.get("702059843875373076").send("Выполнено: random")
        message.channel.send(embed);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }