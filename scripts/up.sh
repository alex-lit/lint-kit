# Обновляет зависимости до указанной версии (latest, newest, greatest, minor, patch)

VERSION=${1:-minor}

BLUE='\e[94m'
DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

CURRENT_DIR=${PWD##*/}

SKIPED_PACKAGES='eslint-plugin-vitest,eslint-plugin-array-func' # <string | ''>

echo -e "${YELLOW}Обновляю зависимости пакета ${GREEN}${CURRENT_DIR}${YELLOW} до версии ${GREEN}${VERSION}${YELLOW}...${DEFAULT}"

if [ ${SKIPED_PACKAGES} != '' ]; then
  echo -e "${BLUE}--reject ${DEFAULT}${SKIPED_PACKAGES}"
fi

# root
npx npm-check-updates --upgrade --reject ${SKIPED_PACKAGES} --target ${VERSION}
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
