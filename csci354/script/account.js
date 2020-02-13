
var button= document.querySelector("#more");
button.addEventListener("click", function(){
	button.style.display="none";
	var mainDiv=document.querySelector(".jumbotron");
	var myDiv=document.createElement("div");
	myDiv.setAttribute("class", "container");
	myDiv.style.background="powderblue";
	myDiv.style.height="600px";
	var myHead=document.createElement("h1");
	var text1=document.createTextNode("Account Home");
	myHead.style.padding="10px";
	myHead.appendChild(text1);
	myDiv.appendChild(myHead);
	
	var box=document.createElement("div");
	box.setAttribute("class", "row");
	var box1=document.createElement("div");
	var box2=document.createElement("div");
	box1.setAttribute("class", "col-sm-8.5");
	box2.setAttribute("class", "col-sm-3.5");
	var img=document.createElement("img");
	img.setAttribute("src", "./pictures/work.jpg");
	img.setAttribute("alt", "workout");
	var para=document.createElement("p");
	para.setAttribute("class", "lead");
	var para1=document.createTextNode("You can achieve your desired physique with our workout plan.");
	para.appendChild(para1);
	box2.appendChild(para);
	box1.appendChild(img)
	box.appendChild(box1);
	box.appendChild(box2);
	myDiv.appendChild(box);
	mainDiv.appendChild(myDiv);
})
