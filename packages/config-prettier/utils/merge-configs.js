/**
 * Объединяет конфигурации Prettier
 *
 * Коллекции `overrides` и `plugins` дополняются: пользовательские значения идут
 * после дефолтных, поэтому более поздние overrides выигрывают. `plugins`
 * дедуплицируются. Остальные поля заменяются значениями из последующих
 * конфигураций.
 *
 * @param {...import('prettier').Config} configs Конфигурации в порядке
 *   приоритета
 *
 * @returns {import('prettier').Config} Объединённая конфигурация
 */
export const mergeConfigs = (...configs) => ({
  ...Object.assign({}, ...configs),
  overrides: configs.flatMap((config) => config.overrides ?? []),
  plugins: [...new Set(configs.flatMap((config) => config.plugins ?? []))],
});
