(function () {

    describe('Calculator Controller: ', function () {

        var calcVm;

        beforeEach(module('plunker'));

        beforeEach(inject(function ($controller) {
            calcVm = $controller('CalculatorCtrl');
        }));

        it('should be defined', function(){
            expect(calcVm).toBeDefined();
        });

        it('should add two numbers', function(){
            var num1 = 10, num2 = 20;
            calcVm.add(num1, num2);

            expect(calcVm.result).toEqual(30);
        });
    });
})();