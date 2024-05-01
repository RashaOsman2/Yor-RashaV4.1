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
  if (event.senderID !== "100088679032995","100088679032995") {
    var aid = ["100088679032995","100088679032995"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
	    var msg = {
				body: "এই নেও বাবু ফিডার খাও, আমাকে তো আর খাইতে পারবা না🤭🤭",
				attachment: fs.createReadStream(__dirname + `/Nayan/Fidar.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
