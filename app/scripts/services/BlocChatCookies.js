(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
         $uibModal.open({
            templateUrl: "/templates/username.html",
            controller: "UsernameCtrl as username",
            backdrop: "false" 
         })
    }
     else{
         alert("Invalid username!");
     }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();