# Запускает линтер скриптов

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

FILES='.js,.ts,.vue,.yaml,.yml'

echo "${COLOR_NAME}eslint ${COLOR_ARROW}-> ${COLOR_FILES}${FILES}${COLOR_DEFAULT}"

eslint --ext ${FILES} --ignore-path .gitignore ./ --fix
