# Обновляет зависимости до указанной версии (latest, newest, greatest, minor, patch)

VERSION=${1:-minor}
GREEN='\e[32m'
YELLOW='\e[33m'
DEFAULT='\e[39m'

clear

echo -e "${YELLOW}Обновляю зависимости до версии ${VERSION}${DEFAULT}..."

# root
echo -e "${GREEN}root...${DEFAULT}"
npx npm-check-updates --upgrade --target ${VERSION}
npm i --legacy-peer-deps

# packages
cd packages
for PACKAGE in */; do
  echo -e "${GREEN}package:${PACKAGE%*/}...${DEFAULT}"
  cd ${PACKAGE}
  npx npm-check-updates --upgrade --target ${VERSION}
  npm i --legacy-peer-deps
  cd ../
done
cd ../
