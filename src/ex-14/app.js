document.getElementById('areDivisible').addEventListener('click', 

     function () {
      // Obtener los valores de los inputs
      const num1 = (document.getElementById('numero1').value);
      const num2 = (document.getElementById('numero2').value);
      const resultado = document.getElementById('resultado');
      
      // Limpiar el contenido previo de resultado
      resultado.innerHTML = '';
      
    
      
      // Encontrar los divisores comunes
      const divisoresComunes = [];
      //Math.min encuentra el menor numero de los 2
      const maxDivisor = Math.min(num1, num2);
      for (let i = 1; i <= maxDivisor; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
          divisoresComunes.push(i);//push agrega elementos al final de un array,almacena cada divisor
        }
      }
      
      // Mostrar los divisores comunes
      if (divisoresComunes.length > 0) {
        resultado.innerHTML = divisoresComunes.join(', ');
      } else {
        resultado.innerHTML = 'No hay divisores comunes.';
      }
    })