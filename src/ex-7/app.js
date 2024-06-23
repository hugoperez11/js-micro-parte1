//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

//traigo el boton le digo q click haga la funcion
document.getElementById('contarLetraA').addEventListener('click',function(){
// se obtiene el valor de entrada frase
const frase = document.getElementById('frase').value
const letraBuscar = 'a';
let contador = 0;

for (let iniciar = 0; iniciar < frase.length; iniciar++) {
    if (frase[iniciar] === letraBuscar) {
        contador++;
    }
}

document.getElementById('resultado').textContent = `La letra 'a' aparece ${contador} veces.`;
//puede ser textContent, innerHTML o innerText 
});

//sintaxis for: inicializar la variable , ponemos la condicion ; realizamos la actuacizac de la variable
//frase[i]: accede al caracter i de la cadena frase
//length: es una propiedad que devuelve el numero total de caracteres en la frase