# Устанавливает зависимости субмодулей

GREEN='\e[32m'
DEFAULT='\e[39m'

echo "${GREEN}Установка зависимостей субмодулей...${DEFAULT}"

cd config-commitlint
npm i --no-optional

cd ../config-eslint
npm i --no-optional

cd ../config-markdownlint
npm i --no-optional

cd ../config-prettier
npm i --no-optional

cd ../config-stylelint
npm i --no-optional
