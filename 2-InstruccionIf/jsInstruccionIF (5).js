//Al ingresar una edad solo debemos informar si la persona NO es adolescente.//

function Mostrar()
{
	var edad;

	edad = document.getElementById('edad').value;
//tomo la edad  
if (edad >= 18 || edad <= 13)

{

	alert("la persona no es adolescente");
}

}//FIN DE LA FUNCIÓN