let estudiante1Cursos = ['Historia','Matemáticas','Inglés','Programación'];
let estudiante2Cursos = ['Geografía','Historia','Español','Programación'];

for (let i = 0; i < estudiante1Cursos.length; i++) {
  for (let j = 0; j < estudiante2Cursos.length; j++) {
    if (estudiante1Cursos[i] === estudiante2Cursos[j]) {
      console.log(estudiante1Cursos[i]);
      console.log(`\t Hay cursos en común en: [${i}][${j}]`);
    }
  }
}