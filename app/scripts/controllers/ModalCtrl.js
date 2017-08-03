(function(){
    function ModalCtrl($uibModal, Room){
        /**$uibModal's open function
        */
        this.open = function(){
            /** options properties
            */
            var modalInstance = $uibModal.open({
                templateUrl: "/templates/newChatRoom.html",
                controller: "ModalInstanceCtrl",
                controllerAs: '$modal',
                /**backdrop allows for people to close modal if they click outside window
                */
                backdrop: "true", 
                ariaDescribedBy: "modal-button-area"

            });
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();