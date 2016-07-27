(function() {
  angular.module('phonecatApp', ['phoneList', 'ngMaterial', 'ngAnimate'])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });
})();
