const {MessageEmbed} = require("discord.js");
const sa = require("superagent");
module.exports = {
    name: "nsfw-anal",
    category: "nsfw",
    run: async (client, message, args) => {
        if(!message.channel.nsfw) return message.reply(`Go to nsfw channel! Зайди в nsfw канал!`)
        client.channels.cache.get("702059843875373076").send(`Выполнено: hentai пользователем ${message.author.tag}`)
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/anal`)

        let e = new MessageEmbed()
        .setAuthor(`Anal :D`)
        .setImage(body.url)
        .setColor("PURPLE")
        message.channel.send(e)
    }
}
