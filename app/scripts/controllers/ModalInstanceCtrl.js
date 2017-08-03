(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.submit = function() {
            Room.add(this.newRoom);
            console.log("I added a room!");
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