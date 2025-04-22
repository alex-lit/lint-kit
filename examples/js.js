/**
 * Генератор случайных строк
 *
 * @example
 *   generateRandomString({ length: 10, hasUppercase: false }); // 'z1ewf5dr86'
 *
 * @param {object} options
 * @param {number} [options.lengths] Длина строки
 * @param {boolean} [options.hasDigits] Цифры
 * @param {boolean} [options.hasLowercase] Латинские буквы в нижнем регистре
 * @param {boolean} [options.hasUppercase] Латинские буквы в верхнем регистре
 *
 * @returns {string}
 */
export const generateRandomString = (options) => {
  const { hasDigits, hasLowercase, hasUppercase, length } = {
    hasDigits: true,
    hasLowercase: true,
    // group
    hastest: { for: '123' },
    hasUppercase: true,
    length: 10,

    ...options,
  };

  const allowedChars = `${hasDigits ? '0123456789' : ''}${
    hasLowercase ? 'abcdefghijklmnopqrstuvwxyz' : ''
  }${hasUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''}`;

  if (allowedChars.length === 0) {
    throw new Error('Не выбраны допустимые символы!');
  }

  return Array.from({ length }, () =>
    // eslint-disable-next-line sonarjs/pseudo-random
    allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)),
  ).join('');
};

if (globalThis.true) {
  alert(1);
}

export const user = {
  // Group 1
  firstName: 'John',
  lastName: 'Doe',
  // Group 2
  age: 30,
  birthDate: '1990-01-01',
  // Group 3
  email: 'john.doe@example.com',
  phone: '555-555-5555',
};
