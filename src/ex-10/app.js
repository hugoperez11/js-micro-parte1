//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
//ej: a dos veces, b tres veces...
//line 26: bucle for. itera sobre cada carácter de la frase ingresada por el usuario.
//line 27 :  La función includes se aplica a la cadena vocales para comprobar si el carácter actual frase[i] está presente en esta cadena.
//line 32 : crea una variable llamada resultado y la inicializa con una cadena vacía. Esta variable se utiliza para construir una cadena de texto que contendrá el resultado final del conteo de las vocales
//line 34: for in. para iterar sobre las propiedades"claves" del objeto contadorVocales y se utiliza para construir una cadena de texto que muestra cuántas veces aparece cada vocal en una frase.

//llamar al boton y al hacer click se hace la funcion
document.getElementById('contarVocales').addEventListener('click', function() {
//crear caja a la frase y llamarla
const frase = document.getElementById('frase').value
const vocales = 'aeiouAEIOU'
let contadorVocales = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0,
    'A': 0,
    'E': 0,
    'I': 0,
    'O': 0,
    'U': 0
};

for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
        contadorVocales[frase[i]]++;
    }
}

let resultado = '';

for (let vocal in contadorVocales) { //vocal es cada una de las claves o vocales
    resultado += `La vocal '${vocal}' aparece ${contadorVocales[vocal]} veces.<br>`;
}

document.getElementById('resultado').innerHTML = resultado;
});