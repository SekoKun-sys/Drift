const math = require("mathjs")
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "калькулятор",
    category: "info",
    run: async (client, message, args) => {
        if(!args[0]) {
            return message.channel.send("Укажите пожалуйста пример")
        } else {
            let resp;
            try {
                resp = math.evaluate(args.join(" "))
            } catch (e) {
                return message.channel.send("Вы указали неправильный пример")
            }
            let emb = new MessageEmbed()
            .setTitle("Математические вычисления")
            .addField("Пример:", `\`\`\`${args.join(" ")}\`\`\``)
            .addField("Ответ на пример:", `\`\`\`${resp}\`\`\``)
            .setColor("66FFFF")
            .setTimestamp()
            message.channel.send(emb)
            message.delete().catch()
            client.channels.cache.get("702059843875373076").send(`Выполнено: calc пользователем ${message.author.tag}`)
        }
        }
    }