// FRASES ALEATORIAS  [[[ SECTION HOME ]]]
    const frasesAleatorias=new Array()
    
    frasesAleatorias[0] = "¡ Hola astronauta, bienvenid@ !";
    
    frasesAleatorias[1] = "TIP: Haz tu propia estrategia ;)";
    
    frasesAleatorias[2] = "¿ Listo para la proxima aventura ?";
    
    frasesAleatorias[3] = "¡ Suerte ! La vas a necesitar!";
    
    frasesAleatorias[4] = "¡ Demuestra tu destreza en la galaxia !";

    
    let frasesLongitud = frasesAleatorias.length;

    function mostrarFrases() {
    const numAleatorio=Math.round(Math.random()*(frasesLongitud-1));

    //aparezcan las frases aleatorias de bienvenida en:
    document.getElementById("home__frases").innerHTML=frasesAleatorias[numAleatorio];
    }

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// INPUT:  [[[ SECTION HOME / GAME ]]]

    let ingresaNombre = document.getElementById("home__form");
    ingresaNombre.addEventListener("submit", nombreIngresado); //input donde el usuario ingresa el nombre

    function nombreIngresado(e){ 
        e.preventDefault();

        let nombreUsuario = document.getElementById("usuarioInput").value;

        document.getElementById("inputIngresado").innerHTML = nombreUsuario;

        localStorage.setItem("nombreUsuario", nombreUsuario); //local storage set item

        localStorage.getItem("nombreUsuario"); //local storage get item
    }

//-------------------------------[[[ SECTION GAME ]]]------------------------------------------------------------------------------------------------------------
//Funcion del nombre de las herramientas y a quien le gana esta herramienta
function Jugada(nombre, gano){
    this.nombre = nombre;
    this.gano = gano;
}

$(document).ready(function(){

    let jugadas = new Array();
    jugadas.push( new Jugada("piedra","tijera")); // piedra le gana a tijera
    jugadas.push( new Jugada("papel","piedra")); // papel le gana a piedra
    jugadas.push( new Jugada("tijera","papel")); // tijera le gana a papel

    $(document).on("click", ".jugada", function() {
        let indexArrayJugador = $(this).data("jugada");
        let indexArrayPc = Math.floor( (Math.random()* 3) +1) -1;

        $('.ultima-jugada-pc').removeClass('ultima-jugada-pc');
        $('.jugada[data-jugada="'+ indexArrayPc +'"]').addClass('ultima-jugada-pc');

        $('.ultima-jugada-humano').removeClass('ultima-jugada-humano');
        $(this).addClass('ultima-jugada-humano');

        if ( jugadas[ indexArrayJugador ].gano == jugadas[ indexArrayPc ].nombre) {
            $('#marcador-jugador .numero').text( parseInt( $('#marcador-jugador .numero').text()) +1 );
        } else if ( jugadas[ indexArrayPc ].gano == jugadas[ indexArrayJugador ].nombre ) {
            $('#marcador-pc .numero').text( parseInt( $('#marcador-pc .numero').text() ) +1);
        }

    });

});

//--------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------[[[ SECTION CONTACT ]]]------------------------------------------------------------
//Form
const contactForm = document.forms["contact__form"]; 

contactForm.onsubmit = (event) => {
    event.preventDefault();
    console.log(contactFormData());
};

function contactFormData(){
    const contactUser = {};
    Array.from(contactForm.elements).forEach(element => {
        if(element.name) contactUser[element.name] = element.value 
        })
        return contactUser;
}

console.log(contactFormData()); // Datos ingresados por el usuarioal form los puedo visualizar en mi consola.


//URL declarada
const URL = "https://jsonplaceholder.typicode.com/posts";
//Declaramos la información a enviar
const infoPost = {Juego: "Piedra, papel o tijera"};
//evento click del boton
$("#btnContact").click(() => {
    $.post(URL, infoPost, (data) => {
    console.log(data);
    });
});

//-------------------------------------------------------ANIMATION-----------------------------------------------------------------
$("button").click(function(){
    $("h1").animate({
        color: 'white',
    });
});
//BTN
$.fn.boom = function(e) {
	var colors = [
		'#32a852',
		'#fffb00',
		'#ffffff',
		// '#ffffff',
		// '#FF9300',
		// '#FF7FA4'
	];
	var shapes = [
		'<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>', 
		// '<path class="circle" d="m 20 1 a 1 1 0 0 0 0 25 a 1 1 0 0 0 0 -25"></path>',
		'<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
		'<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>'
	];

	var btn = $(this);
	var group = [];
	var num = Math.floor(Math.random() * 50) + 30;

	for(i = 0; i < num; i++) {
		var randBG = Math.floor(Math.random() * colors.length);
		var getShape = Math.floor(Math.random() * shapes.length);
		var c = Math.floor(Math.random() * 10) + 5;
		var scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
		var x = Math.floor(Math.random() * (150 + 100)) - 100;
		var y = Math.floor(Math.random() * (150 + 100)) - 100;
		var sec = Math.floor(Math.random() * 1700) + 1000;
		var cir = $('<div class="cir"></div>');
		var shape = $('<svg class="shape">'+shapes[getShape]+'</svg>');
		
		shape.css({
			top: e.pageY - btn.offset().top + 20,
			left: e.pageX - btn.offset().left + 40,
			'transform': 'scale(0.'+scale+')',
			'transition': sec + 'ms',
			'fill': colors[randBG]
		});

		btn.siblings('.btn-particles').append(shape);

		group.push({shape: shape, x: x, y: y});
	}
	
	for (var a = 0; a < group.length; a++) {
		var shape = group[a].shape;
		var x = group[a].x, y = group[a].y;
		shape.css({
			left: x + 50,
			top: y + 15,
			'transform': 'scale(0)'
		});
	}
	
	setTimeout(function() {
		for (var b = 0; b < group.length; b++) {
			var shape = group[b].shape;
			shape.remove();
		}
		group = [];
	}, 2000);

}	

$(function() {
	$(document).on('click', '.btn', function(e) {
		$(this).boom(e);
	});

});