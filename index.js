const Discord = require('discord.js'); 
const bot = new Discord.Client() 
const fivereborn = require('fivereborn-query'); 
const config = require('./config.json'); 

bot.once('ready', () => { 
    console.log('Bot is online') 
})

function activity(){ 
    setTimeout(() => { 
        fivereborn.query(config.SERVER_IP,config.SERVER_PORT, (err, data) => { 
            if (err) { 
                return console.log(err);
            } else { 
                bot.user.setActivity(`SHARP: ${data.clients} / 130 | KØ: 0`, { type: "PLAYING" });
            }
        });
        activity();
    }, 1000);
}
activity();

bot.login(config.BOT_TOKEN)