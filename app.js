
angular
  .module('movieApp', [])
  .controller('MovieCtrl', MovieCtrl);

  function MovieCtrl () {

    var vm = this;


    vm.moviesToWatch = [
      {
        id: 25,
        title: 'The secret life of pets',
        genre: 'Comedy'
      },
      {
        id: 10,
        title: 'Moana',
        genre: 'Adventure'
      },
      {
        id: 39,
        title: 'Titanic',
        genre: 'Drama'
      },
      {
        id: 94,
        title: 'Matilda',
        genre: 'Comedy'
      },
      {
        id: 143,
        title: 'Sign',
        genre: 'Thriller'
      }
    ];

    vm.movie = {};
       vm.addMovie = function () {
         var newMovie = vm.movie;
         vm.movie = {};
         vm.moviesToWatch.push(newMovie);
       };
       
    console.log(vm);
  };
