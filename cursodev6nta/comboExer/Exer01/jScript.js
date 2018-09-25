var n1, n2, r;

function pegNum(){
	n1 = document.getElementById("nUm").value;
	n2 = document.getElementById("nDois").value;
	
}

function resultado(){
	 var re = document.getElementById("result");
	 re.innerHTML = "Resultado: " + r;
}

function somar(){
	pegNum();
	r = parseFloat( n1 ) + parseFloat( n2 );
	resultado();
	
}

function subtrair(){
	pegNum();
	r = parseFloat( n1 ) - parseFloat( n2 );
	resultado();
	
}

function multiplicar(){
	pegNum();
	r = parseFloat( n1 ) * parseFloat( n2 );
	resultado();
	
}

function dividir(){
	pegNum();
	r = parseFloat( n1 ) / parseFloat( n2 );
	resultado();
	
}