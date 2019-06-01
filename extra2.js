function add(){
	var carbs = parseInt(document.getElementById("carbs").value);
	var carb = 0;
	carb = parseInt(localStorage.getItem("car"));
	carb += carbs;
    
localStorage.setItem("car",carb);
carb = localStorage.getItem("car");
alert(carb);
var fats = parseInt(document.getElementById("fats").value);
	var fat = 0;
	fat = parseInt(localStorage.getItem("fa"));
	fat += fats;
    
localStorage.setItem("fa",fat);
fat = localStorage.getItem("fa");
alert(fat);
var proteins = parseInt(document.getElementById("proteins").value);
	var protein = 0;
	protein = parseInt(localStorage.getItem("prot"));
	protein += proteins;
    
localStorage.setItem("prot",protein);
protein = localStorage.getItem("prot");
alert(protein);
var water = parseInt(document.getElementById("water").value);
	var watr = 0;
	watr = parseInt(localStorage.getItem("car"));
	watr += water;
    
localStorage.setItem("wa",watr);
watr = localStorage.getItem("wa");
alert(watr);

}
let ca = localStorage.getItem("car");
let po = localStorage.getItem("prot");
let fa = localStorage.getItem("fa");
let wa = localStorage.getItem("wa");

if(ca>carbslimit ){
		alert('you exceeding your daily carbs limit');
	} 
if( po>proteinslimit){
	alert('you exceeding your daily proteinslimit limit');
	
}	
if( fa>100 ){
		alert('you exceeding your daily fat limit');
	} 
if( wa<4000 )	{
	alert('you have not drank enough water');
}


