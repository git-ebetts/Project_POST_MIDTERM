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
};
//ADD ITEMS

    // $scope.items.$loaded().then(function(data) {
    //  $scope.items = data;
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
  console.log(newitemPostRef.key());
  // console.log(key);
  });

 //DELETE ITEMS
//  $scope.deleteItem = function(key) {
// items.$remove(key);
// };


      $scope.reset = function() {
      $scope.adding_item = "";
      $scope.add_item_form.$setPristine();
    };

};
}
);

