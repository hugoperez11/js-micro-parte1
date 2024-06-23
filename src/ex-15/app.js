document.getElementById("isPrimeNumber").addEventListener('click', function() {
    const numb = parseInt(document.getElementById('number').value);
    let mensaje = '';

   
    if (numb <= 1) {
        mensaje = `El número ${numb} no es primo.`;
    } else {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(numb); i++) {
            if (numb % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            mensaje = `El número ${numb} es primo.`;
        } else {
            mensaje = `El número ${numb} no es primo.`;
        }
    }

    document.getElementById('resultado').innerHTML = mensaje;
});