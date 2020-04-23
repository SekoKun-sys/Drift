const superagent = require("superagent")
const {MessageEmbed} = require("discord.js");
 
module.exports = {
    name: "cat",
    category: "fun",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`http://aws.random.cat//meow`);

        let embed = new MessageEmbed()
        .setTitle("Cat:cat:")
        .setImage(body.file)
        .setColor("66FFFF")
        .setTimestamp()
        client.channels.cache.get("702059843875373076").send(`Выполнено: cat пользователем ${message.author.tag}`)
        message.channel.send(embed)
    }

}