const T = require("./Twit.js");

const my_user_name = require("../config").userName;
//const timeout = 1000 * 60 * 5; // timeout to send the message 5 min

var stream = T.stream('user');

stream.on('direct_message', function (eventMsg) {
  var msg = eventMsg.direct_message.text;
  var screenName = eventMsg.direct_message.sender.screen_name;
  var msgID = eventMsg.direct_message.id_str;


  if (msg.search('#test') !== -1) {
    return T.post('statuses/update', { status: msg}, function () {
      console.log('I tweeted the message');
    });
  }

  else if (screen_name != my_user_name){
    return T.post('direct_messages/new', {
      screen_name: screenName,
      text: 'YAAAAS!'
    }, function () {
      console.log('Successfully replied YAAAAS');
    });
});

//module.exports = AutoDM;
