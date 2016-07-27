describe ('MainCtrl', function() {
  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with three phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('MainCtrl', {$scope: scope});

    expect(scope.phones.length).toBe(3);
  }));

});
