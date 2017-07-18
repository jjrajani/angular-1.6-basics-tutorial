angular.module('factory_service', [])
    .value('factor', 6)
    .factory('square', ['factor', function(factor) {
        return factor * factor;
    }]);
