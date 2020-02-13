
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var loggedIn=document.querySelector("#logged");
    loggedIn.style.display="block";

    var signout=document.querySelector("#signout");
    signout.style.display="block";

    var contact= document.querySelector("#contact");
    contact.style.display="block";

    var login=document.querySelector("#login1");
    login.style.display="none";


    document.querySelector("#signoutBtn").addEventListener("click", function(){
        firebase.auth().signOut().then(function(){
        alert("logged out!");
        window.location.href="./home.html";
        signout.style.display="none";
        loggedIn.style.display="none";
    }).catch(function (error) {
                alert("could not sign out error");
                // [END_EXCLUDE]
    })
    // ...

})

}else{
  loggedIn.style.display="none";
  login.style.display="block";
}
})
