module.exports = {
    name: "kick",
    aliases: ["k"],
    category: "moderation",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      client.channels.cache.get("702059843875373076").send(`Выполнено: kick пользователем ${message.author.tag}`)
      // Now we get the member from the user
      const member = message.guild.member(user);
      message.delete().catch()
      // If the member is in the guild
      if (member) {
        member
          .kick({
            reason: 'Hm',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`${user.tag} was kicked`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply(`${user.tag} was not kicked`);
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You haven't permissions to kick this member!");
    }
  }
}