
describe ('Basic calc testing', function(){
    it('should multiply two numbers correctly', function(){
        expect(4 * 5).toEqual(20);
        console.log(" should multiply two numbers correctly: spec1 success");
    });
});

describe('controller scope testing', function() {

    beforeEach(module('App'));

    var myController;
    var scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        myController = $controller('AppController', {
            $scope: scope
        });
    }));
    it('inputvalues should be defined', inject(function ($rootScope, $controller) {
        expect(scope.input).toBeDefined();
        console.log("inputvalues should be defined: spec2 success");
      }));

});