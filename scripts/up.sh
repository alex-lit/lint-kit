# Обновляет зависимости

source "$(dirname $0)"/../bash.config.sh

# Обновляет зависимости
update() {
  npx pnpm update \
    --interactive \
    --latest \
    --recursive
}

# Подготавливает зависимости для начала работы

echo -e "${YELLOW}Обновляю зависимости...${WHITE}"

update

echo -e "${GREEN}Готово! "
