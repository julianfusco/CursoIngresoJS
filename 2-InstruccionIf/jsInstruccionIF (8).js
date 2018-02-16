function Mostrar()
{ 
	var Edad, EstadoCivil;

	Edad= document.getElementById('edad').value;
	EstadoCivil= document.getElementById('EstadoCivil').value;
	//tomo la edad  
	if (edad > 17 && EstadoCivil== "soltero")
	{
		alert("Es soltero y no es menor");
	}
	


}	//FIN DE LA FUNCIÓN