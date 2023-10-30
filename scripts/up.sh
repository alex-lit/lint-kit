# Обновляет зависимости до указанной версии (latest, newest, greatest, minor, patch)

VERSION=${1:-minor}

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

CURRENT_DIR=${PWD##*/}

clear

echo -e "${YELLOW}Обновляю зависимости пакета ${GREEN}${CURRENT_DIR}${YELLOW} до версии ${GREEN}${VERSION}${YELLOW}...${DEFAULT}"

# root
npx npm-check-updates --upgrade --target ${VERSION}
npm i --legacy-peer-deps

# packages
if [ -d "packages" ]; then
  cd packages

  for PACKAGE in */; do
    echo -e "${YELLOW}package: ${GREEN}${PACKAGE%*/}...${DEFAULT}"
    cd ${PACKAGE}
    npx npm-check-updates --upgrade --target ${VERSION}
    npm i --legacy-peer-deps
    cd ../
  done
fi
