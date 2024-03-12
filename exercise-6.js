/* Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100] */

function algoritmoBurbuja(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambiar arr[j] y arr[j + 1]
          let temporal = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temporal;
        }
      }
    }
  
    return arr;
  }
  
  // Ejemplo de uso:
  let entrada = [3, 6, 12, 5, 100, 1];
  let salida = algoritmoBurbuja(entrada);
  console.log(salida); // Salida: [1, 3, 5, 6, 12, 100]<