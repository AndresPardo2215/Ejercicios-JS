//Exercise #4 (sugerencia filter() e includes() )


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

function encontrarCursosComunes(cursos1, cursos2) {
  let cursosComunes = cursos1.filter(curso => cursos2.includes(curso));
  return cursosComunes;
}

let cursosComunes = encontrarCursosComunes(student1Courses, student2Courses);

if (cursosComunes.length > 0) {
  console.log("Los cursos comunes son:");
  cursosComunes.forEach(curso => console.log(curso));
} else {
  console.log("No hay cursos comunes.");
}