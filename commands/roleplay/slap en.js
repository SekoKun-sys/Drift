const {MessageEmbed} = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "slap",
    category: "roleplay",
    run: async (client, message, args) => {
        const toHug = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!toHug) {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/slap`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} slapped myself. idiot... >:D`)
            .setImage(body.url)
            .setColor("BLACK")
            message.channel.send(embed)
        } else {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/slap`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} slapped ${toHug.user.username} >:D`)
            .setImage(body.url)
            .setColor("PURPLE")
            message.channel.send(embed)
            client.channels.cache.get("702059843875373076").send(`Выполнено: slap пользователем ${message.author.tag}`)
        }
    }
}