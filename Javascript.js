const miPalabra = document.getElementById("word-container");
const rellear = document.getElementById("input-word");


const palabraClave = "Bicicleta";
console.log(palabraClave);
console.log(palabraClave.length);

miPalabra.textContent = palabraClave;
miPalabra.classList.add('azul');

const letras = palabraClave.split('');
console.log(letras);


letras.forEach(function(letra, indice) {
    console.log(indice + ": " + letra);
});


function comparar(){
    if(palabraClave == rellear.value){
        console.log("son la misma palabra");
    } else {
        console.log("no son iguales");
    }
};

rellear.addEventListener('keydown', ()=>{
    console.log(rellear.value);
    comparar();
});