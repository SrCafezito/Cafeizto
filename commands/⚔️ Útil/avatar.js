const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	let user =
		message.mentions.users.first() ||
		client.users.cache.get(args[0]) ||
		message.author;

	let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 1024 });

	let embed = new Discord.MessageEmbed()
		.setColor(`#FFD400`)
		.setTitle(`🖼 ${user.username}`)
		embed.setDescription(`Clique [aqui](${avatar}) para baixar a imagem!`)
		.setImage(avatar);
	await message.channel.send(embed);
};
