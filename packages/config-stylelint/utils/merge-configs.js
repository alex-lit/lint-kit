/**
 * Объединяет конфиги Stylelint по единой политике.
 *
 * Коллекции (`extends`, `ignoreFiles`, `overrides`, `plugins`) дополняются в
 * порядке аргументов, `plugins` дедуплицируются. `rules` мержатся поверхностно:
 * настройка одноимённого правила из последнего конфига заменяет предыдущую
 * целиком. Остальные поля перезаписываются последним конфигом.
 *
 * @param {...import('stylelint').Config} configs - Конфиги в порядке приоритета
 *
 * @returns {import('stylelint').Config}
 */
export const mergeConfigs = (...configs) => ({
  ...Object.assign({}, ...configs),
  extends: configs.flatMap((config) => config.extends ?? []),
  ignoreFiles: configs.flatMap((config) => config.ignoreFiles ?? []),
  overrides: configs.flatMap((config) => config.overrides ?? []),
  plugins: [...new Set(configs.flatMap((config) => config.plugins ?? []))],
  rules: Object.assign({}, ...configs.map((config) => config.rules ?? {})),
});
