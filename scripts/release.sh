# Релиз пакета (коммит в npm и git)

VERSION=${1:-patch} # patch | minor | major

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

CURRENT_DIR=${PWD##*/}

clear

echo -e "${YELLOW}Релиз пакета ${GREEN}${CURRENT_DIR}${YELLOW}@${GREEN}${VERSION}${YELLOW}...${DEFAULT}"

npm run semver ${VERSION}

npm pu

git push
