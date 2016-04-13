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

	$scope.showAppleDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'apple.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showBemeDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'beme.tmpl.html',
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

	$scope.showDJIDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'dji.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showFacebookDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'facebook.tmpl.html',
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

	$scope.showGoogleDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'google.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showInfosysDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'infosys.tmpl.html',
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

	$scope.showManfrottoDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'manfrotto.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showMediumDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'medium.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showMicrosoftDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'microsoft.tmpl.html',
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

	$scope.showNikonDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'nikon.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showOlaDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'ola.tmpl.html',
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

	$scope.showPaytmDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'paytm.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showPeachDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'peach.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showProductDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'product.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showSamsungDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'samsung.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showSnapchatDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'snapchat.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showSnapdealDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'snapdeal.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showTataDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'tata.tmpl.html',
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

	$scope.showTwitterDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'twitter.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showUberDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'uber.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showYouTubeDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'youtube.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showZomatoDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'zomato.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	$scope.showFreechargeDialog = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: 'freecharge.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};
});
