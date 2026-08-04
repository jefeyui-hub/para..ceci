const boton = document.getElementById("empezar");

const inicio = document.querySelector(".inicio");

const fotos = document.querySelector(".recuerdos");

const carta = document.querySelector(".carta");



boton.addEventListener("click",()=>{


inicio.style.display="none";


fotos.style.display="block";


carta.style.display="block";


});