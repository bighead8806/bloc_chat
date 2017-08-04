(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        
        this.submit = function() {
            Room.add(this.newRoom);
            console.log("I added a room!");
            console.log(this.newRoom);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();