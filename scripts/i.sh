# Устанавливает зависимости

YELLOW='\e[33m'
DEFAULT='\e[39m'

clear

echo -e "${YELLOW}Устанавливаю зависимости...${DEFAULT}"

npm i --legacy-peer-deps
