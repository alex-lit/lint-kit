# Релиз пакета (коммит в npm и git)

VERSION=${1:-patch} # patch | minor | major

DEFAULT='\e[39m'
GREEN='\e[32m'
YELLOW='\e[33m'

clear

npm run semver ${VERSION}

CURRENT_PACKAGE_NAME=$(node -p "require('./package.json').name")
CURRENT_PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo -e "${YELLOW}Релиз пакета ${GREEN}${CURRENT_PACKAGE_NAME}@${CURRENT_PACKAGE_VERSION}${YELLOW}...${DEFAULT}"

echo -e "${YELLOW}Коммит в ${GREEN}git${YELLOW}...${DEFAULT}"
git push

echo -e "${YELLOW}Публикация в ${GREEN}npm${YELLOW}...${DEFAULT}"
npm pu
