const { Console } = require("console");
const Discord = require("discord.js");

const Client = new Discord.Client;

Client.on("ready", () =>{
    console.log("Connecté en tant que : Zazyox.exe")
})
 
Client.on("message", message =>{
    message.reply("@819978145943257198");
});


Client.login("ODE2MzYzMDk0MjM0MTAzODU4.YD53YA.LuRmbT12DU1g7skyHgEeH40Nws0");