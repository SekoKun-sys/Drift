const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "info",
    category: "info",

    run: async (client, message) => {
        let member1 = ["579178972106194952"]
        let member2 = [ "388218132067516417"]
        let embed = new MessageEmbed()
        .setTitle(`Bot Drifter`)
        .setThumbnail(client.user.avatarURL())
        .setDescription("**Drifter** - self-written bot. \n \n Bot Prefix -  `d!` \n \n the Bot is written in the library [Discord.js](https://discord.js.org/#/). \n \n At the moment, the bot has RP commands, fun commands, commands for moderation, its own Interserver chat. \n to display the list of commands, enter `d!help`. \n Bot is available for monitoring: [Top.gg](https://top.gg)")
        .setColor("66FFFF")
        .addFields(
            {name:`The owners and developers of the bot:`,value: `<@${member1}> <@${member2}>`, inline:true },
            {name:`If you found a bug or error:`, value: `Notify the developers: <@${member1}> <@${member2}> / Send the bug via d!bus <your message> / Write to [support server](https://discord.gg/3UXWAmb)`, inline:false } 
                  )
            .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        client.channels.cache.get("702059843875373076").send(`Выполнено: info пользователем ${message.author.tag}`)
    }
}