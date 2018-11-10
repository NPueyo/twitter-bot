const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 1; // timeout to send the message 1 min

const AutoDM = () => {
  const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message ðŸš€ðŸš€ðŸš€");
  stream.on("direct_message", SendMessage);
};

const SendMessage = user => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" ðŸŽ‰ðŸŽ‰ðŸŽ‰ðŸŽ‰ New Follower  ðŸŽ‰ðŸŽ‰ðŸŽ‰ðŸŽ‰ðŸŽ‰ ");
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  ðŸ’ªðŸ’ª`);
        });
    }, timeout);
  }
};
const GenerateMessage = name => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  return `Hi ${name} Thanks for .... \n Happy ${dayName} ðŸ˜ŠðŸ˜Š `; // your message
  // My message   return `Hi ${name} Thanks for being a part of my social media network. I'am the @PicsrushE founder,A new Online Image Editor completely with web technologies,I'm also a reactjs developer and medium blogger.\n Happy to discuss anytime ðŸ˜Š  \n Happy ${dayName} ðŸ˜ŠðŸ˜Š `;
};

module.exports = AutoDM;
const T = require("./Twit.js");
// const my_user_name = require("../config").userName;

// Reply to Twitter messages
 function replyToDirectMessage(){

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
  if(screenName != eventMsg.direct_message.recipient_screen_name){

    //post reply
    T.post("direct_messages/new",replyTo, function(err,data,response){
            console.info(data);
        });
    }
});
}
