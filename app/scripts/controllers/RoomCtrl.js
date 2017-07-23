(function() {
  function RoomCtrl(Room, $uibModal) {
      this.all = Room.all;
      
      var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: "/templates/newChatRoom.html",
          controller: "ChatroomCtrl",
          ariaDescribedBy: "modal-button-area"
          
      });
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ["Room", "uibModal", RoomCtrl]);
})();