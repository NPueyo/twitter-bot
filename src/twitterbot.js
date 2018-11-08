var twit = require(’twit’);
var config = require(’./config.js’);
console.log('The bot is starting');

stream.on('direct_message', function (eventMsg) {
    var msg = eventMsg.direct_message.text;
    var screenName = eventMsg.direct_message.sender.screen_name;
    var msgID = eventMsg.direct_message.id_str;

    if (screenName === ‘MyBotExample) {
        return callbackHandler(msgID);
    }

    else if (msg.search('edmonton','calgary') !== -1 ) {
        return T.post('direct_messages/new', { 
            screen_name: screenName,
            text: 'Hey, what can I do for you? Alberta'} , function () {
            callbackHandler(msgID);
        });
    }

    else if (msg.search(‘Vancouver’,’Whistler') !== -1 ) {
        return T.post('direct_messages/new', { 
            screen_name: screenName,
            text: ‘Love it! BC’} , function () {
            callbackHandler(msgID);
        });
    }

    else {
        return T.post('direct_messages/new', {
            screen_name: screenName,
            text: "sorry i cant tell where you are from "
        }, function() {
            callbackHandler(msgID);
        });
    }
});