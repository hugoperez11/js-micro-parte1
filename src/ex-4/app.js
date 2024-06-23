//sumar dos numeros que introduzca el usuario

  // Seleccionar el botón y agregar el evento click 
  document.getElementById('sumarBtn').addEventListener('click', sumarNumeros);

  function sumarNumeros() {
      // Obtener los valores de los inputs y convertirlos a números
      //parsefloat tiene en consideracion decimales
      const numeroUno = parseFloat(document.getElementById('numeroUno').value);
      const numeroDos = parseFloat(document.getElementById('numeroDos').value);

     
      // Realizar la suma
      const resultado = numeroUno + numeroDos;

      // Mostrar el resultado
      document.getElementById('resultado').textContent = `La suma de ${numeroUno} con ${numeroDos} es ${resultado}`;
  }//puede ser textContent, innerHTML o innerText 