# Запускает линтеры

source "$(dirname $0)"/../bash.config.sh

OPTION=${1}

echo -e "${YELLOW}Запускаю линтеры: ${GREEN}eslint, htmllint, markdownlint, npmlint, stylelint...${WHITE}"

pnpm run lint:eslint ${OPTION}
pnpm run lint:htmllint
pnpm run lint:markdownlint ${OPTION}
pnpm run lint:npmlint
pnpm run lint:stylelint ${OPTION}
