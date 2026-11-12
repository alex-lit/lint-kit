import process from 'node:process';

const previousDebug = process.env.PRETTIER_DEBUG;

/**
 * `@4az/prettier-plugin-html-erb` выставляет `PRETTIER_DEBUG` на уровне модуля.
 * Загружаем его отдельно и возвращаем прежнее значение, чтобы не включать
 * debug-режим Prettier для всего проекта.
 */
export const htmlErb = await import('@4az/prettier-plugin-html-erb');

if (previousDebug === undefined) {
  delete process.env.PRETTIER_DEBUG;
} else {
  process.env.PRETTIER_DEBUG = previousDebug;
}
