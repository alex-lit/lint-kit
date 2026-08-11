import stylelint from 'stylelint';

const { createPlugin } = stylelint;
const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'color-format/format';

const hexToRgb = (hex) => {
  const value = hex.replace('#', '');
  const number = Number.parseInt(value, 16);
  const r = (number >> 16) & 255;
  const g = (number >> 8) & 255;
  const b = number & 255;

  if (value.length === 3 || value.length === 6) {
    return { a: 1, b, g, r };
  }

  const a = Number((((number >> 24) & 255) / 255).toFixed(2));

  return { a, b, g, r };
};

const rgbToHsl = ({ b, g, r }) => {
  const rN = r / 255;
  const gN = g / 255;
  const bN = b / 255;

  const max = Math.max(rN, gN, bN);
  const min = Math.min(rN, gN, bN);
  const delta = max - min;

  const lightness = (max + min) / 2;

  if (delta === 0) {
    return { h: 0, l: Math.round(lightness * 100), s: 0 };
  }

  const saturation = delta / (lightness > 0.5 ? 2 - max - min : max + min);

  let hue;

  switch (max) {
    case gN: {
      hue = ((bN - rN) / delta + 2) / 6;

      break;
    }

    case rN: {
      hue = ((gN - bN) / delta + (gN < bN ? 6 : 0)) / 6;

      break;
    }

    default: {
      hue = ((rN - gN) / delta + 4) / 6;
    }
  }

  return {
    h: Math.round(hue * 360),
    l: Math.round(lightness * 100),
    s: Math.round(saturation * 100),
  };
};

const formatColor = (hex, format) => {
  const { a, b, g, r } = hexToRgb(hex);

  if (format === 'rgb' || format === 'rgba') {
    if (a < 1) {
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    return `rgb(${r}, ${g}, ${b})`;
  }

  const { h, l, s } = rgbToHsl({ b, g, r });

  if (a < 1) {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
  }

  return `hsl(${h}, ${s}%, ${l}%)`;
};

const styleSearch = (source, target, callback) => {
  let startIndex = 0;

  while (startIndex < source.length) {
    const index = source.indexOf(target, startIndex);

    if (index === -1) {
      break;
    }

    callback({ endIndex: index + target.length, startIndex: index });

    startIndex = index + 1;
  }
};

const replaceHexes = (value, fixTo) =>
  value.replaceAll(/#[0-9A-Z]+/gi, (hex) => formatColor(hex, fixTo));

const messages = ruleMessages(ruleName, {
  custom: (message) => message,
  rejected: (hex) => `Unexpected hex color "${hex}"`,
});

const rule = function (actual, options, context) {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual,
      possible: { format: ['rgb', 'rgba', 'hsl', 'hsla'] },
    });

    if (!validOptions) {
      return;
    }

    root.walkDecls((decl) => {
      const declString = decl.toString();
      const fixPositions = [];

      styleSearch(declString, '#', (match) => {
        if (!/[:,\s]/.test(declString[match.startIndex - 1])) {
          return;
        }

        const hexMatch = /^#[0-9A-Z]+/i.exec(
          declString.slice(match.startIndex),
        );

        if (!hexMatch) {
          return;
        }

        const hexValue = hexMatch[0];

        if (context && context.fix) {
          fixPositions.unshift({
            fixTo: actual.format,
            hexValue,
            startIndex: match.startIndex,
          });

          return;
        }

        const message =
          actual && actual.message
            ? messages.custom(actual.message)
            : messages.rejected(hexValue);

        report({
          endIndex: match.endIndex,
          index: match.startIndex,
          message,
          node: decl,
          result,
          ruleName,
        });
      });

      if (fixPositions.length > 0) {
        fixPositions.forEach((fixPosition) => {
          decl.value = replaceHexes(decl.value, fixPosition.fixTo);
        });
      }
    });
  };
};

rule.ruleName = ruleName;
rule.messages = messages;

export default {
  plugins: [createPlugin(ruleName, rule)],
  rules: { 'color-format/format': { format: 'rgb' } },
};
