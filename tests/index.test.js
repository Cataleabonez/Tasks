const { dayMessage } = require('../src/index');

test('returns Monday message', () => {
  expect(dayMessage('Monday')).toBe('I hate Mondays');
});

test('returns Tuesday message', () => {
  expect(dayMessage('Tuesday')).toBe('let me just survive today!');
});

test('returns default message for other days', () => {
  expect(dayMessage('Friday')).toBe('Enjoy the rest of the week!');
});
