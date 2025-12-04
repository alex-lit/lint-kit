# Устанавливает зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Устанавливаю зависимости...${WHITE}"

npm install --loglevel verbose --legacy-peer-deps

SAY_GOODBYE
