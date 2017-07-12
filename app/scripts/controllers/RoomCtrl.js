(function() {
    function RoomCtrl() {
        this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', [RoomCtrl]);
})();