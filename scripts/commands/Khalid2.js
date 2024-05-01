const fs = require('fs');

module.exports.config = {
  name: "Khalid2",
  version: "1.0.0",
  permission: 0,
  credits: "nayan",
  description: "mention",
  prefix: true,
  category: "user",
  usages: "tag",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100088679032995", "100088679032995") {
    var aid = ["100088679032995", "100088679032995"];
    for (const id of aid) {
      if (Object.keys(event.mentions) == id) {
        var msg = ["F##k You", "🖕🖕"];
        api.sendMessage({
          body: msg[Math.floor(Math.random() * msg.length)],
          attachment: fs.createReadStream(__dirname + `/Nayan/lv_0_20240425221229.mp3`),
        }, event.threadID, (error, messageInfo) => {
          if (!error) {
            api.setMessageReaction("🖕", messageInfo.messageID); // Add your desired reaction here
          }
        });
      }
    }
  }
};

module.exports.run = async function({}) {
};
