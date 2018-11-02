angular.module('app', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, $http) {

    $scope.fortune = '';
    
    $scope.fortuneFunc = function() {
        $http.get('/getfortune')
        .then(function(response) {
           $scope.fortune = response.data;
        });       
    };
}