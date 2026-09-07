# Обновляет зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Обновляю зависимости ${CURRENT_PACKAGE_NAME}...${WHITE}"

npx npm-check-updates@21 \
  --format group \
  --interactive

SAY_GOODBYE
