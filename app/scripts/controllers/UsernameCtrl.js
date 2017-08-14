(function() {
  function UsernameCtrl($uibModalInstance, $cookies) { 
    this.establishUsername = function(){
        $cookies.put('blocChatCurrentUser', this.username);
        $uibModalInstance.close();
      }
  };
      
 angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();