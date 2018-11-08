var T = require("./Twit.js");
var config = require("./config.js");
var my_user_name = require("../config").userName;
console.log('The bot is starting');
var timeout = 1000 * 60 * 1; // timeout to send the message 1 min

stream.on('direct_message', function (eventMsg) {
    var msg = eventMsg.direct_message.text;
    var screenName = eventMsg.direct_message.sender.screen_name;
    var msgID = eventMsg.direct_message.id_str;

    if (screenName === my_user_name) {
        return callbackHandler(msgID);
    }

    else if (msg.search('edmonton','calgary') !== -1 ) {
        return T.post('direct_messages/new', { 
            screen_name: screenName,
            text: 'Hey Alberta!'} , function () {
            callbackHandler(msgID);
        });
    }

    else if (msg.search('Whistler','Vancouver') !== -1 ) {
        return T.post('direct_messages/new', { 
            screen_name: screenName,
            text: ‘Love it! BC’} , function () {
            callbackHandler(msgID);
        });
    }

    else {
        return T.post('direct_messages/new', {
            screen_name: screenName,
            text: "sorry i cant tell where you are from"
        }, function() {
            callbackHandler(msgID);
        });
    });