

stuffExchApp.controller("ListController", function($scope, $rootScope, $firebaseArray, $firebaseObject, FIREBASE_URL, ShareData){

  var ref = new Firebase(FIREBASE_URL + '/items');
  // var postRef = ref.child('items');

  var itemsArray = $firebaseArray(ref);
  $scope.items = itemsArray;

  //     var ref = new Firebase(FIREBASE_URL);
//     var postRef = ref.child('items');
//     $scope.items = $firebaseArray(postRef);

 itemsArray.$loaded().then(function(data) {
   $scope.items = data;
           $scope.myData2 = ShareData;
                    $scope.items = [];
  console.log(data);
})
  

  $scope.addItem = function() {
    itemsArray = $firebaseArray(ref);

    var itemData = {
        user: $rootScope.currentUser.$id,
        date: Firebase.ServerValue.TIMESTAMP,
        category: $scope.adding_item.category,
        description: $scope.adding_item.description,
        imageurl: $scope.adding_item.imageurl
   };
      // console.log(itemData);

     // itemsArray.$add(itemData). then(function() {
       var newItemRef = itemsArray.push(itemData);
       // var itemID = newItemRef.key();
         console.log(itemsArray.$id);
       //     . then(function() {
       // $scope.adding_item="";
       // $scope.add_item_form.$setPristine();
     });
     });

     console.log(add_item_form);

var authUser = $rootScope.currentUser;
console.log(authUser);

//GET ARRAY DATA FROM USER TREE
  var ref = new Firebase(FIREBASE_URL + '/users' + '/authUser');
  var userArray = $firebaseArray(ref);
  $scope.user = userArray;

var userData = {
    email: $scope.adding_item.email,
    firstname: $scope.adding_item.firstname,
    group_name: $scope.adding_item.lastname,
    lastname: $scope.adding_item.lastname;
};

//FIGURE OUT HOW TO ADD THIS DATA TO SPECIFIC ELEMENT IN ITEM TREE
//NEED TO FIGURE OUT ITEM ID NUMBER, SO NEED TO CAPTURE RETURN ID
  var ref = new Firebase(FIREBASE_URL + '/items');
  // var postRef = ref.child('items');

  var itemsArray = $firebaseArray(ref);
  $scope.items = itemsArray;






     userArray.$add(userData). then(function() {
       $scope.adding_item="";
       $scope.add_item_form.$setPristine();



        console.log($scope.myData1);
         console.log($scope.items)

    };
      })

   




// stuffExchApp.controller("ListController", 

//  function($scope, $rootScope, $firebaseArray, $firebaseObject, FIREBASE_URL, filterService) {

//     $scope.items=[];
//     $scope.filterService = filterService;
//     console.log(filterService);
//    // console.log($scope.searchText);
//    //    console.log($scope.items);

//     var ref = new Firebase(FIREBASE_URL);
//     var postRef = ref.child('items');
//     $scope.items = $firebaseArray(postRef);

//     console.log($scope.items);
//    console.log(postRef.key());

//     postRef.on('value', function(snapshot){
//       console.log(snapshot.val());
//     }, function (errorObject) {
//       console.log("The read operation failed: " + errorObject.code);
//     });

//         $scope.addItem = function(adding_item) {

//       var pushRef = new Firebase(FIREBASE_URL + '/items');

//       pushRef.push({
//         user: $rootScope.currentUser.$id,
//         date: Firebase.ServerValue.TIMESTAMP,
//         category: adding_item.category,
//         description: adding_item.description,
//         imageurl: adding_item.imageurl

//        /* imageurl: imageUpped */
//       });
//           $scope.adding_item="";
//     $scope.add_item_form.$setUntouched;
//          };

//          //GO TO OTHER DATA TREE AND GRAB ARRAY

// var authUser = $rootScope.currentUser;
// console.log(authUser);

// //grab groupname and add to previous push thing
//           var ref = new Firebase(FIREBASE_URL);
//     var postRef = ref.child('users'+'/authUser');
//     // $scope.items = $firebaseArray(postRef);
//     console.log($scope.items);

//     // console.log(postRef.key());

//     postRef.on('value', function(snapshot){
//       console.log(snapshot.val());

//        });

//           });


        // $scope.add_item_form.$setPristine();
 //    var ref = new Firebase(FIREBASE_URL);
 //    var postRef = ref.child('items');
 //    $scope.items = $firebaseArray(postRef);

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

 //    $scope.addItem = function( new_item ) {
 //      $scope.items.push( new_item );
 //      $scope.adding_item = {};
 //    };

  // });

//  var ref = new Firebase(FIREBASE_URL);
//  var itemsArray = $firebaseArray(ref);
  
//    itemsArray.$loaded().then(function(data) {
//    $scope.items = data;
//  //console.log(data);
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