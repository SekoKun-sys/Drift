const sa = require("superagent");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "случайный-аватар",
    run: async (client, message, args) => {
        client.channels.cache.get("702059843875373076").send(`Выполнено: случайный-аватар пользователем ${message.author.tag}`)
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/avatar`)

        let e = new MessageEmbed()
        .setAuthor(`Вот вам случайный аватар.`)
        .setImage(body.url)
        .setColor("PURPLE")
        message.channel.send(e)
    }
}