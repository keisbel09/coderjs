
let nombreIngresado = prompt ("Nombre");
let apellidoIngresado = prompt("Apellido");

alert("¡Hola! " + nombreIngresado +" " + apellidoIngresado + ", soy Calculator");

let diaslaburados = parseInt( prompt( nombreIngresado + ", vamos a calcular tu salario de este mes, ingresa tus días laburados"));

if ((diaslaburados > 0) && (diaslaburados <32 )) {// Verifica que el valor numerico ingresaso sea mayor que 0 y menor que 31
    alert ( "Tu salario es de : $" + ( diaslaburados * 1000))
    alert( nombreIngresado + ", espero haber podido ayudarte,  que tengas un excelente día");
}

else if(diaslaburados >31) { // verifica que el valor numerico no sea mayor que 31
    alert( "error, un mes no tiene mas de 31 días; por favor ingresa un dato valido");
}

else if(diaslaburados != "") { //verifica que sea ingresado un dato numerico
    alert( nombreIngresado +", debes ingresar un valor numerico");
}

else{
    alert("Debes ingresar un numero mayor 0");
}

