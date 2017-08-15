(function() {
  function UsernameCtrl($uibModalInstance, $cookies) { 
    this.establishUsername = function(){
        this.enteredData = this.enteredData.trim();
        if(this.enteredData){
            $cookies.put('blocChatCurrentUser', this.enteredData);
            $uibModalInstance.close();
            console.log(this.enteredData);
        }
        else{
            alert("Username field cannot be blank!")
        } 
      };
  };
      
 angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$uibModalInstance', '$cookies', UsernameCtrl]);
})();