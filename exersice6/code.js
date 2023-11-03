//Ejercicio 6, recomendación: usar un for anidado

let numeros = [3, 6, 12, 5, 100, 1];
let length = numeros.length;
console.log(`Arreglo desordenado: ${numeros}`);
for (let i = 0; i < length; i++) {
  for (let j = 0; j < (length - i - 1); j++) {
    if (numeros[j] > numeros[j + 1]) {
      //Declaración de varibale auxiliar temp para intercambiar numeros
      let temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
    }
  }
}
console.log(`Arreglo ordenado: ${numeros}`);