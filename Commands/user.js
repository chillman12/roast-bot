/*
*
*   Things to add to r!meme:
* ----------------------------
*
*/

const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (message) => {
    if(message.content.toLowerCase() == "rb!user") {
        
        let test =  "default";
        
        if(message.author.status == "online") {
            test = "online";
        }
        
        let user_embed = new Discord.RichEmbed()
        .setColor("#EB671D")
        .setTitle(`${message.author.username}'s Stats:`)
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Account created at: ", message.author.createdAt.toString())
        .addField("Current Presense ", test);
        //return message.channel.send(message.author.createdAt.toString());
        return message.channel.send(user_embed);
    }

    
}
