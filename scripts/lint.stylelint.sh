# Launch styles linter

source "$(dirname $0)"/.config.sh

OPTION=${1}

FILES='**/*.{css,pcss,postcss,sass,scss,vue}'

echo -e "${YELLOW}stylelint ${GREY}-> ${CYAN}${FILES}${WHITE}"

if [ $OPTION ] && [ $OPTION = 'fix' ]; then
  echo -e "${GREY}autofix:${WHITE} true"
fi

stylelint ${FILES} --ignore-path .gitignore --allow-empty-input --${OPTION}
