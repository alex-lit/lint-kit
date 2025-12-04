# Запускает линтеры

source "$(dirname $0)"/../bash.config.sh

OPTION=${1}

echo -e "${YELLOW}Запускаю линтеры: ${GREEN}eslint, htmllint, markdownlint, npmlint, stylelint...${WHITE}"

npm run lint:eslint ${OPTION}
npm run lint:htmllint
npm run lint:markdownlint ${OPTION}
npm run lint:npmlint
npm run lint:stylelint ${OPTION}

SAY_GOODBYE
