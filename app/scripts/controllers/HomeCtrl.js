(function() {
    function HomeCtrl() {
         this.rooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl'['Room', HomeCtrl]);
})();