# Обновляет версию пакета

VERSION=${1:-patch} # <major | minor | patch>

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

clear

echo -e "${YELLOW}Обновляю ${GREEN}${VERSION}${YELLOW} версию пакета...${DEFAULT}"

npm version ${VERSION}

conventional-changelog -p angular -i CHANGELOG.md -s --tag-prefix ""

# npx standard-version ${VERSION}

git add --all
git commit -m 'chore: update version'
