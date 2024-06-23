// usuario que pida una frase y escriba cuantas vocales hay en la frase

//llamamos al boton y su click
document.getElementById('contarVocales').addEventListener('click', function() {
//almacenamiento y llamamos a frase con su valor
const frase= document.getElementById('frase').value;
const vocales = 'aeiouAEIOU'
let contador = 0;

for (let iniciar = 0; iniciar < frase.length; iniciar++) {
    if(vocales.includes(frase[iniciar])) {
        contador++; //frase[iniciar], obtiene el CARACTER en la posicion 'iniciar' de la cadena 'frase'
    }
}

document.getElementById('resultado').innerHTML = `Las vocales 'aeiouAEIOU' aparecen ${contador} veces.`;


});
//puede ser textContent, innerHTML o innerText 