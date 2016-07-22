myApp.controller('UserController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  $scope.newSkill = {};
  $scope.user = {};

  function getUser() {
    $http.get('/user/')
  }


  function getUser() {
    $http.get('/user')
      .then(function(response) {
        if(response.data.username) {
            $scope.user = response;
            console.log('User Data: ', $scope.userName);
        } else {
            $location.path("/home");
        }
    });
  }

  $scope.logout = function() {
    $http.get('/user/logout')
      .then(function(response) {
        console.log('logged out');
        $location.path("/home");
    });
  }

  $scope.submitSkill = function(id) {
    var data = $scope.newSkill;
    $http.put('/user/' + id, data)
      .then(function (response) {
        console.log('skills posted', response);
      })
  }
}]);
