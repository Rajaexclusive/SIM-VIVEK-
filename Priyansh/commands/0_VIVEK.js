const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "VIVEK",
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

  var tl = ["BYE BYE SWEET HEART 😘" , "BABU JA RAHE HO MUJHE CHHOD KE😔" , "BABY MAT JAO NA😢" , "MUJHE PATA HAI TUM YAHA BYE BOL KAR KAHI AUR MUH KALA KRANE JA RAHE HO😾" , "NIKAL PAHLI FURSAT MAI😏" , "DUBARA DIKHAI NA DENA 😾" , "BABU CHUMMA DE KAR JAO😘" , "SAB MUJHE CHHOD KE CHALE GAYE AB TUMNE BHI BYE BOL DIYA🥺"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("💙 ─── MOYE MOYE HO GAYA ISKA TO😅  ───💙", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("Bye") == 0 || (event.body.indexOf("BYE") == 0)) {
    var msg = {
      body: `💙 ─── ${name} ─── 💙\n\n 
      
    ${rand} \n\n                       
      `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }