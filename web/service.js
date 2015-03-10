angular.module('animeApp.service', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getAnimes = function() { //get all data inside the json file and keep in ergastAPI
      return $http({ 
        url: 'data/animelist.json'
      });
    }
     return ergastAPI;
  });