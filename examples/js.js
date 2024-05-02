/* eslint-disable no-secrets/no-secrets */
/* eslint-disable spellcheck/spell-checker */
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
    allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)),
  ).join('');
};
