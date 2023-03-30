# Launch NPM linter

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

PACKAGE_FILES='. ./packages'
LOCK_FILE='package-lock.json'

echo -e "${COLOR_NAME}npmlint ${COLOR_ARROW}-> ${COLOR_FILES}${PACKAGE_FILES}${COLOR_DEFAULT}"

npmPkgJsonLint ${PACKAGE_FILES}

echo -e "${COLOR_NAME}lockfilelint ${COLOR_ARROW}-> ${COLOR_FILES}${LOCK_FILE}${COLOR_DEFAULT}"

lockfile-lint --type npm --path ${LOCK_FILE}
