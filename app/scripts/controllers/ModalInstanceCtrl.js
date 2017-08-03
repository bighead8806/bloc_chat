(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.submit = function() {
            Room.add($modal.text);
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