# Launch scripts linter

OPTION=${1}

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

FILES='.js,.jx,.ts,.tsx,.vue'

echo "${COLOR_NAME}eslint ${COLOR_ARROW}-> ${COLOR_FILES}${FILES}${COLOR_DEFAULT}"

if [ $OPTION = 'fix' ]; then
  echo "autofix: true"
fi

eslint --ext ${FILES} --ignore-path .gitignore ./ --${OPTION}
