const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bye",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "AADI BABU",
  description: "AADI BOT",
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

  var tl = ["BYE BYE GN" , "BYE BYE BABY 😘" , "NIKAL PAHLI FURSAT MAI" , " CHAL DAFA HO YAHA SE" , " JA KALA MUH KAR" , "YAHA BYE BOL KE DUSRE KO LINE MAROGE" , "MUJHE AKELA CHHOD KE MAT JAO BABU" , "AKELE SOOGE KYA YA MAI AAU🙈" , "OK MERI JAAN SO JAO GN LOVE YOU 😘"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("bye") == 0 || (event.body.indexOf("BYE") == 0)) {
    var msg = {
      body: `💙 ─── ${name} ─── 💙\n\n 
      
    ${rand} \n\n                       
      `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }