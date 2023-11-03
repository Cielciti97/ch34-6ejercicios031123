let gente = ["María", "Dani", "Luis", "Juan", "Camila"];

// Imprimir todas las personas de la lista
console.log(gente);

// Eliminar "Dani" de la matriz
gente.splice(gente.indexOf("Dani"), 1);

// Eliminar "Juan" de la matriz
gente.splice(gente.indexOf("Juan"), 1);

// Mover "Luis" al frente de la matriz
gente.splice(gente.indexOf("Luis"), 1);
gente.unshift("Luis");

// Agregar tu nombre al final de la matriz
gente.push("Charly");

// Iterar a través de la matriz y salir después de console.log "Maria"
for (let i = 0; i < gente.length; i++) {
    console.log(gente[i]);
    if (gente[i] === "María") {
        break;
    }
}

// Obtener el indexOf donde se encuentra María.
console.log("El indice de María es: " + gente.indexOf("María"));

console.log(`Finalmente tenemos en la amtriz a: ${gente}`);
