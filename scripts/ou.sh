# Проверяет наличие устаревших пакетов

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Проверяю наличие устаревших пакетов...${WHITE}"

pnpm outdated \
  --recursive

SAY_GOODBYE
