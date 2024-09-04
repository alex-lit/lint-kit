# Launch NPM linter

source "$(dirname $0)"/../bash.config.sh

PACKAGE_FILES='. ./packages'
LOCK_FILE='package-lock.json'

echo -e "${YELLOW}npmlint ${GREY}-> ${CYAN}${PACKAGE_FILES}${WHITE}"

npmPkgJsonLint ${PACKAGE_FILES}

echo -e "${YELLOW}lockfilelint ${GREY}-> ${CYAN}${LOCK_FILE}${WHITE}"

lockfile-lint --type pnpm --path ${LOCK_FILE}
