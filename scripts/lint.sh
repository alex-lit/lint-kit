# Запускает линтеры

source "$(dirname $0)"/../bash.config.sh

OPTION=${1}

echo -e "${YELLOW}Запускаю линтеры: ${GREEN}eslint, htmllint, markdownlint, npmlint, stylelint...${WHITE}"

npx pnpm run lint:eslint ${OPTION}
npx pnpm run lint:htmllint
npx pnpm run lint:markdownlint ${OPTION}
npx pnpm run lint:npmlint
npx pnpm run lint:stylelint ${OPTION}

SAY_GOODBYE
