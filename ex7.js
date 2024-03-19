/* 7.1 Dado el siguiente array, haz una suma de todas las notas de los examenes de 
los alumnos usando la función .reduce(). */

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const sumScore = exams.reduce(
  (acc, exam) => acc + exam.score,0
);

console.log("la suma de todas las notas de todos los alumnos es:" , sumScore);

/* 7.2 Dado el mismo array, haz una suma de todas las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce(). */

const approved = exams.reduce((acc, exam) => {
  if (exam.score >= 5) {
    return acc + exam.score;
  }
  return acc;
}, 0);

console.log("la suma de las notas de los exámenes aprobados es:", approved);

/* 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */

const mediaScore =
  exams.reduce((acc, exam) => acc+ exam.score, 0) / exams.length;

console.log("la media de las notas de todos los exámenes es:", mediaScore);
