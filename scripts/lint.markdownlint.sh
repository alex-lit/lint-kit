# Запускает линтер .md файлов

YELLOW='\e[33m'
DEFAULT='\e[39m'

echo "Запуск линтера: ${YELLOW}markdownlint${DEFAULT}"

markdownlint *.md --config .markdownlintrc.js --fix
