# Launch generic linter

OPTION=${1}

COLOR_TITLE='\e[92m'
COLOR_LINTERS='\e[33m'
COLOR_DEFAULT='\e[39m'

echo "${COLOR_TITLE}linters: ${COLOR_LINTERS}eslint, htmllint, markdownlint, npmlint, stylelint, ${COLOR_DEFAULT}"

npm run lint:eslint --if-present ${OPTION}
npm run lint:htmllint --if-present
npm run lint:markdownlint --if-present ${OPTION}
npm run lint:npmlint --if-present
npm run lint:stylelint --if-present ${OPTION}
