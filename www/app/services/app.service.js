(function(){
  'use strict';
    angular.module('starter').service('songService',songService);

    songService.$inject=['$http', 'API'];

  function songService($http, API){
    var service={
      getSongs: getSongs
    };

    function getSongs(){
      return $http.get(API.url+'/recommendations')
      .then(function(response){
        return response.data;
      })
      .catch(function(error){
        console.log('Error binding whit HTTP service: ' + error );
      });
    }

    return service;
  }
})();
