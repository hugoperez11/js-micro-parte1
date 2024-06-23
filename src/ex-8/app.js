//Escribe un programa que pida una frase y escriba las vocales que aparecen
//traer el boton y al click, que cumpla la funcion

document.getElementById('escribirVocales').addEventListener('click',function() {
//creamos almacenamiento a frase y lo traemos
const frase = document.getElementById('frase').value
//creamos la variable para las vocales
const vocales = 'aeiouAEIOU';
//almacena vocales encontradas
let vocalesEncontradas = '';

// Recorremos la frase carácter por carácter
for (let encontrar = 0; encontrar < frase.length; encontrar++) {
    const caracter = frase[encontrar];
    // [] accede a un caracter especifico de la cadena 'frase'
    // Verificamos si el carácter es una vocal
    if (vocales.includes(caracter)) {
        //el caracter se añade a vocalesEncontradas
        vocalesEncontradas = vocalesEncontradas + caracter;
    }
}

// Mostramos las vocales encontradas en el div con id 'result'
document.getElementById('result').textContent = vocalesEncontradas;
});

//puede ser textContent, innerHTML o innerText 