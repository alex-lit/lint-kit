# Обновляет версию пакета

VERSION=${1:-patch} # <major | minor | patch>

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

clear

echo -e "${YELLOW}Обновляю ${GREEN}${VERSION}${YELLOW} версию пакета...${DEFAULT}"

git add --all
git commit -m 'chore: preparing for version update'

npm version ${VERSION}

conventional-changelog -p angular -i CHANGELOG.md -s ${VERSION}
git add CHANGELOG.md
