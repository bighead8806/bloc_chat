(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    /**The following function takes the selected room and reveals messages for this room. orderByChild method reveals the messages logged in the firebase database of selected room. It's chained together with the child() method that is here represented by the variable ref. 
    */
    Message.getByRoomId = function(roomId) {
        //var messages = $firebaseArray(ref);
        var messages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        console.log(roomId);
        return messages;
    
    };
      
    Message.send = function(newMessage){
        Message = {
					username: $cookies.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: getTime(),
					roomId: selectedRoom
				}
    };
    /**Return the array that now contains the messages of the selcted room.
    */
    return Message;
      
    }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();