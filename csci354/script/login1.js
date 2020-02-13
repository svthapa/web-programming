document.querySelector('#login1').addEventListener('click', function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result){
    var token = result.credential.accessToken;
    var user = result.user.displayName;
    alert(user+" you are logged in!");
  }).catch(function(error){
    alert(error);
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(error);
  });

})
