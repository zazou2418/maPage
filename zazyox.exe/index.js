const { Console } = require("console");
const Discord = require("discord.js");
const messages = require('./messages');
const config = require('./.config.js');

const Client = new Discord.Client;

Client.on("ready", () =>{
    console.log("Connecté en tant que : Zazyox.exe");
})
 
Client.on("message", message =>{
    if (message.content === 'Hello') message.reply('Hello');
    if (message.content.includes('Comment')) message.reply('t\'es curieux :truck: !');
    if (message.content.startsWith('Louis')) message.reply('Le beau Gosse :smile: !');
    if (message.content === '0' ) message.reply('C\'est un chiffre :smile: !');
});

// https://www.smashingmagazine.com/2021/02/building-discord-bot-discordjs/
Client.login(config.token);