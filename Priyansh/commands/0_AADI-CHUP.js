const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "chup",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "VIVEK BABU",
  description: "prem bot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["TU CHUP HO JA GUTKA KHA KAR BAAT MAT KIYA KAR" , "babu shadi kar do hamesha chup rahunga"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("Chup") == 0 || (event.body.indexOf("CHUP") == 0)) {
    var msg = {
      body: `🍁🌼🌹 ${name} 🌹🌼🍁\n\n 👉
      
      
     ${rand} \n\n                       
      `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }