
function clr() {
	console.log("calling clear function");
	document.getElementById("field2").value='';
	document.getElementById("field1").value='';	
	document.getElementById("result").innerHTML=`Result:`;	
}

function add() {
	let a,b;
	a=parseFloat(document.getElementById("field1").value);
	b=parseFloat(document.getElementById("field2").value);
	document.getElementById("result").innerHTML=`Result: ${a+b}`;
	}


function sub() {
	let a,b;
	a=parseFloat(document.getElementById("field1").value);
	b=parseFloat(document.getElementById("field2").value);
	document.getElementById("result").innerHTML=`Result: ${a-b}`;
}


function multi() {
	let a,b;
	a=parseFloat(document.getElementById("field1").value);
	b=parseFloat(document.getElementById("field2").value);
	document.getElementById("result").innerHTML=`Result: ${a*b}`;
}


function div() {
	let a,b;
	a=parseFloat(document.getElementById("field1").value);
	b=parseFloat(document.getElementById("field2").value);
	document.getElementById("result").innerHTML=`Result: ${(a/b).toFixed(2)}`;
}

let lista=['sumit','shreyash','nidhaan','tushar','kripesh']
console.log(lista)
lista.unshift('vaibhav ')
console.log(lista)
