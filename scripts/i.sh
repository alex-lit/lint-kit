# Устанавливает зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Устанавливаю зависимости...${WHITE}"

find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
rm -rf package-lock.json
# npm cache clean --force
npm install \
  --loglevel verbose
npm dedupe

SAY_GOODBYE
