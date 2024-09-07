//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
        name: "Radhe",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "PREM BABU", 
        description: "THIS BOT IS PREM SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("Chup") ||
     react.includes("CHUP") || react.includes("chup") || react.includes("CHUP KAR") ||
react.includes("chup kar") ||
react.includes("Chup kar")) {
                var msg = {
                                body: `𝐍𝐀𝐇𝐈 𝐑𝐀𝐇𝐔𝐍𝐆𝐀 . 😆 AGAR MUJHE CHUP KARANA CHAHTE HO TO PAHLE MERE BOSS 𓆩💜𓆪Vɩvɘĸ Vɩsʜwʌĸʌʀɱʌ𓆩💜𓆪 I LOVE YOU BOLNA PADEGA. NHI TO MAI BULUNGA . 𝐌𝐄𝐑𝐀 𝐙𝐔𝐁𝐀𝐍 . 𝐌𝐀𝐈 𝐁𝐎𝐋𝐔𝐍𝐆𝐀 😆😁`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😆", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }