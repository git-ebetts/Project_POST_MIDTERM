stuffExchApp.controller("LoginController", 
	function($scope, $firebaseAuth, FIREBASE_URL, $location, Authentication) {

		var ref = new Firebase(FIREBASE_URL);

		var auth = $firebaseAuth(ref);

	$scope.login = function() {
		Authentication.login($scope.user)
		.then(function(user) {
			$location.path("/items");
		}).catch(function(error) {
			$scope.message = error.message;
		});
	};

	$scope.register = function() {
		Authentication.register($scope.user)
		.then(function(user){
	$location.path("/items");
	Authentication.login($scope.user);
		}).catch(function(error) {
			$scope.message = error.message;
		});
	};

});