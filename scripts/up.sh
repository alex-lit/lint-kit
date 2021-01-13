# Обновляет зависимости (latest, newest, greatest, minor, patch)

VERSION=${1:-minor}

echo 'Обновление зависимостей до версии:' ${VERSION}

npx npm-check-updates --upgrade --target ${VERSION}
npm i
npm audit fix
