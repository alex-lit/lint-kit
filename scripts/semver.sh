# Обновляет версию пакета
# Использование: ./semver.sh --patch|minor|major|premajor|preminor|prepatch|prerelease

source "$(dirname $0)"/../bash.config.sh

VERSION=patch
while [[ $# -gt 0 ]]; do
  case $1 in
    --patch)
      VERSION=patch
      shift
      ;;
    --minor)
      VERSION=minor
      shift
      ;;
    --major)
      VERSION=major
      shift
      ;;
    --premajor)
      VERSION=premajor
      shift
      ;;
    --preminor)
      VERSION=preminor
      shift
      ;;
    --prepatch)
      VERSION=prepatch
      shift
      ;;
    --prerelease)
      VERSION=prerelease
      shift
      ;;
    *)
      echo "Usage: $0 --patch|minor|major|premajor|preminor|prepatch|prerelease"
      exit 1
      ;;
  esac
done

echo -e "${YELLOW}Поднимаю ${GREEN}${VERSION}${YELLOW} версию пакета ${GREEN}${CURRENT_PACKAGE_NAME}${YELLOW}...${WHITE}"

changelogen \
  --${VERSION} \
  --no-commit \
  --release

if [ $CURRENT_PACKAGE_NAME != $MAIN_PACKAGE ]; then
  rm CHANGELOG.md
fi

git add .
git commit -m "chore(${CURRENT_PACKAGE_NAME}): bump version"

SAY_GOODBYE
