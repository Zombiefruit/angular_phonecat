(function() {
  angular.module('phoneList')
  .component('phoneComponent', {
    url: 'phone-list.template.html',
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', PhoneController]
  });

  function PhoneController($http) {
    var self = this;
    self.options = [
      {
        type: 'name'
      },
      {
        type: 'age'
      }
    ];
    self.orderProp = 'name';

    $http.get('phones/phones.json').then(function(response) {
      self.phones = response.data;
    });
  }
})();
