const superagent = require("superagent")
const {MessageEmbed} = require("discord.js");
 
module.exports = {
    name: "пёс",
    category: "fun",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`https://random.dog/woof.json`);

        let embed = new MessageEmbed()
        .setTitle("Пёсик:dog:")
        .setImage(body.url)
        .setTimestamp()
        .setColor("PURPLE")
        client.channels.cache.get("702059843875373076").send(`Выполнено: dog пользователем ${message.author.tag}`)
        message.channel.send(embed)
    }

}