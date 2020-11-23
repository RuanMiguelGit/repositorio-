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

  function AddInObject (Object, chave, wert) {

     const add =  Object[chave] = wert;
    return add
  }

  console.log(AddInObject(lesson2, 'turno', 'manha'))

  console.log(lesson2)