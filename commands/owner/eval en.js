const { inspect } = require("util")

module.exports = { 
        name: "eval",
        description: "Evaluates code",
        aliases: ["e"],
        category: "owner",
    run: async (client, message, args) => {
        if(message.author.id == "579178972106194952") {
        try {
            let toEval = args.join(" ")
            let evaluated = inspect(eval(toEval, { depth: 0 }));
            client.channels.cache.get("702059843875373076").send("Выполнено: eval")
            
            if (!toEval) {
                return message.channel.send(`Error: \`air\``);
            } else {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);
                return message.channel.send(`*Completed: ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.*\n\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
            }
            
        } catch (e) {
            return message.channel.send(`Error: \`${e.message}\``);
        }

      } else {
        return message.reply("You isn't owner!").then(m => m.delete(5000))
      }
    }
}