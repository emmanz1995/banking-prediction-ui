import upperCaseToLowerCase from './upperCaseToLowerCase';

//@ts-ignore
describe('test for to uppercase first letter helper', () => {
  //@ts-ignore
  it.each([
    ['EMMANUEL C OKUCHUKWU', 'Emmanuel C Okuchukwu'],
    ['emmanuel c okuchukwu', 'Emmanuel C Okuchukwu'],
    ['EMmanUeL c oKuchUkwu', 'Emmanuel C Okuchukwu'],
    ['', ''],
    [343423432, ''],
  ])(
    'should return string with first characters of the word capitalized',
    (expected, actual) => {
      //@ts-ignore
      expect(upperCaseToLowerCase(expected)).toEqual(actual);
    }
  );
});
