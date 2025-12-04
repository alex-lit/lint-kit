# Проверяет наличие устаревших пакетов

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Проверяю наличие устаревших пакетов...${WHITE}"

npm outdated

SAY_GOODBYE
