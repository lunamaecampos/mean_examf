app.controller('ShowController', ['$scope', '$routeParams', 'theFactory', function($scope, $routeParams, theFactory){
  function show(){
    theFactory.show($routeParams.id, function(data){
      $scope.question = data;
    })
  }
  show();
  $scope.addLike = function(id){
    theFactory.addLike(id, show);
  }
  $scope.addLike2 = function(id){
    theFactory.addLike2(id, show);
  }
  $scope.addLike3 = function(id){
    theFactory.addLike3(id, show);
  }
  $scope.addLike4 = function(id){
    theFactory.addLike4(id, show);
  }
  function getCurrentUser() {
    theFactory.getCurrentUser(function(data){
      $scope.currentuser = data;
    });
  }
  getCurrentUser();

}]);
