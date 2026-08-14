# Релиз пакета (коммит в npm и git)

set -euo pipefail

source "$(dirname $0)"/../bash.config.sh

VERSION=${1:-patch} # patch | minor | major

npm run semver -- --${VERSION}

CURRENT_PACKAGE_NAME=$(node -p "require('./package.json').name")
CURRENT_PACKAGE_VERSION=$(node -p "require('./package.json').version")

echo -e "${YELLOW}Релиз пакета ${GREEN}${CURRENT_PACKAGE_NAME}@${CURRENT_PACKAGE_VERSION}${YELLOW}...${WHITE}"

echo -e "${YELLOW}Коммит в ${GREEN}git${YELLOW}...${WHITE}"
# --follow-tags: пушим вместе с тегом, созданным в semver.sh
git push --follow-tags

echo -e "${YELLOW}Публикация в ${GREEN}registry.npmjs.org${YELLOW}...${WHITE}"
npm publish --no-git-checks

SAY_GOODBYE
