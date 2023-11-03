
// Alternativa a metodo map
//Declaracion de funcion duplicarNumeros
function duplicarNumeros(matriz) {
    let nuevaMatrix = [];
    for (let i = 0; i < matriz.length; i++) {
      nuevaMatrix.push(matriz[i] * 2);
    }
return nuevaMatrix;
  //  console.log("Arreglo duplicado: " + nuevamatrix);
  }
let matrix = [1, 2, 4, 5];
 // duplicarNumeros(matrix);

console.log ("Matriz inicial: " + matrix);
console.log ("Matriz duplicada: "+  duplicarNumeros(matrix));