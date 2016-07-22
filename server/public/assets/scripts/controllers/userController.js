myApp.controller('UserController', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
  $scope.newSkill = {};
  $scope.userInfo = {};

  getUser();

  function getUser() {
    $http.get('/user')
      .then(function(response) {
        if(response.data.username) {
            $scope.userInfo = response.data;
            console.log('GET user', $scope.userInfo);
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
    console.log($scope.newSkill);
    var data = $scope.newSkill;
    $http.put('/user/' + id, data)
      .then(function (response) {
        console.log('PUT skill', response);
        getUser();
        $scope.newSkill.skill = '';
        $scope.newSkill.years = '';
      })
  }
}]);
