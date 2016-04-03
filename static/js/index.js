angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {

  $scope.showAmazonDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'amazon.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showGoogleDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'google.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showBoostedDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'boosted.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showDjiDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dji.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showFlipkartDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'flipkart.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showJugnooDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'jugnoo.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showLystDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'lyst.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showNikeDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'nike.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showOyoDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'oyo.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showProhuntDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'prohunt.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  $scope.showTeslaDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'tesla.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };

  $scope.cancel = function() {
    $mdDialog.cancel();
  };

  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
