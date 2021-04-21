# Launch generic linter

OPTION=${1}

COLOR_TITLE='\e[92m'
COLOR_LINTERS='\e[33m'
COLOR_DEFAULT='\e[39m'

echo "${COLOR_TITLE}linters: ${COLOR_LINTERS}eslint, htmllint, markdownlint, npmlint, stylelint, ${COLOR_DEFAULT}"

npm run lint:eslint ${OPTION}
npm run lint:htmllint
npm run lint:markdownlint ${OPTION}
npm run lint:npmlint
npm run lint:stylelint ${OPTION}
