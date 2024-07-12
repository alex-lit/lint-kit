# Подсчет кол-ва строк кода в исходных файлах

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Проверяю editorconfig...${WHITE}"

npx editorconfig-checker
