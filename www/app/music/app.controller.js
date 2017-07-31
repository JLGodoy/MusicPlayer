(function(){
  'use strict';
    angular.module('starter')
    .controller('appController', appController);

    appController.$inject=['$scope','$ionicPlatform', '$rootScope', 'songService'];

    function appController ($scope, $ionicPlatform, $rootScope, songService){
      var vm= this;
      var audio= new Audio();
      vm.songs= [];
      vm.discardSong=discardSong;
      vm.addFavorite=addFavorite;
      vm.addSongs=addSongs;
      vm.playSong=playSong;
      vm.spliceFirstSong=spliceFirstSong;
      vm.getSongs=getSongs;

      $ionicPlatform.ready(onReady);

      function onReady(){
        vm.addSongs();
      }

      function playSong(){
        audio.src= vm.songs[0].preview_url;
        audio.play();
        console.log("Now playing "+ vm.songs[0].title+ " by "+ vm.songs[0].artist);
      }

      function getSongs(){
        return songService.getSongs();
      }

      function addSongs(){
        vm.getSongs().then(function (response){
          vm.songs= vm.songs.concat(response);
          vm.playSong();
        });

      }
      function spliceFirstSong(){
          vm.songs.splice(0,1);
      }
      function addFavorite(){
        $rootScope.favorites.push(vm.songs[0]);
        vm.spliceFirstSong();
        vm.playSong();

      }

      function discardSong(){
        vm.spliceFirstSong();
        vm.playSong();
        if (vm.songs.length < 3) {
          vm.addSongs();
        }
      }
}

})();
