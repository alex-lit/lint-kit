# Update dependencies (latest, newest, greatest, minor, patch)

VERSION=${1:-minor}
YELLOW='\e[33m'
DEFAULT='\e[39m'

echo "Upgrading dependencies to version: ${YELLOW}${VERSION}${DEFAULT}"

npx npm-check-updates --upgrade --target ${VERSION}
npm i --no-optional
npm audit fix
