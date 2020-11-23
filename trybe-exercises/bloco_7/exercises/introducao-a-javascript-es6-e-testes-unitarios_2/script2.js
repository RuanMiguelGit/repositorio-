const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   ex1 

//   const  AddInObject  = (Object, chave, wert) => {

//     const add =  Object[chave] = wert;
//     return add
//   }

//   console.log(AddInObject(lesson2, 'turno', 'manha'))

//   console.log(lesson2)

//   //ex 2
//   const clés = obj => {
//    const alicia = Object.keys(obj)
//    return alicia
//   }

//   console.log(clés(lesson1))

//   //ex3
//   const clés = size => {
//     const sizes = Object.entries(size).length
//     return sizes
//    }
 
//    console.log(clés(lesson1))

//    //ex4

// const wert = obj => {
//    const werts = Object.values(obj)
//    return werts
//   }

//   console.log(wert(lesson1))

  //ex 5 com o objeto criado


  allLessons  = {

  }

const all = Object.assign(allLessons, {lesson1, lesson2, lesson3})
console.log(allLessons)

//ex 5 sem o objeto criado 

const allLessonss = Object.assign({}, {lesson1,lesson2,lesson3})
console.log(allLessonss)

