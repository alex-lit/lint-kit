# Launch scripts linter

source "$(dirname $0)"/.config.sh

OPTION=${1}

FILES='.cjs,.mjs,.js,.jsx,.ts,.tsx,.vue'

echo -e "${YELLOW}eslint ${GREY}-> ${CYAN}${FILES}${WHITE}"

if [ $OPTION ] && [ $OPTION = 'fix' ]; then
  echo -e "${GREY}autofix:${WHITE} true"
fi

eslint --ext ${FILES} --ignore-path .gitignore --ignore-path .eslintignore --ignore-path .prettierignore ./ --${OPTION}
