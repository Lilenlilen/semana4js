"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

// const puntosTotales = puntuaciones[{ puntos }].reduce(
//   (previusValue, puntos) => {
//     return previusValue + puntos;
//   },
//   0
// );
// console.log(puntosTotales);

const equiposConPuntosTotales = puntuaciones.map((equipo) => {
  const puntosTotales = equipo.puntos.reduce((previusValue, punto) => {
    return previusValue + punto;
  }, 0);
  return { equipo, puntosTotales };
});

console.log(equiposConPuntosTotales);

console.log(Math.max(equiposConPuntosTotales.puntos));

console.log(Math.min(equiposConPuntosTotales.puntos));

const ordenados = equiposConPuntosTotales[puntos].sort((a, b) => {
  return a - b;
});

console.log(ordenados);
