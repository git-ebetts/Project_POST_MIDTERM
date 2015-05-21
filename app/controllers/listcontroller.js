function AddItemController( $scope, $location, $anchorScroll){

	$scope.message1 = "Uh-oh! 404!";
	$scope.message2 = "Click here to go back home";
	// $scope.items = [
	// {user_name: 'Jane Miller', group_name: 'Miller', category_name: 'Sporting Goods', category_value: '6', description: 'Spin bike in excellent condition, purchased in 2001.', imageurl: 'images/bike.png' },

	// {user_name: 'Rain Everett', group_name: 'Miller', category_name: 'Furniture', category_value: '2', description: 'Recently reupholstered armchair. Large and very comfortable.', imageurl: 'images/chair.png' },

	// {user_name: 'Ann Wolf', group_name: 'Miller', category_name: 'Furniture', category_value: '2', description: 'Table lamp. Shade slightly torm at top but otherwise serviceable.', imageurl: 'images/lamp.png' }
	// ];
	// $scope.addItem = function( new_item ){
	// 	$scope.items.push( new_item );
	// 	$scope.adding_item = {};
	// };
	$scope.gotoBottom = function (){

		$location.hash('bottom');

		$anchorScroll();
	}
};



