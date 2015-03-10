angular.module('animeApp.controller',[]).
        
controller('animesController', function($scope, ergastAPIservice) {

    $scope.animeList = [];

    ergastAPIservice.getAnimes().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.animeList = response;
    });
    
    $scope.searchFilter = function (anime) {
		var keyword = new RegExp($scope.nameFilter, 'i');
                //filter the no match word
		return !$scope.nameFilter || keyword.test(anime.name);
	};
	
}).
        
controller('animeController', function($scope, $routeParams, ergastAPIservice) {
    
    $scope.animeDetails = null;
  
    ergastAPIservice.getAnimes().success(function (response) {
        //Dig into the responde to get the relevant data
      
        for(var i = 0; i<response.length; i++){
            $scope.animeDetail=response[i];
            if($scope.animeDetail.id === $routeParams.id){
                //when id is match stop looping
                $scope.animeDetail=response[i];
                break;
            }
        }
        $scope.code = $scope.animeDetail.trial;
    });
	
});