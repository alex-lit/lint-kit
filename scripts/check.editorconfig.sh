# Проверяет .editorconfig

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Проверяю .editorconfig...${WHITE}"

npx editorconfig-checker

SAY_GOODBYE
