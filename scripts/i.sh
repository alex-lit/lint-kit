# Устанавливает зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Устанавливаю зависимости...${WHITE}"

npm install \
  --legacy-peer-deps \
  --loglevel verbose

SAY_GOODBYE
