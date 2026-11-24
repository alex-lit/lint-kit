/**
 * Кастомные атрибуты Tailwind CSS, которые Prettier не обрабатывает
 * автоматически. `class`, `className`, `:class` и `v-bind:class` плагины
 * поддерживают сами.
 */
export const TAILWIND_ATTRIBUTES = Object.freeze(['ui', ':ui']);

/** Функции, в аргументах которых Tailwind CSS и classnames ищут классы */
export const TAILWIND_FUNCTIONS = Object.freeze([
  'classnames',
  'clsx',
  'cn',
  'ctl',
  'cva',
  'tv',
  'tw',
  'twMerge',
]);
