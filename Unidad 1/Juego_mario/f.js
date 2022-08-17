const Personaje = document.getElementById("PJ");


//movimiento del personaje
let movX = 100
var ancho = window.innerWidth;
var alto = window.innerHeight;


window.addEventListener("keydown",(e)=>{
console.log(e.key)
   Per(e)
})
var direccion = "derecha";
var direccion = "izquierda";
//ArrowLeft
//ArrowRight
const Per = (e) => {
	if(e.key == 'a'){
		movX -= 60
        Personaje.style.transform = "scaleX(1)";
        direccion = "derecha";
	}
	if(e.key == 'd'){
		movX += 60
        Personaje.style.transform = "scaleX(-1)";
        direccion = "izquierdas"
	}
	Personaje.style.transform = `translate(${movX}px`;
    borde();
}

//borde de pantalla
var ancho = window.innerWidth;
var alto = window.innerHeight;

function borde(){
    if (movX > window.innerWidth - Personaje.width){
        movX = window.innerWidth - Personaje.width;
    } else if (movX < -600){
        movX = -600;
    }
}

