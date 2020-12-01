    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
    // let somaPedro = notas[0].reduce((total, element)=> total + element)
    // let somaMiguel = notas[1].reduce((total,element)=> total + element)
    // let somaMaria = notas[2].reduce((total,element)=> total + element)
    // let mediaPedro = somaPedro/notas[0].length
    // let mediaMiguel = somaMiguel/notas[1].length
    // let mediaMaria =somaMaria/notas[2].length
    // let notasUnidas = mediaPedro, mediaMiguel, mediaMaria
    // let completo = alunos.reduce((total, element, index) =>  {
       
    //   return  {names:(element), average:notasUnidas[index]}
    // })

   const names = alunos.map((element, index) => {
     return  {names: (element), 
              avarage:(notas[index].reduce((total, element)=> total+element, 0)/notas[index].length)}
   })   
   return names
}

console.log(studentAverage())
// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// assert.deepEqual(studentAverage(), expected);