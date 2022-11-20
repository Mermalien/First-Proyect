'use strict';

const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const displayRGB = document.querySelector('#displayRGB');
const reset = document.querySelector('#reset');
const message = document.getElementById('message');

const squares = document.querySelectorAll('div');



function coloresAlea () {
     
     const arrayColors = []
 
     
     for(let i=0; i<=2; i++){
         const colorAleatorio = Math.round(Math.random () * 255);
         arrayColors.push(colorAleatorio);
     }
 
     const id = Math.ceil(Math.random() * 4); 
 
   
     arrayColors.push(id);
 
    
     return arrayColors;
 }
 console.log(coloresAlea());
 let colorAdivinar= coloresAlea();

 
 function modificarColorOriginal(arrayColores){
     const colorModificado =[]
     for( const color of arrayColores){
         const numAlea =Math.round(Math.random() * 50)
         if(color > 205){
             
             colorModificado.push(color- numAlea);
         }else{
             colorModificado.push(color+ numAlea);
         }
     }
 
     return colorModificado;
 }
 
 
 
 reset.addEventListener('click', ()=>{
     let colorAdivinar= coloresAlea(); 
     p.textContent=`RGB(${colorAdivinar[0]}, ${colorAdivinar[1]}, ${colorAdivinar[2]})`;
     p.style.backgroundColor=`RGB(${colorAdivinar[0]}, ${colorAdivinar[1]}, ${colorAdivinar[2]})`;
     modificarColorOriginal(colorAdivinar);
     fallos.textContent='Fallos:';
     aciertos.textContent='Aciertos:';

     message.textContent='';
 
     
 
     for (const cuadrado of squares) {
         
         let modifyColor = modificarColorOriginal(colorAdivinar);
 
         cuadrado.style.backgroundColor = `RGB(${modifyColor[0]}, ${modifyColor[1]}, ${modifyColor[2]})`;
 
         
         
         if (cuadrado.id === colorAdivinar[3]) {
            
             cuadrado.style.backgroundColor = `RGB(${colorAdivinar[0]}, ${colorAdivinar[1]}, ${colorAdivinar[2]})`;
         }
     }
     console.log('click en jugar');
})

const square1 = document.getElementById('1');
const square2 = document.getElementById('2');
const square3 = document.getElementById('3');
const square4 = document.getElementById('4');

const allSquares = [square1, square2, square3, square4];

//const contador = document.getElementById('contador');
const aciertos = document.getElementById('aciertos');
const fallos = document.getElementById('fallos');

let contador =0;
let intentos = 5;

function squareClickHandler(event){
    message.textContent=`Te quedan ${intentos} intentos`
    square1.addEventListener('click', ()=>{
    
        if(square1.style.backgroundColor === colorAdivinar[3]){
            console.log('square1 HAS ACERTADO');
        }else{
            console.log('square1 HAS FALLADO');
        }
    })
    
    square2.addEventListener('click', ()=>{
        
        if(square2.style.backgroundColor === colorAdivinar[3]){
            console.log('square2 HAS ACERTADO');
        }else{
            console.log('square2 HAS FALLADO');
        }
    })
    
    square3.addEventListener('click', ()=>{
        
        if(square3.style.backgroundColor === colorAdivinar[3]){
            console.log('square3 HAS ACERTADO');
        }else{
            console.log('square3 HAS FALLADO'); 
        }
    })
    
    square4.addEventListener('click', ()=>{
        
        if(square4.style.backgroundColor === colorAdivinar[3]){
            console.log('square4 HAS ACERTADO');
        }else{
            console.log('square4 HAS FALLADO');   
        }
    })

    
    
    if(event.target.id === colorAdivinar[3]){
        contador++;
        intentos--;
        aciertos.textContent = `Aciertos: ${contador}`;
    
    
    }else{
        contador++;
        intentos--;
        fallos.textContent = `Fallos: ${contador}`;
    
    }
        
    for(let i=6; i>=0; i--){
        if(intentos === 0){
            contador=0;
            break;
        }
        break
    }
    
    for(let i=0; i<=2; i++){
        
        if(fallos === 3){
            fallos.textContent=`HAS PERDIDO`;
            console.log(`Has perdido`);
            contador=0;
           break;
            
        
        }if(aciertos === 3){
            aciertos.textContent='HAS GANADO';
            contador=0;
            
            break;
        
        }else if(contador === 3){
            contador=0;
            
            break;
         }
    }
    
    
}

square1.addEventListener('click', squareClickHandler);
square2.addEventListener('click', squareClickHandler);
square3.addEventListener('click', squareClickHandler);
square4.addEventListener('click', squareClickHandler);