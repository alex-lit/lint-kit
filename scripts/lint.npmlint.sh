# Launch NPM linter

source "$(dirname $0)"/.config.sh

PACKAGE_FILES='. ./packages'
LOCK_FILE='package-lock.json'

echo -e "${YELLOW}npmlint ${GREY}-> ${CYAN}${PACKAGE_FILES}${WHITE}"

npmPkgJsonLint ${PACKAGE_FILES}

echo -e "${YELLOW}lockfilelint ${GREY}-> ${CYAN}${LOCK_FILE}${WHITE}"

lockfile-lint --type npm --path ${LOCK_FILE}
