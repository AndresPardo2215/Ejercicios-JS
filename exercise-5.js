/* Exercise #5
For each of the exercises below, assume you are starting with the following people array.
*/
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
/*
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array. */

//1 Para imprimir todas las personas en la lista:
console.log(people);

//2 Para remover "Dani" del array:
let indexDani = people.indexOf("Dani");
if (indexDani !== -1) {
  people.splice(indexDani, 1);
}
//3 Para remover "Juan" del array:
let indexJuan = people.indexOf("Juan");
if (indexJuan !== -1) {
  people.splice(indexJuan, 1);
}

//4 Para mover "Luis" al principio del array:
let indexLuis = people.indexOf("Luis");
if (indexLuis !== -1) {
  let remover = people.splice(indexLuis, 1);
  people.unshift(remover[0]);
}

//5 Para añadir tu nombre al final del array:
let tuNombre = "Andres";
people.push(tuNombre);

//6 Usando un bucle, iterar a través del array y después de imprimir "Maria", salir del bucle:
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Maria") {
    break;
  }
}

//7 Para obtener el índice donde se encuentra "Maria":
let indexMaria = people.indexOf("Maria");
console.log("El índice de 'Maria' es: " + indexMaria);

console.table(people);

