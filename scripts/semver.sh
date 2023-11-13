# Обновляет версию пакета

VERSION=${1:-patch} # <major | minor | patch | premajor | preminor | prepatch | prerelease>

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

MAIN_PACKAGE="@alexlit/lint-kit"
CURRENT_PACKAGE=$(node -p "require('./package.json').name")

clear

echo -e "${YELLOW}Поднимаю ${GREEN}${VERSION}${YELLOW} версию пакета ${GREEN}${CURRENT_PACKAGE}${YELLOW}...${DEFAULT}"

changelogen --release --no-commit --${VERSION}

if [ $CURRENT_PACKAGE != $MAIN_PACKAGE ]; then
  rm CHANGELOG.md
fi

git add .
git commit -m "chore(${CURRENT_PACKAGE}): bump version"
