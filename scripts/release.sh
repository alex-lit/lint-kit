# Релиз пакета (коммит в npm и git)

source "$(dirname $0)"/../bash.config.sh

VERSION=${1:-patch} # patch | minor | major

pnpm run semver ${VERSION}

CURRENT_PACKAGE_NAME=$(node -p "require('./package.json').name")
CURRENT_PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo -e "${YELLOW}Релиз пакета ${GREEN}${CURRENT_PACKAGE_NAME}@${CURRENT_PACKAGE_VERSION}${YELLOW}...${WHITE}"

echo -e "${YELLOW}Коммит в ${GREEN}git${YELLOW}...${WHITE}"
git push

echo -e "${YELLOW}Публикация в ${GREEN}registry.npmjs.org${YELLOW}...${WHITE}"
pnpm publish --no-git-checks
