const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to Celvox\'s Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setThumbnail('https://raw.githubusercontent.com/Vivi/CelvoxBot/develop/data/images/Celvox.png')
      .setDescription('Click [here](https://discord.com/invite/y4D3rd2) to join the Celvox Support Server!')
      .addField('Other Links', 
        '**[Invite Me](https://discord.com/oauth2/authorize?client_id=533346993578311690&scope=bot&permissions=403008599) | ' +
        '[Discord Bot List](https://top.gg/bot/533346993578311690)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
