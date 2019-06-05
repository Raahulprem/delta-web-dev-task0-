function save(){
	var list = [] ;
    var no = parseInt(localStorage.getItem("n"));
	//var no = localStorage.getItem("n");
	no += 1;
    
localStorage.setItem("n",no);
no = parseInt(localStorage.getItem("n"));
no = localStorage.getItem("n");

    food[no] = document.getElementById("food").value;
      
localStorage.setItem("food"+no,food[no]);  
var f = localStorage.getItem("food"+no);  
alert(f[no]);

  var  cark = document.getElementById("carbs").value;
      
localStorage.setItem("cark"+no,cark);  
var ck = localStorage.getItem("cark"+no);  
alert(ck[no]);

   var fak = document.getElementById("fats").value;
      
localStorage.setItem("fk"+no,fak);  
var fk = localStorage.getItem("fk"+no);  
alert(fk[no]);

   var  pro = document.getElementById("proteins").value;
      
localStorage.setItem("prote"+no,pro);  
var proten = localStorage.getItem("prote"+no);  
alert(proten[no]);


var tbl = document.getElementById("history");
var row = tbl.insertRow();
  var c1 = row.insertCell();  
  var c2 = row.insertCell();
  var c3 = row.insertCell();
  var c4 = row.insertCell();

c1.innerHTML = f;
c2.innerHTML = ck;
c3.innerHTML = fk;
c4.innerHTML = proten;
  
}
