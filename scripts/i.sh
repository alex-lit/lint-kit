# Устанавливает зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Устанавливаю зависимости...${WHITE}"

rm -rf node_modules **/node_modules package-lock.json
npm cache clean --force
npm install \
  --legacy-peer-deps \
  --loglevel verbose

SAY_GOODBYE
