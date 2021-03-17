const Discord = require('discord.js')
module.exports = {
  name: "Convite",
  description: "Convidar o bot",
  aliases: ["CONVITE","Convite","convite"],
  cooldown: 3,
  async execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Convida o Bot!")
            .setDescription("Convida o Bot para o teu server para o utilizares como quiseres!")
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .addField("\u200B", `
**PT**- Se quer convidar o **${client.user.username}** para outro server, aqui está o [Link](https://discord.com/oauth2/authorize?client_id=774642355680444437&scope=bot&permissions=8)`);
        message.channel.send(embed);
        message.delete();
    }
};