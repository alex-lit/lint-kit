# Устанавливает зависимости

source "$(dirname $0)"/.config.sh

echo -e "${YELLOW}Устанавливаю зависимости...${WHITE}"

npm i --legacy-peer-deps
