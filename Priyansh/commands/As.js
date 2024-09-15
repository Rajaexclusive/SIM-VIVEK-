const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "As",
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

  var tl = ["https://drive.google.com/file/d/1-12kad8pTF6Twt3k8Vhs490WwF0nvrZN/view?usp=drivesdk"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("AAS") == 0 || (event.body.indexOf("AKS") == 0)) {
    var msg = {
      body: `💙 ─── ${name} ─── 💙\n\n 👉
      
      
     ${rand} \n\n                       
      `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }