// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la 
// lógica para resolver el problema.


let listaAmigos = [];

function agregarAmigo () {
    let nombreAmigo = document.getElementById("amigo").value;

    if ( nombreAmigo != '' ) {
        listaAmigos.push(nombreAmigo);
        console.log (listaAmigos);
        nombreAmigo = document.getElementById("amigo").value= '';
    } else {
        alert ("Por favor, inserte un nombre");
    }
}