/*function clear(){
	
	localStorage.setItem("car",0);
	localStorage.setItem("prot",0);
	localStorage.setItem("wa",0);
	localStorage.setItem("fa",0);
	
	var c = localStorage.getItem("car");
	var p = localStorage.getItem("prot");
	var f = localStorage.getItem("fa");
	var w = localStorage.getItem("wa");
	
	alert(c);
	alert(f);
	alert(w);
	alert(p);
localStorage.removeItem("car");
localStorage.removeItem("fa");
localStorage.removeItem("wa");
localStorage.removeItem("prot");	
}*/

var b = document.getElementById("btn4");
b.addEventListener("click",function(){
localStorage.removeItem("car");
localStorage.removeItem("fa");
localStorage.removeItem("wa");
localStorage.removeItem("prot");
})


function first(){
	var carbs = parseInt(document.getElementById("carbs").value);
	var carb = 0;
//	carb = parseInt(localStorage.getItem("car"));
	carb += carbs;
    
localStorage.setItem("car",carb);
carb = localStorage.getItem("car");
alert(carb);
var fats = parseInt(document.getElementById("fats").value);
	var fat = 0;
	//fat = parseInt(localStorage.getItem("fa"));
	fat += fats;
    
localStorage.setItem("fa",fat);
fat = localStorage.getItem("fa");
alert(fat);
var proteins = parseInt(document.getElementById("proteins").value);
	var protein = 0;
	//protein = parseInt(localStorage.getItem("prot"));
	protein += proteins;
    
localStorage.setItem("prot",protein);
protein = localStorage.getItem("prot");
alert(protein);
var water = parseInt(document.getElementById("water").value);
	var watr = 0;
	//watr = parseInt(localStorage.getItem("car"));
	watr += water;
    
localStorage.setItem("wa",watr);
watr = localStorage.getItem("wa");
alert(watr);

}