stuffExchApp.controller("ListController", 

  function($scope, $rootScope, $firebaseArray, $firebaseObject, FIREBASE_URL, ShareData) {

    $scope.items=[];

    var ref = new Firebase(FIREBASE_URL);
    var itempostRef = ref.child('items');
    $scope.items = $firebaseArray(itempostRef);

    console.log(itempostRef.key());

    itempostRef.on('value', function(snapshot){
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read operation failed: " + errorObject.code);
    });


// API Key: AyC5R9yFSN2CXrba3Kki1z
//{"url":"https://www.filepicker.io/api/file/bo79ExERKmz6gv8kOPNU",
//"filename":"Pierre_LeGrand.jpg",
//"mimetype":"image/jpeg",
//"size":168177,
//"isWriteable":true}

var imageUpped;

$scope.addImage = function( new_image ){

filepicker.setKey("AyC5R9yFSN2CXrba3Kki1z");

filepicker.pick(
  {
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:['COMPUTER'],
  },
  function(Blob){
    imageUpped = Blob.url;
    console.log(imageUpped);
  },
  function(FPError){
    console.log(FPError.toString());
  }
);
}







    $scope.items.$loaded().then(function(data) {
     $scope.items = data;
     $scope.myData2 = ShareData;
           // $scope.items = [];


           $scope.addItem = function(adding_item) {

            var newPostRef = new Firebase(FIREBASE_URL + '/items');
            $scope.items = []; 

 //ADDING USER DETAILS TO ITEM
 var authUser = $rootScope.currentUser;
 authUser.$loaded().then(function() {
  console.log(authUser);
  console.log(authUser.email);
  $scope.email = authUser.email;
  console.log(authUser.firstname);
  $scope.firstname = authUser.firstname;
  console.log(authUser.group_name);
  $scope.group_name = authUser.group_name;
  console.log(authUser.lastname);
  $scope.lastname = authUser.lastname;

  //ADDING NEW ITEMS TO DBASE

  var newitemPostRef = itempostRef.push({
    user: $rootScope.currentUser.$id,
    email: authUser.email,
    group_name: authUser.group_name,
    firstname: authUser.firstname,
    lastname: authUser.lastname,
    date: Firebase.ServerValue.TIMESTAMP,
    category: adding_item.category,
    description: adding_item.description,
    imageurl: imageUpped
    
  });
  console.log(newitemPostRef)
  });

    // newitemPostRef$loaded().then(function(){
      newitemPostRef.on('value', function() {
         // $scope.newitemPostRef = "";
    $scope.adding_item = "";
    $scope.add_item_form.$setPristine();
        adding_item = ""  });
    console.log(adding_item);
    // $scope.newitemPostRef = "";
    // $scope.adding_item = "";
    // $scope.add_item_form.$setPristine();
    // // adding_item = 0;
    // console.log(adding_item);
};
}
);
});

    // newitemPostRef.on('value', function(){
    //      $scope.newitemPostRef = "";
    // $scope.adding_item = "";
    // $scope.add_item_form.$setPristine();
    //     adding_item = "";  }
    // console.log(adding_item);
  



 // var authUser = $rootScope.currentUser.$id;



// if (item.group_name === authUser.group_name)
//   "filter:searchFor:authUser.group_name"
// else 
//    "filter:searchFor:user"





  //   $scope.items = []; 
 //  $scope.authUser ="";
 //       $scope.adding_item = "";
 //       $scope.add_item_form = "";

 //       $scope.add_item_form.$setPristine();
 // console.log($scope.adding_item);




     // $scope.reset = function() {
     //  $scope.adding_item = "";
     //  $scope.add_item_form.$setPristine();
     //  console.log($scope.adding_item);












//             var postID = newitemPostRef.key();
//             console.log(postID);

// itempostRef.on('value', function() {
// var authUser = $rootScope.currentUser;
// authUser.$loaded().then(function() {
// console.log(authUser);
// console.log(authUser.email);
// var email = (authUser.email);
// console.log(authUser.firstname);
// var firstname = authUser.firstname;
// console.log(authUser.group_name);
// var group_name = authUser.group_name;
// console.log(authUser.lastname);
// var lastname = authUser.lastname});

//  var updatePostRef = new Firebase(FIREBASE_URL + '/items/' + 'postID');
//  var updateitemPostRef = updatePostRef.update({
//               email: adding_item.email,
//               firstname: adding_item.firstname,
//               group_name: adding_item.group_name,
//               lastname: adding_item.lastname

/* imageurl: imageUpped */










//    var ref = new Firebase(FIREBASE_URL);
//     var userpostRef = ref.child('users');
//     $scope.users = $firebaseArray(userpostRef);

// var $user = $rootScope.currentUser.$id;
// console.log($user);
// var userIdRef = new Firebase(FIREBASE_URL)
// var userIdpost =userIdRef.child('/users/').child('/$user');
// var userIdSnapshot;
// userIdRef.once('value', function(dataSnapshot) {
//   // store dataSnapshot for use in below examples.
//   userIdSnapshot = dataSnapshot;
//  console.log(userIdSnapshot.val()) 
// }); 















        // $scope.add_item_form.$setPristine();


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
