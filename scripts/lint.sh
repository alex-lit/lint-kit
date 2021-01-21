# Запускает общий линтер

GREEN='\e[32m'
DEFAULT='\e[39m'

echo "${GREEN}Запуск линтеров${DEFAULT}"

npm run lint:eslint
npm run lint:stylelint
npm run lint:markdownlint
