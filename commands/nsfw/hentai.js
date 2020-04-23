const sa = require("superagent");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "nsfw-hentai",
    category: "nsfw",
    run: async (client, message, args) => {
        if(!message.channel.nsfw) return message.reply(`Go to nsfw channel! Зайди в nsfw канал!`)
        client.channels.cache.get("702059843875373076").send(`Выполнено: hentai пользователем ${message.author.tag}`)
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/hentai`)

        let e = new MessageEmbed()
        .setAuthor(`Hentai :D`)
        .setImage(body.url)
        .setColor("PURPLE")
        message.channel.send(e)
    }
}


