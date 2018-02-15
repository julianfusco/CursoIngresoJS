function Mostrar()
{	var edad, estadoCivil;

	edad = document.getElementById('edad').value;
	estadoCivil = document.getElementById('estadoCivil').value;
	//tomo la edad  
	if (edad< 18 && estadoCivil!= "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

	


}//FIN DE LA FUNCIÓN