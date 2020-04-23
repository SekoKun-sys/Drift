const math = require("mathjs")
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "calc",
    category: "info",
    run: async (client, message, args) => {
        if(!args[0]) {
            return message.channel.send("Enter the sample")
        } else {
            let resp;
            try {
                resp = math.evaluate(args.join(" "))
            } catch (e) {
                return message.channel.send("You enter incorrect sample")
            }
            let emb = new MessageEmbed()
            .setTitle("Math")
            .addField("Sample:", `\`\`\`${args.join(" ")}\`\`\``)
            .addField("Answer:", `\`\`\`${resp}\`\`\``)
            .setColor("66FFFF")
            .setTimestamp()
            message.channel.send(emb)
            message.delete().catch()
            client.channels.cache.get("702059843875373076").send(`Выполнено: calc пользователем ${message.author.tag}`)
        }
        }
    }