/** Флаги включения и выключения линтеров (по умолчанию включены все). */
type LintersFlags = Record<string, boolean>;

/** Карта «паттерн файла → команды». */
type LintStagedRules = Record<string, string | string[]>;

/**
 * Создать конфигурацию lint-staged.
 *
 * @param options - Настройки конфигурации
 * @param options.config - Свои правила по паттернам: дополняют или
 *   переопределяют карту по умолчанию
 * @param options.plugins - Включение и выключение линтеров (по умолчанию
 *   включены все)
 */
declare function defineConfig(options?: {
  config?: LintStagedRules;
  plugins?: LintersFlags;
}): LintStagedRules;

export { defineConfig };
