import type { Config } from '@linthtml/linthtml';

/**
 * Создать конфигурацию linthtml.
 *
 * База (расширяется рекомендованным конфигом):
 * `@linthtml/linthtml-config-recommended` плюс дефолтные опции линтера и
 * правила. Всё, что передано в `options`, накладывается поверх базы; `extends`
 * и `ignoreFiles` конкатенируются, `rules` — shallow merge.
 *
 * @param options — опции linthtml, накладываемые поверх значений по умолчанию
 */
export declare function defineConfig(options?: Config): Config;
