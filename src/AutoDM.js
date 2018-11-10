const T = require("./Twit.js");
const my_user_name = require("../config").userName;
//const timeout = 1000 * 60 * 5; // timeout to send the message 5 min


function AutoDM(){

  //get the user stream
  var stream = T.stream('user');

stream.on('direct_message', function (eventMsg) {
  var msg = eventMsg.direct_message.text;
  var screenName = eventMsg.direct_message.sender.screen_name;
  var userId = eventMsg.direct_message.sender.id;

  // reply object
  var replyTo = { user_id: userId,
    text: "Thanks for your message YAAAAAAS!", 
    screen_name: screenName };

  console.log(screenName + " says: " + msg );

  // avoid replying to yourself when the recipient is you
  if(screenName != my_user_name){

    //post reply
    T.post("direct_messages/new",replyTo, function(err,data,response){
            console.info(data);
        });
    }
});
}

module.exports = AutoDM;
