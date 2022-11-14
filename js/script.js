'use strict';

let contador = 0;
let displayRGB = document.querySelector('#displayRGB');
const reset = document.querySelector('#reset');
let message = document.getElementById('message');
const intentos = 6;
const div = document.querySelector('div#container');
const circles = 4;
let square = document.querySelectorAll('div#container div');
let h2 = document.querySelector('h2')

// console.log(square); muestra ok todos los div con class


// ya he creado la funcioan manejadora del evento y la he 
// añadido al boton de "quiero 
// mas colores". Le he puesto una clase para que sepamos que 
// funciona.

function resetClickHandler() {
     console.log('click');
     reset.style.backgroundColor = '#98FF19';
};

// la funcion de arriba, esta llamada aqui abajo 
//(resetClikHandler)
reset.addEventListener('click', resetClickHandler);

// He creado tambien como eliminarlo, para probar si funciona
// que con remove, vuelva otra vez al inicio. Lo voy a 
// dejar comentado, ya que nos puede venir bien mas 
// adelante.
//reset.removeEventListener ('click', resetClickHandler);
 

// Funcion manejadora para que cuando se haga click en el
// ciculo.
// Lo he hecho con la clase del Bubbling. Cuando se hace 
// click en en todo el DIV, se genera el evento, no solo en 
// el circulo.
div.addEventListener('click', () => {
     console.log('click en el circulo');
});


function getRandomColor (){
     const randomColor = Math.round(Math.random () * 255);
     return randomColor;

};



function h2ClickHandler (){
     h2.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
};
h2.addEventListener('click', h2ClickHandler);