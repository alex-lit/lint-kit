# Обновляет версию пакета

VERSION=${1:-patch} # <major | minor | patch | premajor | preminor | prepatch | prerelease>

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

CURRENT_DIR=${PWD##*/}

clear

echo -e "${YELLOW}Поднимаю ${GREEN}${VERSION}${YELLOW} версию пакета ${GREEN}${CURRENT_DIR}${YELLOW}...${DEFAULT}"

changelogen --bump --${VERSION}

if [ $CURRENT_DIR != 'lint-kit' ]; then
  rm CHANGELOG.md
fi

git add .
git commit -m "chore(${CURRENT_DIR}): bump version"
