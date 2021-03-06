const Discord = require('discord.js')

module.exports = {
  name: "Suggest",
  description: "Dar uma sugestão",
  aliases: ["SUGGEST","Suggest","suggest"],
  cooldown: 5,
  async execute(client, message, args) {
        const { guild } = message;
        let MSG = args.join(" ")
        if (!MSG) return message.channel.send(`Não especificaste uma mensagem para mandar!`).then(msg => {
            msg.delete({timeout: 7500})
        })
        const _ = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addField("Conteúdo:", `${MSG}`)
            .addField("Quem fez a sugestão", ` ${message.author}`)
            .setTimestamp()
            .setColor("#AF96FF")
            .setTimestamp()
        message.channel.send(_).then(msg => {
            msg.react("<a:yes:801225089475411968>")
            msg.react("<:xis:805803542148939816>")
        }) 
        message.delete();
    }
};