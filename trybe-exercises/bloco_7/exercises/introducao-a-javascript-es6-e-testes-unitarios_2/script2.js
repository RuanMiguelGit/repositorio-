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

  ex1 

  const  AddInObject  = (Object, chave, wert) => {

    const add =  Object[chave] = wert;
    return add
  }

  console.log(AddInObject(lesson2, 'turno', 'manha'))

  console.log(lesson2)

  //ex 2
  const clés = obj => {
   const alicia = Object.keys(obj)
   return alicia
  }

  console.log(clés(lesson1))

  //ex3
  const clés = size => {
    const sizes = Object.entries(size).length
    return sizes
   }
 
   console.log(clés(lesson1))

   //ex4

const wert = obj => {
   const werts = Object.values(obj)
   return werts
  }

  console.log(wert(lesson1))

  //ex 5 com o objeto criado


  allLessons  = {

  }

const all = Object.assign(allLessons, {lesson1, lesson2, lesson3})
console.log(allLessons)

//ex5 sem o objeto criado 

const allLessonss = Object.assign({}, {lesson1,lesson2,lesson3})
console.log(allLessonss)

ex6

const StudentNumber = () => {

const aluno = allLessons.lesson1.numeroEstudantes
const aluno2 = allLessons.lesson2.numeroEstudantes
const aluno3 = allLessons.lesson3.numeroEstudantes
const soma = aluno + aluno2 + aluno3
return soma
}
console.log(StudentNumber())

//ex6 fancy way 

const strenghInNumbers = (obj) => {
    total = 0
    const numbers = Object.values(obj)
    for ( i in numbers){
        total += numbers[i].numeroEstudantes
    }
    return total
}

console.log(strenghInNumbers(allLessons))

ex7 

const position = (obj, position) =>  {
    const local = Object.keys(obj)[position]
    return local
}

console.log(position(lesson3, 3))

//ex 8


const  verifyer  = (Obj, v1, v2) => {

       const lookFor = Object.entries(Obj)
        let isequal = false 

        for ( i in lookFor) {
            if ( lookFor[i][0] === v1 || lookFor[i][1] === v2) // i valor global no lugar do i 1 valor local da array
            isequal = true
        }

      return isequal
    }

    console.log(verifyer(lesson1, 'chiclete', 'pão'))