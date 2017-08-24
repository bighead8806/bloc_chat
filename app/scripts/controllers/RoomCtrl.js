(function() {
  function RoomCtrl(Room, Message, $cookies) {
      this.all = Room.all; 
      
      this.currentUser = $cookies.get('blocChatCurrentUser');
        /**You establish the selected room with the following function. */
      this.setRoom = function(clickedRoom){
          this.selectedRoom = clickedRoom;
          this.messages = Message.getByRoomId(this.selectedRoom.$id);
          console.log(this.messages);
      }; 
      
      this.submitNewMessage = function(newMessage){
          console.log(this.selectedRoom.$id);
          Message.send(this.newMessage, this.selectedRoom.$id);
          this.newMessage = '';
      };
  }
  
  angular
    .module('blocChat')
    .controller('RoomCtrl', ["Room", "Message", "$cookies", RoomCtrl]);
})();