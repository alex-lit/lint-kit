# Launch styles linter

OPTION=${1}

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

FILES='**/*.{css,pcss,postcss,sass,scss,vue}'

echo -e "${COLOR_NAME}stylelint ${COLOR_ARROW}-> ${COLOR_FILES}${FILES}${COLOR_DEFAULT}"

if [ $OPTION ] && [ $OPTION = 'fix' ]; then
  echo -e "${COLOR_ARROW}autofix:${COLOR_DEFAULT} true"
fi

stylelint ${FILES} --ignore-path .gitignore --allow-empty-input --${OPTION}
