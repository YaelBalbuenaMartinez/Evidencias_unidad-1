const sonidos = document.getElementById('sonidos')
document.addEventListener('keydown', function (evento){
    if(evento.keyCode == 13){
        sonidos.innerHTMl = '<audio src="musica.mp3" autoplay></audio>'
        
    }
})


var aceptar = document.getElementById('opc1');
var no = document.getElementById('opc2')

aceptar.addEventListener('click', function(){
    aceptar();
})

function aceptar(){
    document.getElementById('img').style.display = "inline";
    ocultarBotones();
}

no.addEventListener('mouseover', function() {
    denegar();
})

function denegar() {
    let x = window.innerWidth - no.offsetWidth;
    let y = window.innerHeight - no.offsetHeight;
  
    let aleatorioX = Math.floor(Math.random() * x);
    let aleatorioY = Math.floor(Math.random() * y);

    no.style.position = 'absolute';
    no.style.top = aleatorioY + 'px';
    no.style.left = aleatorioX + 'px';

}

