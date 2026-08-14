# Обновляет версию пакета

set -euo pipefail

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

# Базовый тег — последний релиз ТОЛЬКО этого пакета (в монорепо git-теги глобальные)
LAST_PACKAGE_TAG=$(git describe --tags --abbrev=0 --match "${CURRENT_PACKAGE_NAME}@*" 2> /dev/null || true)

# --bump (а не --release): поднимает версию и пишет CHANGELOG.md, но НЕ делает
# коммит/тег/GitHub release — их делаем сами ниже, ПОСЛЕ коммита бампа
CHANGELOGEN_ARGS=(--${VERSION} --bump)
if [ -n "${LAST_PACKAGE_TAG}" ]; then
  CHANGELOGEN_ARGS+=(--from "${LAST_PACKAGE_TAG}")
fi

changelogen "${CHANGELOGEN_ARGS[@]}"

NEW_PACKAGE_VERSION=$(node -p "require('./package.json').version")

# CHANGELOG.md оставляем у каждого пакета: он теперь генерируется корректно
# (--from берётся по тегам именно этого пакета)

git add .
git commit -m "chore(${CURRENT_PACKAGE_NAME}): bump version"

# Тег создаём ПОСЛЕ коммита бампа, чтобы он указывал на правильный коммит
git tag -a "${CURRENT_PACKAGE_NAME}@${NEW_PACKAGE_VERSION}" -m "${CURRENT_PACKAGE_NAME}@${NEW_PACKAGE_VERSION}"

SAY_GOODBYE
