const assert = require('assert')

const greetPeople = (people) => {
    let greeting = 'Hello ';
  
    for (const person in people) {
      greeting += people[person];
    }
    return greeting;
  };



  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  const output = greetPeople(parameter) //  uso o parametro dado na chamada da função, 
  assert.deepStrictEqual(greetPeople(output), result) // uso a chamada da função  e o result 