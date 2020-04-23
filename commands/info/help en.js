const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    category: "info",
    aliases: ["h", "хелп", "х"],
    run: async (client, message) => {
        let member = "579178972106194952"
        let help = new MessageEmbed()
        .setColor("66FFFF")
        .setAuthor("My commands:")
        .setTimestamp()
        .setThumbnail(client.user.avatarURL())
        .addField("Язык", "Чтобы увидеть это сообщение на русском языке, пожалуйста напиши `d!хелп`")
        .addField("**░▒▓█►─═ Info: ═─◄█▓▒░**", `d!calc[example] - Solve the sample. **Signs:** "*"- multiplication, " / "- division, " + "- addition, " - " - subtraction \n
d!user - Find out information about the user \n
d!avatar - [ping if another person's avatar is needed] - Show avatar \n
d!invite-Invite me to the server \n
d!ping-Find out the bot's ping (delay)\n
d!stats-View the bot's stats\n
d! info-information about the bot\n
d!random[1st number][2nd number] - select a number from the 1st to the 2nd. `)
.addField("**░▒▓█►─═ Fun: ═─◄█▓▒░**", `d!flipcoin-Flip a coin \n
d!8ball[question] - to Ask of a ball \n
d!rhex-Show random color\n
d! hi-say Hello to the bot (Use it as a test) \n
d!say[text] - Say something on behalf of the bot\n
d!say embed[text]-Say something on behalf of the bot using [Embed] (https://discordjs.guide/popular-topics/embeds.html)\n
d!dog-Show a picture of a dog\n
d!cat-Show a picture of a cat `)
.addField("**░▒▓█►─═ Moderation: ═─◄█▓▒░**", `d!clear [number] - Clear chat \n
d!vote[question] - Start voting \n
d!kick-kick the participant \n
d!ban-Ban a member\n
`)
.addField("**░▒▓█►─═ RP: ═─◄█▓▒░**", `d!hug-Hug the participant.\n
d!kiss-to Kiss the participant.\n
d!slap-Give a slap to the participant.`)
.addField("**░▒▓█►─═ NSFW: ═─◄█▓▒░**", "NSFW commands:\n d!nsfw-hentai; d!nsfw-ramdom; d!nsfw-neko; d!nsfw-nekogif; d!nsfw-kuni; d!nsfw-holo; d!nsfw-pussy; d!nsfw-anal;")
.addField("**░▒▓█►─═ Interserver: ═─◄█▓▒░**", `*to connect the interserver, write to the bot owner - <@${member}>\n
Server-to-server chat rules - * * d!irules**\n
To write a message to the channel without sending it to the Interserver chat, start the message with"//".\n **Example** - *//I don't want this message to go to the interserver.*\n \n
** Emojis in nicknames and what they mean:**\n
⚙ - Developer of the bot;\n
⭐ - Friend of the developer;`)
        let reply = new MessageEmbed()
        .setColor("66FFFF")
        .setAuthor("Check your personal messages)")
        message.channel.send(reply)
        message.author.send(help)
        client.channels.cache.get("702059843875373076").send(`Выполнено: help пользователем ${message.author.tag}`)
        message.delete().catch()
    }
}