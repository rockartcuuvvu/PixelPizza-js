const{createEmbed, sendEmbed}=require("../functions");
const{blue,red}=require('../colors.json');
const rules=require('../rules.json');

module.exports = {
    name: "rules",
    description: "show the rules of pixel pizza",
    args: false,
    cooldown: 30,
    userType: "all",
    neededPerms: [],
    pponly: false,
    execute(message,args,client){
        let embedMsg=createEmbed(blue,`**${this.name}**`);
        const embedMsgDM=createEmbed(blue,`**${this.name}**`,null,null,`\`\`\`\n${rules.join("\n")}\`\`\``);
        return message.author.send(embedMsgDM).then(()=>{
            if(message.channel.type==="dm")return;
            embedMsg.setDescription("I've sent you a DM with all rules");
        }).catch(error=>{
            console.error(`Could not send rules DM to ${message.author.tag}.\n${error}`);
            embedMsg.setColor(red).setDescription('I can\'t DM you. Do you have DMs disabled?');
        }).then(()=>{
            sendEmbed(embedMsg,message);
        });
    }
}