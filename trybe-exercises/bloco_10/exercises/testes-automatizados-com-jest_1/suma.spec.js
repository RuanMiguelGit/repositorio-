const suma = (a, b) => a + b;

test('sums two values', () => {
  expect(suma(2, 3)).toEqual(5);
});