var d= new Date();
d=d.toLocaleString();
document.querySelector(".date").textContent=d;

fortune();
function fortune(){
var data=firebase.firestore();
var rand= Math.floor(Math.random() * 110) + 1;
rand=rand.toString();

var lucky = "";
for(var i = 0; i < 5; i++) {
var rand1 = Math.floor(Math.random() * 69) + 1;
 var lucky =  lucky + rand1.toString() + " ";
}

var fortune = data.collection("fortunes").doc(rand);
fortune.get().then(doc => {
  document.querySelector(".fortuneDaily").textContent = "Lucky Numbers: "+ lucky + " quote: "+doc.data().quote;
});
}
