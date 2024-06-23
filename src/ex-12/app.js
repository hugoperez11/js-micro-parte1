// script.js
document.getElementById('isDivisible').addEventListener('click', 
    function() {
    // Obtener el valor del número ingresado y convertirlo a entero
    const number = (document.getElementById('number').value);

    // Inicializar el mensaje de resultado
    let mensaje = '';

    // Crear una lista para almacenar los divisores
    let divisores = [];

    // Comprobar divisibilidad por 2, 3, 5 y 7 y añadir a la lista
    // La función push() es un método de los arrays en JavaScript
    // que se utiliza para agregar un nuevo elemento al final de un array.
    if (number % 2 === 0) {
        divisores.push(2);
    }
    if (number % 3 === 0) {
        divisores.push(3);
    }
    if (number % 5 === 0) {
        divisores.push(5);
    }
    if (number % 7 === 0) {
        divisores.push(7);
    }

    // Generar el mensaje en función de los divisores encontrados
    if (divisores.length > 0) {
        mensaje = `El número ${number} es divisible por: ${divisores}`;
    } else {
        mensaje = `El número ${number} no es divisible por 2, 3, 5 ni 7.`;
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = mensaje;
});
