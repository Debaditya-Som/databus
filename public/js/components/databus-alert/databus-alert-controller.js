
// hinzufügen eines Controllers zum Modul
function DatabusAlertController($scope, $timeout) {

  var ctrl = this;

  $scope.$on('onDatabusAlert', function(e, data) {
    ctrl.isSuccess = data.isSuccess;
    ctrl.message = data.message;
    ctrl.isVisible = false;

    if(ctrl.hidePromise != null) {
      $timeout.cancel(ctrl.hidePromise);
    }

    $timeout(function() {
      ctrl.isVisible = true;
    }, 0);

    ctrl.hidePromise = $timeout(function() {
      ctrl.isVisible = false;
    }, data.ms);
  });

  ctrl.$onInit = function() {

  }

  ctrl.isSuccess = function() {
    return ctrl.isSuccess;
  }

  ctrl.$doCheck = function() {
    
  }
}

module.exports = DatabusAlertController;
