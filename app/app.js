var mystuffApp = angular.module("stuffExchApp", ["ngRoute"]);

mystuffApp.config(function ($routeProvider) {
	$routeProvider
	.when("/items",  { controller: "AddItemController", templateUrl: "app/partials/list_partial.html" })
	.when("/",  { controller: "AddItemController", templateUrl: "app/partials/list_partial.html"  })
	.otherwise ({controller: "AddItemController", templateUrl: "app/partials/404_page.html"});
});

