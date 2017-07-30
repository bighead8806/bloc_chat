(function(){
    function ModalCtrl($uibModal, Room){
     /**$uibModal's open function
     */
     this.open = function(){
      /** options properties
      */
      var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: "/templates/newChatRoom.html",
          controller: "ModalCtrl",
          controllerAs: '$modal',
          /**backdrop allows for people to close modal if they click outside window
          */
          backdrop: true, 
          ariaDescribedBy: "modal-button-area"
          
      });
         
      this.ok = function(){
          this.room = {name: ''
      }
          
      this.close(this.name);
          
      };
         
      this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
       };
     } 
    };
    
angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();