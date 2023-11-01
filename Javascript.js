const miPalabra = document.getElementById("palabra");

const palabraClave = "bicicleta";
console.log(palabraClave);
console.log(palabraClave.length);

miPalabra.textContent = palabraClave;


const palabraAAdivinar = document.createElement('div')
palabraAAdivinar.classList.add('palabra-a-adivinar')

miPalabra.appendChild(palabraAAdivinar)

const letras = palabraClave.split(''); 

letras.forEach(letra => {

    const aux = document.createElement('div');
    aux.textContent = letra;
    aux.classList.add('letra-ocultada');

    palabraAAdivinar.appendChild(aux);
});




function estaEnPalabra(letra){

    const letras = palabraClave.split('');
    return letras.includes(letra)

}

function enDondeEsta(letra){
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letraBuscada) {
            return i; 
        }
    }
    return -1;
}


console.log(estaEnPalabra('b'))


