(function(){
  'use strict';
  angular.module('starter')

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  $stateProvider
    .state('main', {
    url: '/main',
    templateUrl: 'app/music/app.html',
    controller: 'appController',
    controllerAs: 'vm'
  });

  // Each tab has its own nav history stack:



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
  $ionicConfigProvider.tabs.position('bottom');
});
})();
