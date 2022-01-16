require("dotenv").config()

const { Client } = require("discord.js")

const bot = new Client({intents:[]})

const status = ['_TheMarCraft_', 'dem Code', 'Videos von _TheMarCraft_'];
const type = ['LISTENING', 'LISTENING', 'WATCHING'];

let i = 1;

bot.once ("ready", () => {
    console.log(`Fertig! Eingeloggt als ${bot.user.tag}`)
    //bot.user.setActivity({name: "_TheMarCraft_",type: "LISTENING"})

    setInterval(() =>{
        if(status[i]) {
            bot.user.setActivity(status[i], {type: type[i]})
            i++;
        }else{
            i = 0;
            bot.user.setActivity(status[i], {type: type[i]})
        }
    }, 3*1000)
})
bot.login(process.env.TOKEN)