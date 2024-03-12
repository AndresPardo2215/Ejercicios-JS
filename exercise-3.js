//Exercise #3 (sugerencia reduce() )
//Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
//Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

let numeros = [1, 2, 3, 4];

function calcularSumaYProducto(arr) {
  let suma = arr.reduce((acumulador, actual) => acumulador + actual, 0);
  let producto = arr.reduce((acumulador, actual) => acumulador * actual, 1);
  return console.log(`La suma es ${suma}. El producto es ${producto}.`)
}

calcularSumaYProducto(numeros);

