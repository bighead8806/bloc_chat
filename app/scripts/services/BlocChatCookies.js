(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
         $uibModal.open({
            templateUrl: "/templates/username.html",
            controller: "UsernameCtrl as username",
            backdrop: "static" 
         });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();