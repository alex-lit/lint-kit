# Launch scripts linter

OPTION=${1}

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

FILES='.js,.jsx,.ts,.tsx,.vue'

echo "${COLOR_NAME}eslint ${COLOR_ARROW}-> ${COLOR_FILES}${FILES}${COLOR_DEFAULT}"

if [ $OPTION ] && [ $OPTION = 'fix' ]; then
  echo "${COLOR_ARROW}autofix:${COLOR_DEFAULT} true"
fi

eslint --ext ${FILES} --ignore-path .gitignore ./ --${OPTION}
