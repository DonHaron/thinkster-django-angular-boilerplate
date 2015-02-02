(function(){
    'use strict';

    angular
        .module('thinkster.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    function LoginController($location, $scope, Authentication){
        var vm = this;

        vm.login = login;

        activate();

        function activate(){
            if(Authentication.isAuthenticated()){
                $location.url('/');
            }
        }

        function login(email, password){
            Authentication.login(email, password);
        }
    }
})();