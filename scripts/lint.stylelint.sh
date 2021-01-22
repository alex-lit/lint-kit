# Запускает линтер стилей

YELLOW='\e[33m'
DEFAULT='\e[39m'

echo "Запуск линтера: ${YELLOW}stylelint${DEFAULT}"

stylelint '**/*.{css,pcss,postcss,sass,scss,vue}' --ignore-path .gitignore --fix
