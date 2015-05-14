stuffExchApp.factory("Authentication", function($firebase, 
	$firebaseAuth, $routeParams, $location, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	var myObject = {
		login: function(user) {
			return auth.$authWithPassword({
				email: user.email,
				password: user.password

			});

		},

		register: function(user) {
			return auth.$createUser({
				email: user.email,
				password: user.password 
			}). then(function(regUser) {
				var ref = new Firebase(FIREBASE_URL);
			// 	var firebaseUsers = $firebase(ref);

			// var userInfo = {

				var postRef = ref.child('users').child(regUser.uid);
					postRef.set({

				date: Firebase.ServerValue.TIMESTAMP,
				firstname: user.first_name,
				lastname: user.last_name,
				email: user.email,
				group_name: user.group_name
			});
			// firebaseUsers.$set(regUser.uid, userInfo);
			console.log(postRef);
			console.log(regUser)

			});
		}


	};

	return myObject;

});