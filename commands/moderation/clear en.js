module.exports = {
    name: "clear",
    aliases: ["purge", "nuke", "c", "очистка", "о"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You haven't got a permissions to clear messages.").then(m => m.delete(5000));
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("I can't clear this number of messages").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("I haven't permissions to clear messages.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`cleared \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`Error: ${err}`));
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: clear пользователем ${message.author.tag}`)
    }
}