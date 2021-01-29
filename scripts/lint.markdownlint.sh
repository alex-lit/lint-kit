# Запускает линтер .md файлов

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

FILES='**/*.md'

echo "${COLOR_NAME}markdownlint + prettier ${COLOR_ARROW}-> ${COLOR_FILES}${FILES}${COLOR_DEFAULT}"

prettier --write ${FILES}
markdownlint ${FILES} --config .markdownlintrc.js --fix
