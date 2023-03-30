# Launch linter for .md files

OPTION=${1}

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

FILES='**/*.md'

echo -e "${COLOR_NAME}markdownlint ${COLOR_ARROW}-> ${COLOR_FILES}${FILES}${COLOR_DEFAULT}"

if [ $OPTION ] && [ $OPTION = 'fix' ]; then
  echo -e "${COLOR_ARROW}autofix:${COLOR_DEFAULT} true"
  prettier --write ${FILES}
fi

markdownlint ${FILES} --config .markdownlintrc.js --${OPTION}
