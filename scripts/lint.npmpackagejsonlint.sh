# Launch NPM Package JSON linter

COLOR_NAME='\e[33m'
COLOR_ARROW='\e[90m'
COLOR_FILES='\e[96m'
COLOR_DEFAULT='\e[39m'

FILES='. ./packages'

echo "${COLOR_NAME}npmpackagejsonlint ${COLOR_ARROW}-> ${COLOR_FILES}${FILES}${COLOR_DEFAULT}"

npmPkgJsonLint ${FILES}
