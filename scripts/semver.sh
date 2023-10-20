# Обновляет версию пакета

VERSION=${1:-patch} # <major | minor | patch>

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

clear

echo -e "${YELLOW}Обновляю ${GREEN}${VERSION}${YELLOW} версию пакета...${DEFAULT}"

npx standard-version ${VERSION}

git add --all
git commit -m 'chore: update version'
