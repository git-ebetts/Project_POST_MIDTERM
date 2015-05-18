stuffExchApp.controller('StatusController', function($scope, 
	$location, Authentication, ShareData) {
	$scope.logout = function () {
		Authentication.logout();
		$location.path('/login');
	};
        $scope.myData1 = ShareData;
    });
