import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('eventNumber function', () => {
  test('Return only even number', () => {
    const numbers = [2, 3, 4, 5];
    const result = evenNumbers(numbers);
    expect(evenNumbers(result)).toEqual([2, 4]);
  });
});

describe(' toDollars function', () => {
  test('return number in format dollar and cent', () => {
    expect(toDollars(12.34).match('$12.34'));
  });
});

describe('divideBy function', () => {
  test('Returns a new array of numbers where every entry has been divided by the given divisor', () => {
    const numArray = [2, 4, 6];
    const numDivisor = 2;
    const number = divideBy(numArray, numDivisor);
    expect(number).toEqual([1, 2, 3]);
  });
});

describe('multiplyBy function', () => {
  test('Modifies an object by multiplying the value of each key, but only if that value is a number', () => {
    const obj = {
      a: 2,
      b: 'hello',
      c: 5,
      d: true,
    };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({
      a: 4,
      b: 'hello',
      c: 10,
      d: true,
    });
  });
});
