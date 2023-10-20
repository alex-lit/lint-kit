# Обновляет версию пакета

VERSION=${1:-patch} # <major | minor | patch>

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

CURRENT_DIR=${PWD##*/}

clear

echo -e "${YELLOW}Подымаю ${GREEN}${VERSION}${YELLOW} версию пакета ${GREEN}${CURRENT_DIR}${YELLOW}...${DEFAULT}"

npx standard-version ${VERSION}

git add --all
git commit -m 'chore: update version'
