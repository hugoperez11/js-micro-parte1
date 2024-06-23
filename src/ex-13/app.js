document.getElementById('numero').addEventListener('input',
    function() {
    const numero = (this.value);
    const resultado = document.getElementById('resultado');

    // Limpiar el contenido anterior
    resultado.innerHTML = '';

   
    // Encontrar y mostrar los divisores
    let divisores = `Los divisores de ${numero} son:<br>`;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores += `${i}<br>`;
        }
    }
    resultado.innerHTML = divisores;
});
