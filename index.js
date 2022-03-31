const Discord = require("discord.js");
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"] }
);

client.login(process.env.token)

client.on("ready", () => {
console.log("bot online")
})

client.on("guildMemberAdd", (message) => {
console.log ("nuovo utente")
})

client.on('guildMemberAdd', async (member) => {
    const Embed1 = new Discord.MessageEmbed()
       .setColor('#731bdd')
       .setTitle('Benvenuto in COLOSSIAL RP | DARK CHAT')
       .setDescription("Benvenuto in COLOSSIAL RP | DARK CHAT, che la guerra sia con voi.")
       .setThumbnail('https://cdn.discordapp.com/attachments/950756533476667422/958977561432571964/Colossial_dark_chat.png');
    await member.send({ embeds: [Embed1] });

})