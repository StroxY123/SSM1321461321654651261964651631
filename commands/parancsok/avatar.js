const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name:"avatar",
            aliases: ["profilepicture"],
            group: 'misc',
            memberName: 'avatar',
            description: 'Elküldöm az avatar od _D',
            args: [
                {
                    type:"user",
                    prompt:"Meg szeretnéd kapni a képed?",
                    key:"user",
                    default: msg => msg.author
                }
            ]
        })
    }
    run(msg, { user }) {
        let Avatar = new RichEmbed()
        .setTitle(`${user.tag} itt is van!`)
        .setURL(user.displayAvatarURL)
        .setImage(user.displayAvatarURL)
        .setColor("RANDOM")
        msg.embed(Avatar)
    }
}