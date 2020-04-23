const sa = require("superagent");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "neko",
    run: async (client, message, args) => {
        if(!message.channel.nsfw) return message.reply(`Go to nsfw channel! Зайди в nsfw канал!`)
        neko.nsfw.neko()

        let e = new MessageEmbed()
        .setAuthor(`Hentai :D`)
        .setImage(neko)
        .setColor("PURPLE")
        message.channel.send(e)
    }
}
