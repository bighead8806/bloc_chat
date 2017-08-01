(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.submit = function() {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();