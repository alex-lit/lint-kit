# Устанавливает зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Устанавливаю зависимости...${WHITE}"

pnpm install

SAY_GOODBYE
