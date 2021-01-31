# Запускает общий линтер

COLOR_TITLE='\e[92m'
COLOR_LINTERS='\e[33m'
COLOR_DEFAULT='\e[39m'

echo "${COLOR_TITLE}linters: ${COLOR_LINTERS}eslint, stylelint, markdownlint${COLOR_DEFAULT}"

npm run lint:eslint
npm run lint:stylelint
npm run lint:markdownlint
