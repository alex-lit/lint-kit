/**
 * Shared restricted syntax rules.
 *
 * Keep it in a standalone module so that plugins which extend the list (e.g.
 * `vue.js`) merge it instead of silently replacing it.
 */
export const NO_RESTRICTED_SYNTAX = [
  {
    message:
      "Не используйте префикс 'handle' для обработчиков событий. Переименуйте метод, заменив 'handle' на 'on' (например, 'onClick' вместо 'handleClick').",
    selector: 'Identifier[name=/^handle[A-Z]/]',
  },
  {
    message:
      "Используйте методы массивов (.forEach, .map и т.д.) вместо цикла 'for'.",
    selector: 'ForStatement',
  },
  {
    message:
      "Используйте методы объектов (.keys, .values и т.д.) вместо цикла 'for...in'.",
    selector: 'ForInStatement',
  },
  {
    message:
      "Используйте методы массивов(.forEach, .map и т.д.) вместо цикла 'for...of'.",
    selector: 'ForOfStatement',
  },
];
