# Запускает линтеры

OPTION=${1}

DEFAULT='\e[39m'
GREEN='\e[92m'
YELLOW='\e[33m'

clear

echo -e "${YELLOW}Запускаю линтеры: ${GREEN}eslint, htmllint, markdownlint, npmlint, stylelint...${DEFAULT}"

npm run lint:eslint --if-present ${OPTION}
npm run lint:htmllint --if-present
npm run lint:markdownlint --if-present ${OPTION}
npm run lint:npmlint --if-present
npm run lint:stylelint --if-present ${OPTION}
