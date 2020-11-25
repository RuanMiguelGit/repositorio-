const greetPeople = (people) => {
    let greeting = [];
  
    for (const person in people) {
      greeting.push(`Hello ${people[person]}`) ;
    }
    return greeting;
  };
  
  const assert = require('assert')

  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  const output = greetPeople(parameter)

  assert.deepStrictEqual(output, result)
