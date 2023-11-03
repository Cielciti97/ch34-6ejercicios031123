// Recurso para resolver este ejercicio: https://medium.com/@xadrijo/un-vistazo-a-la-funci%C3%B3n-reduce-en-javascript-f4459bc4e3aa

const arreglo = [1,2,3,4,5];
const sumaAcumulada = [1,2,3,4].reduce((a, b) => a+b);
//console.log(sumaAcumulada);
const productoAcumulado = [1,2,3,4].reduce((a, b) => a*b);
//console.log(productoAcumulado);
console.log(`Del arreglo: ${arreglo}` );
console.log(`La suma de sus elementos es: ${sumaAcumulada}`);
console.log(`El producto de sus elementos es: ${productoAcumulado}`);