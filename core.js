const Discord = require("discord.js");
const fs = require("fs");


var methods = {
    sendDM: function(channel, member, msg, failMsg){
        member.send(msg).catch(O_o=>{
            console.log(`Failed to send direct message to ${member}`);
            if(failMsg === "") return;
            channel.send(`${member}, ${failMsg}`);
        })
    },

    randNum: function(min, max){
        var min_value = parseInt(min);
        var max_value = parseInt(max);
        return Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    },

    sendEmbed: function(channel, title, color, ...args){
        if(!channel){
            comsole.log("Channel not found");
            return;
        }

        let embed = new Discord.RichEmbed().setTitle(title).setColor(color);
        for(i = 0; i < args.length; i+=2){
            embed.addField(args[i], args[i + 1]);
        }

        channel.send(embed);
        return embed;
    }
};

module.exports = methods;