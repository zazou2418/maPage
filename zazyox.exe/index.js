const { Console } = require("console");
const Discord = require("discord.js");
const messages = require('./messages');
const config = require('./.config.js');

const Client = new Discord.Client;

Client.on("ready", () =>{
    console.log("Connecté en tant que : Zazyox.exe");
})
 
Client.on("message", message =>{
    if (message.content === 'Hey') message.reply('Bonsoir');
    if (message.content.includes('Briend')) message.reply('BRIEND ? Toujours sous un bureau :blond_haired_woman:');
    if (message.content.startsWith('Louis')) message.reply('Ah Zazyox ? Celui qui m\'a développé ? Attends, je te le mentionne. Hé MENTION_LOST , viens la !');
    if (message.content.includes('Lacote')) message.reply('LACOTE ? C\'est un BG au FC Lambersart :wink:');
    if (message.content === '0' ) message.reply('C\'est un chiffre :smile: !');
    if (message.content.includes('Zazyox.exe')) message.reply('On m\'a appelé ? ');
    if (message.content.includes('Ktorza')) message.reply('Vous avez prononcé KTORZA, le chétif ?');
    if (message.content === 'Liste Profs') message.reply('```BRIEND, KTORZA, LACOTE```');
    if (message.content === 'Liste profs') message.reply('```BRIEND, KTORZA, LACOTE```');
    if (message.content === 'liste profs') message.reply('```BRIEND, KTORZA, LACOTE```');
    if (message.content === 'liste Profs') message.reply('```BRIEND, KTORZA, LACOTE```');
});


// https://www.smashingmagazine.com/2021/02/building-discord-bot-discordjs/
Client.login(config.token);