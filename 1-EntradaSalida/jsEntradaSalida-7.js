/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

// Declaro las variables
var numeroUno;
var numeroDos;
var resultado;

function sumar()
{	
	
	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	resultado = numeroUno + numeroDos;

	alert("La suma es "+ resultado);
}

function restar()
{
	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	resultado = numeroUno - numeroDos;

	alert("La resta es "+ resultado);
}

function multiplicar()
{ 
	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	resultado = numeroUno * numeroDos;

	alert("La multiplicacion es "+ resultado);
}

function dividir()
{
	numeroUno= document.getElementById('numeroUno').value;
	numeroDos= document.getElementById('numeroDos').value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	resultado = numeroUno / numeroDos;

	alert("La divicion es "+ resultado);
}

