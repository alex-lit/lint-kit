# Запускает линтер скриптов

YELLOW='\e[33m'
DEFAULT='\e[39m'

echo "Запуск линтера: ${YELLOW}eslint${DEFAULT}"

eslint --ext .js,.ts,.vue,.yaml,.yml ./ --fix
