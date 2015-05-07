stuffExchApp.controller("ListController", 

	function($scope, $firebaseArray) {

	var ref = new Firebase("https://stuffapp.firebaseio.com/");
	var itemsArray = $firebaseArray(ref);
  
   itemsArray.$loaded().then(function(data) {
   $scope.items = data;
	//console.log(data);
})

     $scope.addItem = function() {
    itemsArray = $firebaseArray(ref);

    var itemsData = {
    first_name: $scope.adding_item.first_name,
    last_name: $scope.adding_item.last_name,

     date: Firebase.ServerValue.TIMESTAMP,
     // imageurl: $scope.adding_item.imageurl,
     description: $scope.adding_item.description
   };
     // console.log(portfolioData);

     itemsArray.$add(itemsData). then(function() {
       $scope.adding_item ="";
       $scope.add_item_form.$setUntouched();


     });
     console.log(add_item_form);

   };

 });