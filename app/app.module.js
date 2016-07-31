(function() {
  angular.module('phonecatApp', ['phoneList', 'ngMaterial', 'ngAnimate'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('amber');
  });
})();
