function Multiplier(valueFactor) {
  this.multiply = function (controllerFactor) {
    return valueFactor * controllerFactor;
  };
}

angular.module('service_service', [])
    .value('factor', 6)
    .service('multiplier', ['factor', Multiplier]);
