# Обновляет зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Обновляю зависимости ${CURRENT_PACKAGE_NAME}...${WHITE}"

npm upgrade \
  --legacy-peer-deps \
  --loglevel verbose

SAY_GOODBYE
