# Обновляет зависимости (latest, newest, greatest, minor, patch)

VERSION=${1:-minor}
YELLOW='\e[33m'
DEFAULT='\e[39m'

echo "Обновление зависимостей до версии: ${YELLOW}${VERSION}${DEFAULT}"

npx npm-check-updates --upgrade --target ${VERSION}
npm i --no-optional
# npm audit fix
