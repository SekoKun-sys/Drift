const {MessageEmbed} = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "suicide",
    category: "roleplay",
    run: async (client, message, args) => {
        const toHug = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!toHug) {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/suicide`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} kill himself`)
            .setImage(body.url)
            .setColor("BLACK")
            message.channel.send(embed)
            client.channels.cache.get("702059843875373076").send(`Выполнено: suicide пользователем ${message.author.tag}`)
        }
    }
}