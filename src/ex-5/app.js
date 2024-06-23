//ver que numero es mayor cuando el usuario los introduce

//seleccionar el boton y poner onclik                     

document.getElementById('compararNum').addEventListener('click', function() {
    const numeroUno = parseFloat(document.getElementById('numeroUno').value);
    const numeroDos = parseFloat(document.getElementById('numeroDos').value);

    let mayor;

    if (numeroUno > numeroDos) {
        mayor = numeroUno;
    } else {
        mayor = numeroDos;
    }        
    

    document.getElementById('resultado').textContent = `El número mayor es: ${mayor}`;
});
//textContent se utiliza xa devolver el contenido de texto de un elemento
//puede ser textContent, innerHTML o innerText 