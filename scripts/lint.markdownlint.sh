# Launch linter for .md files

source "$(dirname $0)"/../bash.config.sh

OPTION=${1}

FILES='**/*.md'

echo -e "${YELLOW}markdownlint ${GREY}-> ${CYAN}${FILES}${WHITE}"

if [ $OPTION ] && [ $OPTION = 'fix' ]; then
  echo -e "${GREY}autofix:${WHITE} true"
  prettier --write ${FILES}
fi

markdownlint ${FILES} --${OPTION}
