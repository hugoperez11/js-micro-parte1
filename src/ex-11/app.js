


document.getElementById('isDivisible').addEventListener('click', function() {
    // Obtener el valor del número ingresado
    const number = (document.getElementById('number').value);

    // Inicializar el mensaje de resultado
    let mensaje = '';

    // Comprobar divisibilidad por 2, 3, 5 y 7
    
     if (number % 2 === 0) {
        mensaje = `The number ${number} is divisible by 2.`;
    } else if (number % 3 === 0) {
        mensaje = `El número ${number} is divisible by 3.`;
    } else if (number % 5 === 0) {
        mensaje = `El número ${number} is divisible by 5.`;
    } else if (number % 7 === 0) {
        mensaje = `El número ${number} is divisible by 7.`;
    } else {
        mensaje = `El número ${number} no is divisible by 2, 3, 5 ni 7.`;
    }

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = mensaje;
});
