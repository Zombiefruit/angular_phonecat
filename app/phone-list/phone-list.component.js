(function() {
  angular.module('phoneList')
  .component('phoneComponent', {
    url: 'phone-list.template.html',
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneController
  });

  function PhoneController() {
    var self = this;
    self.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  }
})();
