(function () {
    'use strict';

    angular
        .module('plunker')
        .controller('CalculatorCtrl', CalculatorController);

    CalculatorController.$inject = [];
    function CalculatorController() {
        var calcVm = this;

        calcVm.add = function (num1, num2) {
          calcVm.result = num1 + num2;
        };

    }

})();