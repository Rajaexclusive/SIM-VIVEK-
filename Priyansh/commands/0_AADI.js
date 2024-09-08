 const fs = require("fs");
module.exports.config = {
	name: "aadi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("तेरा पति हू पागल") ||
     react.includes("aadi") || 
react.includes("owner")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆 ★\n\n✦🌸===『*★🌸===Vɩvɘĸ Vɩsʜwʌĸʌʀɱʌ✦\n\n★★᭄𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 :\n\n✦ https://www.instagram.com/aadi_singh__143?igsh=MXVneXZ6bzR4bHhvcg==  ✦ \n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 😁\n 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐀 𝐋𝐔𝐊 😁😋 https://www.facebook.com/profile.php?id=100039840451887&mibextid=ZbWKwL`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_3BB1DEA5-8DBC-4C85-8626-5FEB03A40174.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
