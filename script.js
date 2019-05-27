/*
 Base your meals on higher fibre starchy carbohydrates 
 Eat more fish, including a portion of oily fish
 Eat lots of fruit and veg
 Cut down on saturated fat and sugar
 Eat less salt: no more than 6g a day for adults
 Get active and be a healthy weight
 Do not get thirsty
 Do not skip breakfast
 Choose Whole-Grain Bread — Not Refined
 Add Greek Yogurt to Your Diet
 Eat Eggs, Preferably for Breakfast
 Increase Your Protein Intake

*/

var choice=(Math.round(Math.random()*10));


var advices = document.getElementById("advices");
switch(choice){
	case 0:advices.innerHTML="Base your meals on higher fibre starchy carbohydrates";
	break;
	case 1:advices.innerHTML="Eat more fish, including a portion of oily fish";
	break;
	case 2:advices.innerHTML="Eat lots of fruit and veg";
	break;
	case 3:advices.innerHTML="Cut down on saturated fat and sugar";
	break;
	case 4:advices.innerHTML="Eat less salt: no more than 6g a day for adults";
	break;
	case 5:advices.innerHTML="Get active and be a healthy weight";
	break;
	case 6:advices.innerHTML="Do not get thirsty";
	break;
	case 7:advices.innerHTML="Do not skip breakfast";
	break;
	case 8:advices.innerHTML=" Add Greek Yogurt to Your Diet";
	break;
	case 9:advices.innerHTML="Eat Eggs, Preferably for Breakfast";
	break;
	
}

/*var prot = window.prompt("how much do you think should be your proteins limit");
var carb = window.prompt("how much do you think should be your carbs limit");
var fat = window.prompt("how much do you think should be your fats limit"); 	*/
	
var name = document.getElementById("name");
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var btn = document.getElementById("btn");
var gender = document.getElementsByName("gender"); 

btn.addEventListener("click",function(){
	localStorage.name = name.value;
	localStorage.age = age.value;
	localStorage.height = height.value;
	localStorage.weight = weight.value;
    if(gender[0].checked){
		localStorage.gender = 1;
	}	
	else if (gender[1].checked){
		localStorage.gender = 2;
	}
    else{
		localStorage.gender = 0;
	}
});
a = parseInt(localStorage.height);
b   = parseInt(localStorage.age);
c  = parseInt(localStorage.weight);

if (localStorage.gender==2){
	if(localStorage.age<4){
		var carbslimit = 1000;
		var proteinslimit = 65;
	}
	else if(localStorage.age>=4 && localStorage.age<13){
		var carbslimit = 1600;
		var proteinslimit = 45;
	}
	else if(localStorage.age>=13 && localStorage.age<19){
		var carbslimit = 1800;
		var proteinslimit = 45;
	}
	else if(localStorage.age>=19 && localStorage.age<30){
		var carbslimit = 2000;
		var proteinslimit = 50;
	}
	else if(localStorage.age>=30 && localStorage.age<50){
		var carbslimit = 1800;
		var proteinslimit = 50;
	}
	else if(localStorage.age>=50 && localStorage.age<70){
		var carbslimit = 1600;
		var proteinslimit = 53;
	}
	else{
		var carbslimit = 1600;
		var proteinslimit = 57;
		
	}
}
if (localStorage.gender==1){
	if(localStorage.age<4){
		var carbslimit = 1000;
		var proteinslimit = 65;
	}
	else if(localStorage.age>=4 && localStorage.age<13){
		var carbslimit = 1800;
		var proteinslimit = 65;
	}
	else if(localStorage.age>=13 && localStorage.age<19){
		var carbslimit = 2200;
		var proteinslimit = 65;
	}
	else if(localStorage.age>=19 && localStorage.age<30){
		var carbslimit = 2400;
		var proteinslimit = 60;
	}
	else if(localStorage.age>=30 && localStorage.age<50){
		var carbslimit = 2200;
		var proteinslimit = 60;
	}
	else if(localStorage.age>=50 && localStorage.age<70){
		var carbslimit = 2000;
		var proteinslimit = 70;
	}
	else{
		var carbslimit = 2000;
		var proteinslimit = 81;
		
	}
}
var bmi= (localStorage.weight/(localStorage.height*localStorage.height)*10000);
if(bmi > 25){alert('you are over weight, manage your diet')}
else if(bmi < 18){alert('you are under weight eat more food')}
else{alert('you are in perfect fitness')}
/*document.write(localStorage.weight);
document.write(localStorage.height);
document.write(localStorage.age);
document.write(localStorage.gender);

alert(carbslimit);*/



var btn2 = document.getElementById("btn2");
/*var carbs = document.getElementById("carbs").value;
var proteins = document.getElementById("proteins").value;
var fats = document.getElementById("fats").value;
var water = document.getElementById("water").value;*/
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

btn2.addEventListener("click",function(){
	localStorage.setItem("carbs",(document.getElementById("carbs").value));
	localStorage.setItem("proteins",(document.getElementById("proteins").value));
	localStorage.setItem("fats",(document.getElementById("fats").value));
	localStorage.setItem("water",(document.getElementById("water").value));	
	   	

});
let carbs = localStorage.getItem("carbs");
let proteins = localStorage.getItem("proteins");
let fats = localStorage.getItem("fats");
let water =	localStorage.getItem("water");


/*btn2.addEventListener("click",function(){
	localStorage.setItem('carbs', 'carbs.value');
	localStorage.water = water.value;
	localStorage.fats = fats.value;
	localStorage.proteins = proteins.value;	
});
 carbs = localStorage.getItem('carbs');
document.write(carbs);
*/

btn3.addEventListener("click",function(){
	var carb = 0;
    var fat = 0;
    var protein = 0;
    var watr = 0;	
	/*localStorage.setItem("carb",(document.getElementById("carbs").value));
	localStorage.setItem("protein",(document.getElementById("proteins").value));
	localStorage.setItem("fat",(document.getElementById("fats").value));
	localStorage.setItem("watr",(document.getElementById("water").value));
    var carbs = localStorage.getItem("carb");
    var proteins = localStorage.getItem("protein");
    var	fats = localStorage.getItem("fat");
    var water =	localStorage.getItem("watr");*/
	var carbs = (document.getElementById("carbs").value);
    var proteins = (document.getElementById("proteins").value;
    var	fats = (document.getElementById("fats").value);
    var water =	(document.getElementById("water").value);
	
    carb+= carbs;
	watr+=water;
	fat+=fats;
	protein+=proteins;
	localStorage.setItem("carb",carb);
	localStorage.setItem("watr",watr);
	localStorage.setItem("fat",fat);
	localStorage.setItem("protein",protein);
	 carb = localStorage.getItem("carb");
     protein = localStorage.getItem("protein");
     fat = localStorage.getItem("fat");
     watr =	localStorage.getItem("watr");	  	

});



if(carbs>carbslimit || carb>carbslimit){
		alert('you exceeding your daily carbs limit');
	} 
if( proteins>proteinslimit|| protein>proteinslimit){
	alert('you exceeding your daily proteinslimit limit');
	
}	
if( fats>100 || fat>100){
		alert('you exceeding your daily fat limit');
	} 
if( water<4000 || watr<4000)	{
	alert('you have not drank enough water');
}
