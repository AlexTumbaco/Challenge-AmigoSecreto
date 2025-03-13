// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.


let amigos = []; //arreglo que almacena nombre de amigos


// funcion encargada de agregar amigos a la lista
function agregarAmigo () { 
    let nombreAmigo = document.getElementById("amigo").value; // Guarda el nombre
    
    if ( nombreAmigo != '' ) {
        amigos.push(nombreAmigo); //agrega nombre al arreglo
        document.getElementById("amigo").value= '';
        actualizaLista();
    } else {
        alert ("Por favor, inserte un nombre");
    }
}

//funcion encargada de limpiar la parte visual
function limpiarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
}

//funcion encargada mostrar los nombres de los amigos
function actualizaLista () {
    limpiarLista();
    let listaHTML = document.getElementById ("listaAmigos");
    for (let i = 0; i < amigos.length ; i ++){
        listaHTML.innerHTML += `<li>${amigos[i]} </li>`; //muestra los nombres
    }
    
}

// funcion  encargada de mostrar un amigo aleatorio
function sortearAmigo () {
    if (amigos.length != 0) {
        let amigoRandom = Math.floor (Math.random()*amigos.length);
        (document.getElementById("resultado")).innerHTML = `El amigo secreto sorteado es : ${amigos [amigoRandom]}`;
        amigos = [];
        limpiarLista ();
    } else {
        alert ("La lista de amigos esta vacía, por favor llenela.");   
    }
}

