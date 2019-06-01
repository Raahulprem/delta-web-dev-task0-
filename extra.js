function save(){
	var list = [] ;
    var no = parseInt(localStorage.getItem("n"));
	//var no = localStorage.getItem("n");
	no += 1;
    
localStorage.setItem("n",no);
//no = parseInt(localStorage.getItem("n"));
no = localStorage.getItem("n");
//alert(no);
    list[no] = document.getElementById("food").value,
      
    /* var info = {list :[ { 
	            
				name:document.getElementById("food").value,
				carbs:document.getElementById("carbs").value,
				fats:document.getElementById("fats").value,
				proteins:document.getElementById("proteins").value,
				water:document.getElementById("water").value,
	 }]
		 
		 
}	*/
localStorage.setItem("stored[no]",JSON.stingify(list));  
var h = JSON.parse(localStorage.getItem("stored[no]"));  
alert(h[no]);
}
