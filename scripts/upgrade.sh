npm run up && npm run semver patch && npm pu && git push

# Update dependencies (latest, newest, greatest, minor, patch)

VERSION=${1:-minor}
YELLOW='\e[33m'
DEFAULT='\e[39m'

echo "Upgrading dependencies to version: ${YELLOW}${VERSION}${DEFAULT}"

npm run up
npm run semver ${VERSION}

echo "Pushing updates to: ${YELLOW}npm, git${DEFAULT}"

npm pu
git push

echo "Done!"
