# Подсчет кол-ва строк кода в исходных файлах

YELLOW='\e[33m'
DEFAULT='\e[39m'

clear

echo -e "${YELLOW}Проверяю editorconfig...${DEFAULT}"

npx editorconfig-checker
