# Launch generic linter

OPTION=${1}

BLUE='\e[92m'
DEFAULT='\e[39m'
YELLOW='\e[33m'

echo -e "${BLUE}linters: ${YELLOW}eslint, htmllint, markdownlint, npmlint, stylelint${DEFAULT}"

npm run lint:eslint --if-present ${OPTION}
npm run lint:htmllint --if-present
npm run lint:markdownlint --if-present ${OPTION}
npm run lint:npmlint --if-present
npm run lint:stylelint --if-present ${OPTION}
