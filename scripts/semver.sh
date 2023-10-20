# Обновляет версию пакета

VERSION=${1:-patch} # <major | minor | patch>
YELLOW='\e[33m'
DEFAULT='\e[39m'

clear

echo -e "${YELLOW}Обновляю версию пакета до ${VERSION}${DEFAULT}..."

git add --all
git commit -m 'chore: preparing for version update'

npm version ${VERSION}

conventional-changelog -p angular -i CHANGELOG.md -s ${VERSION}
git add CHANGELOG.md
