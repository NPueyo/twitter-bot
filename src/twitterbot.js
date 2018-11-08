var T = require("./Twit.js");
var config = require("./config.js");
var my_user_name = require("../config").userName;
console.log('The bot is starting');
var timeout = 1000 * 60 * 1; // timeout to send the message 1 min

stream.on('direct_message', function (eventMsg) {
    var msg = eventMsg.direct_message.text;
    var screenName = eventMsg.direct_message.sender.screen_name;
    var msgID = eventMsg.direct_message.id_str;

    if (screenName === 'my_user_name') {
        return callbackHandler(msgID);
    }

else 
        return T.post('direct_messages/new', {
            screen_name: screenName,
            text: "I don't know "
        }, function() {
            callbackHandler(msgID);
        });
