stuffExchApp.controller("ListController", 

	function($scope, $rootScope, $firebaseArray, $firebaseObject, FIREBASE_URL) {

    $scope.items=[];

    var ref = new Firebase(FIREBASE_URL);
    var postRef = ref.child('items');
    $scope.items = $firebaseArray(postRef);

    console.log(postRef.key());

    postRef.on('value', function(snapshot){
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read operation failed: " + errorObject.code);
    });

        $scope.addItem = function(adding_item) {

      var pushRef = new Firebase(FIREBASE_URL + '/items');

      pushRef.push({
        user: $rootScope.currentUser.$id,
        date: Firebase.ServerValue.TIMESTAMP,
        category: adding_item.category,
        description: adding_item.description,
        imageurl: adding_item.imageurl

       /* imageurl: imageUpped */
      });
    };

          console.log($scope.addItem);

 // postRef.set({
 //     'Bike': {category: 'Sporting Goods', 
 //     description: 'Spin bike in excellent condition, purchased in 2001.', 
 //     imageurl: 'images/bike.png' },

 //     'Chair': {category: 'Furniture', 
 //     description: 'Recently reupholstered armchair. Large and very comfortable.', 
 //     imageurl: 'images/chair.png' },

 //      'Lamp': {category: 'Furniture', 
 //      description: 'Table lamp. Shade slightly torm at top but otherwise serviceable.', 
 //      imageurl: 'images/lamp.png' }
      


 //      });

    // $scope.addItem = function( new_item ) {
    //   $scope.items.push( new_item );
    //   $scope.adding_item = {};
    // };

  });

// 	var ref = new Firebase(FIREBASE_URL);
// 	var itemsArray = $firebaseArray(ref);
  
//    itemsArray.$loaded().then(function(data) {
//    $scope.items = data;
// 	//console.log(data);
// })

//      $scope.addItem = function() {
//     itemsArray = $firebaseArray(ref);

//     var itemsData = {
//     first_name: $scope.adding_item.first_name,
//     last_name: $scope.adding_item.last_name,

//      date: Firebase.ServerValue.TIMESTAMP,
//      // imageurl: $scope.adding_item.imageurl,
//      description: $scope.adding_item.description
//    };
//      // console.log(portfolioData);

//      itemsArray.$add(itemsData). then(function() {
//        $scope.adding_item ="";
//        $scope.add_item_form.$setUntouched();


//      });
//      console.log(add_item_form);

//    };

//  });