(function() {
  function RoomCtrl(Room, Message, $cookies) {
      this.all = Room.all; 
      
      //this.currentUser = $cookies.get('blocChatCurrentUser');
        /**You establish the selected room with the following function. */
      this.setRoom = function(clickedRoom){
          this.selectedRoom = clickedRoom;
          this.messages = Message.getByRoomId(this.selectedRoom.$id);
          console.log(this.messages);
      }; 
      
      this.submitNewMessage = function(newMessage){
          Message.send({
              content: this.newMessage, 
              roomId: this.selectedRoom.$id,
              sentAt: this.sentAt,
              username: $cookies.get('blocChatCurrentUser')
          });
          this.newMessage = '';
      };
  }
  
  angular
    .module('blocChat')
    .controller('RoomCtrl', ["Room", "Message", "$cookies", RoomCtrl]);
})();