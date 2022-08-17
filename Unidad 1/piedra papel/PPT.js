const piedraOp = document.getElementById("piedra");
const papelOp = document.getElementById("papel");
const tijerasOp = document.getElementById("tijeras");
const resultado = document.getElementById("resultado");

piedraOp.addEventListener("click", () =>{
    iniciar("piedra");
});

papelOp.addEventListener("click", () =>{
    iniciar("papel");
});+

tijerasOp.addEventListener("click", () =>{
    iniciar("tijeras");
});

function iniciar(opcion){
    //computadora
    const Com = Computadora();
    //jugador
    const jugador = opcion;
    //comparacion
    const comp = comparacion(Com, jugador); 
    //resultado
    if(comp ==1){ 
        resultado.innerHTML = "el Jugador elige "+ jugador + "<br> la computadora eligió "+ Com+ "<br> <span class='ganador'> has ganado :D </span>"
        
    }

    if(comp ==2){
        resultado.innerHTML = "el Jugador elige "+ jugador + "<br> la computadora eligió "+ Com+ "<br> <span class='perdiste'> has perdido D: </span>"
    }

    if(comp ==3){
        resultado.innerHTML = "el Jugador elige "+ jugador + "<br> la computadora eligió "+ Com + "<br> <span class='empate'> empate XD </span>"
    }

}

function Computadora(){
    const opciones = ["piedra", "papel", "tijeras"];
    const random = Math.floor(Math.random()*3);
    const mov = opciones[random];
    return (mov);
}

function comparacion(Computadora1, Jugador1){
    switch(Computadora1+Jugador1){
        
        case "tijeraspiedra":
        case "piedrapapel":
        case "papeltijeras":
            return 1; //comparacion ganador
        case "piedratijeras":
        case "tijeraspapel":
        case "papelpiedra":
            return 2; //comparacion de perder
        case "papelpapel":
        case "piedrapiedra":
        case "tijerastijeras":
            return 3; //comparacion empate
    }
}