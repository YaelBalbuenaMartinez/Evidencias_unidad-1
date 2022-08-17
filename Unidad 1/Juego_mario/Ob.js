const OBJ = document.getElementById("obj");
var nOBJ = 5;
var posicionX = 0;
var velocidadObjetos = 10;
var posicionY = 0;
var intervalo;
caida();

// Lluvia de objetos
function caida(){
    Intervalo = setInterval(function(){
        nOBJ--;
        if(nOBJ >=0){
            crearOBJ();
        }else{
            clearInterval(Intervalo);
        }
    }, 1000);

    // caida del objetp
    posicionY += velocidadObjetos;
    OBJ.style.top = posicionY + "px";

    //verificar limite de objetos
    if(posicionY > limite){
        posicionY = 0;
        OBJ.style.top = posicionY + "px";

    }

    // la caida de objeto
}function crearOBJ(){
    var posicionX = Math.floor(Math.random() * (ancho - 100));
    OBJ.style.left = posicionX + "px";
    moverObjeto(OBJ)

}