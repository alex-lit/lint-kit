/** Флаги включения и выключения линтеров (по умолчанию включены все). */
type LintersFlags = Record<string, boolean>;

/** Карта «паттерн файла → команды». */
type LintStagedRules = Record<string, string | string[]>;

/**
 * Создать конфигурацию lint-staged.
 *
 * @param plugins - Включение и выключение линтеров
 * @param config - Свои правила по паттернам: дополняют или переопределяют карту
 *   по умолчанию
 */
declare function defineConfig(
  plugins?: LintersFlags,
  config?: LintStagedRules,
): LintStagedRules;

export { defineConfig };
