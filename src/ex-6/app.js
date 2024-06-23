//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.


document.getElementById('compararNum').addEventListener('click', function() {
    const numeroUno = parseFloat(document.getElementById('numeroUno').value);
    const numeroDos = parseFloat(document.getElementById('numeroDos').value);
    const numeroTres = parseFloat(document.getElementById('numeroTres').value);

    let mayor;

    if (numeroUno >= numeroDos && numeroUno >= numeroTres) {
        mayor = numeroUno;
    } else if (numeroDos >= numeroUno && numeroDos >= numeroTres) {
        mayor = numeroDos;
    } else {
        mayor = numeroTres;
    }

    document.getElementById('resultado').textContent = `El número mayor es: ${mayor}`;
});//puede ser textContent, innerHTML o innerText 