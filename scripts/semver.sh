# Обновляет версию пакета

source "$(dirname $0)"/../bash.config.sh

VERSION=${1:-patch} # <major | minor | patch | premajor | preminor | prepatch | prerelease>

echo -e "${YELLOW}Поднимаю ${GREEN}${VERSION}${YELLOW} версию пакета ${GREEN}${CURRENT_PACKAGE_NAME}${YELLOW}...${WHITE}"

changelogen \
  --${VERSION} \
  --no-commit \
  --release

if [ $CURRENT_PACKAGE_NAME != $MAIN_PACKAGE ]; then
  rm CHANGELOG.md
fi

git add .
git commit -m "chore(${CURRENT_PACKAGE_NAME}): bump version"

SAY_GOODBYE
