var stuffExchApp = angular.module("stuffExchApp", ["ngRoute", "firebase", "appControllers"])

.constant("FIREBASE_URL", "https://stuffapp.firebaseio.com/");

var appControllers = angular.module("appControllers", ["firebase"]);


stuffExchApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider
	.when("/",  { controller: "AddItemController", templateUrl: "app/partials/signin_signup.html"  })
	.when("/items",  { controller: "ListController", templateUrl: "app/partials/list_partial.html" })
	.when("/myitems",  { controller: "ListController", templateUrl: "app/partials/list_partial2.html" })
	.when("/login",  { controller: "LoginController", templateUrl: "app/partials/loginform.html" })
	.when("/register",  { controller: "LoginController", templateUrl: "app/partials/registerform.html" })
	.when("/signin_signup",  { controller: "AddItemController", templateUrl: "app/partials/signin_signup.html"  })
	.otherwise ({controller: "AddItemController", templateUrl: "app/partials/404_page.html"});

}]);
