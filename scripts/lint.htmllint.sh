# Launch HTML linter

source "$(dirname $0)"/../bash.config.sh

FILES='**/*.html'

echo -e "${YELLOW}htmllint ${GREY}-> ${CYAN}${FILES}${WHITE}"

linthtml ${FILES}
