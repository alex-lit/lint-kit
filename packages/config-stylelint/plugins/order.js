/** @see [stylelint-order](https://github.com/hudochenkov/stylelint-order) */
module.exports = {
  plugins: ['stylelint-order'],

  rules: {
    'order/order': [
      // SASS variables
      'dollar-variables',

      // LESS variables
      'at-variables',

      // SASS extends
      { name: 'extend', type: 'at-rule' },

      // SASS includes
      { name: 'include', type: 'at-rule' },

      // Tailwind applies
      { name: 'apply', type: 'at-rule' },

      // CSS custom properties
      'custom-properties',

      // SASS aliases
      { selector: '%', type: 'rule' },

      // Declarations
      'declarations',

      // Root
      { name: 'at-root', type: 'at-rule' }, // sass
      { name: 'nest', type: 'at-rule' }, // postcss

      // Bootstrap media mixins
      { name: 'include', parameter: 'media', type: 'at-rule' },

      // Tailwind breakpoints
      { name: 'screen', parameter: '2xl', type: 'at-rule' },
      { name: 'screen', parameter: 'xl', type: 'at-rule' },
      { name: 'screen', parameter: 'lg', type: 'at-rule' },
      { name: 'screen', parameter: 'md', type: 'at-rule' },
      { name: 'screen', parameter: 'sm', type: 'at-rule' },

      // Chrome breakpoints
      { name: 'media', parameter: 'laptop-4k', type: 'at-rule' },
      { name: 'media', parameter: 'laptop-xl', type: 'at-rule' },
      { name: 'media', parameter: 'laptop-l', type: 'at-rule' },
      { name: 'media', parameter: 'laptop', type: 'at-rule' },
      { name: 'media', parameter: 'tablet', type: 'at-rule' },
      { name: 'media', parameter: 'mobile-l', type: 'at-rule' },
      { name: 'media', parameter: 'mobile-m', type: 'at-rule' },
      { name: 'media', parameter: 'mobile-s', type: 'at-rule' },
      { name: 'media', parameter: 'mobile', type: 'at-rule' },

      // Bootstrap breakpoints
      { name: 'media', parameter: 'xxl', type: 'at-rule' },
      { name: 'media', parameter: 'xl', type: 'at-rule' },
      { name: 'media', parameter: 'lg', type: 'at-rule' },
      { name: 'media', parameter: 'md', type: 'at-rule' },
      { name: 'media', parameter: 'sm', type: 'at-rule' },
      { name: 'media', parameter: 'xs', type: 'at-rule' },
      { name: 'media', parameter: 'xxs', type: 'at-rule' },

      { name: 'media', type: 'at-rule' },

      { name: 'container', type: 'at-rule' },
      { name: 'supports', type: 'at-rule' },
      { name: 'document', type: 'at-rule' },

      // Nested
      { name: 'page', type: 'at-rule' },
      { name: 'font-face', type: 'at-rule' },
      { name: 'keyframes', type: 'at-rule' },
      { name: 'viewport', type: 'at-rule' },
      { name: 'counter-style', type: 'at-rule' },

      // Font-feature
      { name: 'font-feature-values', type: 'at-rule' },
      { name: 'swash', type: 'at-rule' },
      { name: 'ornaments', type: 'at-rule' },
      { name: 'annotation', type: 'at-rule' },
      { name: 'stylistic', type: 'at-rule' },
      { name: 'styleset', type: 'at-rule' },
      { name: 'character-variant', type: 'at-rule' },

      'at-rules',

      // Linguistic pseudo-classes
      { selector: ':dir', type: 'rule' },
      { selector: ':lang', type: 'rule' },

      // Location pseudo-classes
      { selector: ':any-link', type: 'rule' },
      { selector: ':link', type: 'rule' },
      { selector: ':visited', type: 'rule' },
      { selector: ':local-link', type: 'rule' },
      { selector: ':target', type: 'rule' },
      { selector: ':target-within', type: 'rule' },
      { selector: ':scope', type: 'rule' },

      // User action pseudo-classes
      { selector: ':hover', type: 'rule' },
      { selector: ':active', type: 'rule' },
      { selector: ':focus', type: 'rule' },
      { selector: ':focus-visible', type: 'rule' },
      { selector: ':focus-within', type: 'rule' },

      // Time-dimensional pseudo-classes
      { selector: ':current', type: 'rule' },
      { selector: ':past', type: 'rule' },
      { selector: ':future', type: 'rule' },

      // Resource state pseudo-classes
      { selector: ':playing', type: 'rule' },
      { selector: ':paused', type: 'rule' },

      // The input pseudo-classes
      { selector: ':enabled', type: 'rule' },
      { selector: ':disabled', type: 'rule' },
      { selector: ':read-only', type: 'rule' },
      { selector: ':read-write', type: 'rule' },
      { selector: ':placeholder-shown', type: 'rule' },
      { selector: ':default', type: 'rule' },
      { selector: ':checked', type: 'rule' },
      { selector: ':indeterminate', type: 'rule' },
      { selector: ':blank', type: 'rule' },
      { selector: ':valid', type: 'rule' },
      { selector: ':invalid', type: 'rule' },
      { selector: ':in-range', type: 'rule' },
      { selector: ':out-of-range', type: 'rule' },
      { selector: ':required', type: 'rule' },
      { selector: ':optional', type: 'rule' },
      { selector: ':user-invalid', type: 'rule' },

      // Tree-structural pseudo-classes
      { selector: ':root', type: 'rule' },
      { selector: ':empty', type: 'rule' },
      { selector: ':nth-child', type: 'rule' },
      { selector: ':nth-last-child', type: 'rule' },
      { selector: ':first-child', type: 'rule' },
      { selector: ':last-child', type: 'rule' },
      { selector: ':only-child', type: 'rule' },
      { selector: ':nth-of-type', type: 'rule' },
      { selector: ':nth-last-of-type', type: 'rule' },
      { selector: ':first-of-type', type: 'rule' },
      { selector: ':last-of-type', type: 'rule' },
      { selector: ':only-of-type', type: 'rule' },

      // Other pseudo-classes
      { selector: ':any', type: 'rule' },
      { selector: ':defined', type: 'rule' },
      { selector: ':first', type: 'rule' },
      { selector: ':fullscreen', type: 'rule' },
      { selector: ':has', type: 'rule' },
      { selector: ':host', type: 'rule' },
      { selector: ':host-context', type: 'rule' },
      { selector: ':is', type: 'rule' },
      { selector: ':left', type: 'rule' },
      { selector: ':matches', type: 'rule' },
      { selector: ':not', type: 'rule' },
      { selector: ':right', type: 'rule' },
      { selector: ':where', type: 'rule' },

      // Pseudo elements
      { selector: '::before', type: 'rule' },
      { selector: '::after', type: 'rule' },

      // Text
      { selector: '::first-letter', type: 'rule' },
      { selector: '::first-line', type: 'rule' },

      // Style
      { selector: '::selection', type: 'rule' },
      { selector: '::marker', type: 'rule' },
      { selector: '::placeholder', type: 'rule' },
      { selector: '::backdrop', type: 'rule' },
      { selector: '::file-selector-button', type: 'rule' },

      // Web video text tracks format
      { selector: '::cue', type: 'rule' },
      { selector: '::cue-region', type: 'rule' },

      // Web components
      { selector: '::part', type: 'rule' },
      { selector: '::slotted', type: 'rule' },

      // Spell checker
      { selector: '::grammar-error', type: 'rule' },
      { selector: '::spelling-error', type: 'rule' },

      // Vendors
      { selector: '::-khtml-', type: 'rule' },
      { selector: '::-moz-', type: 'rule' },
      { selector: '::-ms-', type: 'rule' },
      { selector: '::-o-', type: 'rule' },
      { selector: '::-webkit-', type: 'rule' },

      // Deep
      { selector: '::v-deep', type: 'rule' },

      { selector: '::', type: 'rule' },

      // Selector list
      { selector: ',', type: 'rule' },

      // Class selector
      { selector: /\.a/, type: 'rule' },
      { selector: /\.b/, type: 'rule' },
      { selector: /\.c/, type: 'rule' },
      { selector: /\.d/, type: 'rule' },
      { selector: /\.e/, type: 'rule' },
      { selector: /\.f/, type: 'rule' },
      { selector: /\.g/, type: 'rule' },
      { selector: /\.h/, type: 'rule' },
      { selector: /\.i/, type: 'rule' },
      { selector: /\.j/, type: 'rule' },
      { selector: /\.k/, type: 'rule' },
      { selector: /\.l/, type: 'rule' },
      { selector: /\.m/, type: 'rule' },
      { selector: /\.n/, type: 'rule' },
      { selector: /\.o/, type: 'rule' },
      { selector: /\.p/, type: 'rule' },
      { selector: /\.q/, type: 'rule' },
      { selector: /\.r/, type: 'rule' },
      { selector: /\.s/, type: 'rule' },
      { selector: /\.t/, type: 'rule' },
      { selector: /\.u/, type: 'rule' },
      { selector: /\.v/, type: 'rule' },
      { selector: /\.w/, type: 'rule' },
      { selector: /\.x/, type: 'rule' },
      { selector: /\.w/, type: 'rule' },
      { selector: /\.z/, type: 'rule' },
      { selector: /\./, type: 'rule' },

      // ID selector
      { selector: /#/, type: 'rule' },

      // Universal selector
      { selector: /\*/, type: 'rule' },

      // Attribute selector
      { selector: /\[accept/, type: 'rule' },
      { selector: /\[accept-charset/, type: 'rule' },
      { selector: /\[accesskey/, type: 'rule' },
      { selector: /\[action/, type: 'rule' },
      { selector: /\[align/, type: 'rule' },
      { selector: /\[alt/, type: 'rule' },
      { selector: /\[async/, type: 'rule' },
      { selector: /\[autocomplete/, type: 'rule' },
      { selector: /\[autofocus/, type: 'rule' },
      { selector: /\[autoplay/, type: 'rule' },
      { selector: /\[bgcolor/, type: 'rule' },
      { selector: /\[border/, type: 'rule' },
      { selector: /\[charset/, type: 'rule' },
      { selector: /\[checked/, type: 'rule' },
      { selector: /\[cite/, type: 'rule' },
      { selector: /\[class/, type: 'rule' },
      { selector: /\[color/, type: 'rule' },
      { selector: /\[cols/, type: 'rule' },
      { selector: /\[colspan/, type: 'rule' },
      { selector: /\[content/, type: 'rule' },
      { selector: /\[contenteditable/, type: 'rule' },
      { selector: /\[controls/, type: 'rule' },
      { selector: /\[coords/, type: 'rule' },
      { selector: /\[data/, type: 'rule' },
      { selector: /\[data-/, type: 'rule' },
      { selector: /\[datetime/, type: 'rule' },
      { selector: /\[default/, type: 'rule' },
      { selector: /\[defer/, type: 'rule' },
      { selector: /\[dir/, type: 'rule' },
      { selector: /\[dirname/, type: 'rule' },
      { selector: /\[disabled/, type: 'rule' },
      { selector: /\[download/, type: 'rule' },
      { selector: /\[draggable/, type: 'rule' },
      { selector: /\[enctype/, type: 'rule' },
      { selector: /\[for/, type: 'rule' },
      { selector: /\[form/, type: 'rule' },
      { selector: /\[formaction/, type: 'rule' },
      { selector: /\[headers/, type: 'rule' },
      { selector: /\[height/, type: 'rule' },
      { selector: /\[hidden/, type: 'rule' },
      { selector: /\[high/, type: 'rule' },
      { selector: /\[href/, type: 'rule' },
      { selector: /\[hreflang/, type: 'rule' },
      { selector: /\[http-equiv/, type: 'rule' },
      { selector: /\[id/, type: 'rule' },
      { selector: /\[ismap/, type: 'rule' },
      { selector: /\[kind/, type: 'rule' },
      { selector: /\[label/, type: 'rule' },
      { selector: /\[lang/, type: 'rule' },
      { selector: /\[list/, type: 'rule' },
      { selector: /\[loop/, type: 'rule' },
      { selector: /\[low/, type: 'rule' },
      { selector: /\[max/, type: 'rule' },
      { selector: /\[maxlength/, type: 'rule' },
      { selector: /\[media/, type: 'rule' },
      { selector: /\[method/, type: 'rule' },
      { selector: /\[min/, type: 'rule' },
      { selector: /\[multiple/, type: 'rule' },
      { selector: /\[muted/, type: 'rule' },
      { selector: /\[name/, type: 'rule' },
      { selector: /\[novalidate/, type: 'rule' },
      { selector: /\[onabort/, type: 'rule' },
      { selector: /\[onafterprint/, type: 'rule' },
      { selector: /\[onbeforeprint/, type: 'rule' },
      { selector: /\[onbeforeunload/, type: 'rule' },
      { selector: /\[onblur/, type: 'rule' },
      { selector: /\[oncanplay/, type: 'rule' },
      { selector: /\[oncanplaythrough/, type: 'rule' },
      { selector: /\[onchange/, type: 'rule' },
      { selector: /\[onclick/, type: 'rule' },
      { selector: /\[oncontextmenu/, type: 'rule' },
      { selector: /\[oncopy/, type: 'rule' },
      { selector: /\[oncuechange/, type: 'rule' },
      { selector: /\[oncut/, type: 'rule' },
      { selector: /\[ondblclick/, type: 'rule' },
      { selector: /\[ondrag/, type: 'rule' },
      { selector: /\[ondragend/, type: 'rule' },
      { selector: /\[ondragenter/, type: 'rule' },
      { selector: /\[ondragleave/, type: 'rule' },
      { selector: /\[ondragover/, type: 'rule' },
      { selector: /\[ondragstart/, type: 'rule' },
      { selector: /\[ondrop/, type: 'rule' },
      { selector: /\[ondurationchange/, type: 'rule' },
      { selector: /\[onemptied/, type: 'rule' },
      { selector: /\[onended/, type: 'rule' },
      { selector: /\[onerror/, type: 'rule' },
      { selector: /\[onfocus/, type: 'rule' },
      { selector: /\[onhashchange/, type: 'rule' },
      { selector: /\[oninput/, type: 'rule' },
      { selector: /\[oninvalid/, type: 'rule' },
      { selector: /\[onkeydown/, type: 'rule' },
      { selector: /\[onkeypress/, type: 'rule' },
      { selector: /\[onkeyup/, type: 'rule' },
      { selector: /\[onload/, type: 'rule' },
      { selector: /\[onloadeddata/, type: 'rule' },
      { selector: /\[onloadedmetadata/, type: 'rule' },
      { selector: /\[onloadstart/, type: 'rule' },
      { selector: /\[onmousedown/, type: 'rule' },
      { selector: /\[onmousemove/, type: 'rule' },
      { selector: /\[onmouseout/, type: 'rule' },
      { selector: /\[onmouseover/, type: 'rule' },
      { selector: /\[onmouseup/, type: 'rule' },
      { selector: /\[onmousewheel/, type: 'rule' },
      { selector: /\[onoffline/, type: 'rule' },
      { selector: /\[ononline/, type: 'rule' },
      { selector: /\[onpagehide/, type: 'rule' },
      { selector: /\[onpageshow/, type: 'rule' },
      { selector: /\[onpaste/, type: 'rule' },
      { selector: /\[onpause/, type: 'rule' },
      { selector: /\[onplay/, type: 'rule' },
      { selector: /\[onplaying/, type: 'rule' },
      { selector: /\[onpopstate/, type: 'rule' },
      { selector: /\[onprogress/, type: 'rule' },
      { selector: /\[onratechange/, type: 'rule' },
      { selector: /\[onreset/, type: 'rule' },
      { selector: /\[onresize/, type: 'rule' },
      { selector: /\[onscroll/, type: 'rule' },
      { selector: /\[onsearch/, type: 'rule' },
      { selector: /\[onseeked/, type: 'rule' },
      { selector: /\[onseeking/, type: 'rule' },
      { selector: /\[onselect/, type: 'rule' },
      { selector: /\[onstalled/, type: 'rule' },
      { selector: /\[onstorage/, type: 'rule' },
      { selector: /\[onsubmit/, type: 'rule' },
      { selector: /\[onsuspend/, type: 'rule' },
      { selector: /\[ontimeupdate/, type: 'rule' },
      { selector: /\[ontoggle/, type: 'rule' },
      { selector: /\[onunload/, type: 'rule' },
      { selector: /\[onvolumechange/, type: 'rule' },
      { selector: /\[onwaiting/, type: 'rule' },
      { selector: /\[onwheel/, type: 'rule' },
      { selector: /\[open/, type: 'rule' },
      { selector: /\[optimum/, type: 'rule' },
      { selector: /\[pattern/, type: 'rule' },
      { selector: /\[placeholder/, type: 'rule' },
      { selector: /\[poster/, type: 'rule' },
      { selector: /\[preload/, type: 'rule' },
      { selector: /\[readonly/, type: 'rule' },
      { selector: /\[rel/, type: 'rule' },
      { selector: /\[required/, type: 'rule' },
      { selector: /\[reversed/, type: 'rule' },
      { selector: /\[rows/, type: 'rule' },
      { selector: /\[rowspan/, type: 'rule' },
      { selector: /\[sandbox/, type: 'rule' },
      { selector: /\[scope/, type: 'rule' },
      { selector: /\[selected/, type: 'rule' },
      { selector: /\[shape/, type: 'rule' },
      { selector: /\[size/, type: 'rule' },
      { selector: /\[sizes/, type: 'rule' },
      { selector: /\[span/, type: 'rule' },
      { selector: /\[spellcheck/, type: 'rule' },
      { selector: /\[src/, type: 'rule' },
      { selector: /\[srcdoc/, type: 'rule' },
      { selector: /\[srclang/, type: 'rule' },
      { selector: /\[srcset/, type: 'rule' },
      { selector: /\[start/, type: 'rule' },
      { selector: /\[step/, type: 'rule' },
      { selector: /\[style/, type: 'rule' },
      { selector: /\[tabindex/, type: 'rule' },
      { selector: /\[target/, type: 'rule' },
      { selector: /\[title/, type: 'rule' },
      { selector: /\[translate/, type: 'rule' },
      { selector: /\[type/, type: 'rule' },
      { selector: /\[usemap/, type: 'rule' },
      { selector: /\[value/, type: 'rule' },
      { selector: /\[width/, type: 'rule' },
      { selector: /\[/, type: 'rule' },

      // Adjacent sibling combinator
      { selector: /\+/, type: 'rule' },

      // General sibling combinator
      { selector: /~/, type: 'rule' },

      // Child combinator
      { selector: />/, type: 'rule' },

      // Column combinator
      { selector: /\|\|/, type: 'rule' },

      // Other combinators
      'rules',

      // BEM class
      { selector: /--a/, type: 'rule' },
      { selector: /--b/, type: 'rule' },
      { selector: /--c/, type: 'rule' },
      { selector: /--d/, type: 'rule' },
      { selector: /--e/, type: 'rule' },
      { selector: /--f/, type: 'rule' },
      { selector: /--g/, type: 'rule' },
      { selector: /--h/, type: 'rule' },
      { selector: /--i/, type: 'rule' },
      { selector: /--j/, type: 'rule' },
      { selector: /--k/, type: 'rule' },
      { selector: /--l/, type: 'rule' },
      { selector: /--m/, type: 'rule' },
      { selector: /--n/, type: 'rule' },
      { selector: /--o/, type: 'rule' },
      { selector: /--p/, type: 'rule' },
      { selector: /--q/, type: 'rule' },
      { selector: /--r/, type: 'rule' },
      { selector: /--s/, type: 'rule' },
      { selector: /--t/, type: 'rule' },
      { selector: /--u/, type: 'rule' },
      { selector: /--v/, type: 'rule' },
      { selector: /--w/, type: 'rule' },
      { selector: /--x/, type: 'rule' },
      { selector: /--w/, type: 'rule' },
      { selector: /--z/, type: 'rule' },
      { selector: /--/, type: 'rule' },

      { selector: /__a/, type: 'rule' },
      { selector: /__b/, type: 'rule' },
      { selector: /__c/, type: 'rule' },
      { selector: /__d/, type: 'rule' },
      { selector: /__e/, type: 'rule' },
      { selector: /__f/, type: 'rule' },
      { selector: /__g/, type: 'rule' },
      { selector: /__h/, type: 'rule' },
      { selector: /__i/, type: 'rule' },
      { selector: /__j/, type: 'rule' },
      { selector: /__k/, type: 'rule' },
      { selector: /__l/, type: 'rule' },
      { selector: /__m/, type: 'rule' },
      { selector: /__n/, type: 'rule' },
      { selector: /__o/, type: 'rule' },
      { selector: /__p/, type: 'rule' },
      { selector: /__q/, type: 'rule' },
      { selector: /__r/, type: 'rule' },
      { selector: /__s/, type: 'rule' },
      { selector: /__t/, type: 'rule' },
      { selector: /__u/, type: 'rule' },
      { selector: /__v/, type: 'rule' },
      { selector: /__w/, type: 'rule' },
      { selector: /__x/, type: 'rule' },
      { selector: /__w/, type: 'rule' },
      { selector: /__z/, type: 'rule' },
      { selector: /__/, type: 'rule' },
    ],

    'order/properties-alphabetical-order': true,
  },
};