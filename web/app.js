angular.module('animeApp', [
  'animeApp.controller',
  'animeApp.service',
  'ngRoute'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when('/animelists', {templateUrl: 'listanime.html', controller: 'animesController'}).
        when('/animelists/:id', {templateUrl: 'animedetail.html', controller: 'animeController'}).
	otherwise({redirectTo: '/animelists'});
}])

.directive('myYoutube', function($sce) { //set the URL is trusted
  return {
    restrict: 'EA',
    scope: { code:'=' },
    replace: true,
    template: '<div><iframe width="420" height="315" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        console.log('here');
        scope.$watch('code', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});