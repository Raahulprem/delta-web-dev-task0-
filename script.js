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
	
var name = document.getElementById("name");
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var btn = document.getElementById("btn");

btn.addEventListener("click",function(){alert('hi');

});

document.write(localStorage.name);