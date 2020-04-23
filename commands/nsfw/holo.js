const sa = require("superagent");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "nsfw-holo",
    category: "nsfw",
    run: async (client, message, args) => {
        if(!message.channel.nsfw) return message.reply(`Go to nsfw channel! Зайди в nsfw канал!`)
        client.channels.cache.get("702059843875373076").send(`Выполнено: hentai пользователем ${message.author.tag}`)
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/hololewd`)

        let e = new MessageEmbed()
        .setAuthor(`Holo :D`)
        .setImage(body.url)
        .setColor("PURPLE")
        message.channel.send(e)
    }
}
