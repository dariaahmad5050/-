const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'Reklam') { 
 if (message.content === 'reklam') {
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**.لە تایبەت بۆم بنێرە**'); 
message.reply('**.لە تایبەت بۆم بنێرە**');

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/GzuUdWmd`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("1188514357936664576").send(
`> جۆین بکەن $𝓀𝓊𝓇𝒹𝒾𝓈𝒽$𝑀𝒾𝓁𝓁𝒾𝑜𝓃𝒶𝒾𝓇𝑒 لە لایەن By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕیکلامەکە بنێرە بۆمن دایدەنێم☑️`) 
});




client.login("");//تۆکین لێرە دانێ
