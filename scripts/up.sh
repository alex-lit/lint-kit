# Обновляет зависимости

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Обновляю зависимости ${CURRENT_PACKAGE_NAME}...${WHITE}"

# Инициализация переменных
local_mode=false

# Обработка флагов
while [[ "$#" -gt 0 ]]; do
  case $1 in
    --local | -l) local_mode=true ;;
    *)
      echo "Неизвестный флаг: $1"
      exit 1
      ;;
  esac
  shift
done

# Вывод результатов
if $local_mode; then
  echo -e "${GREY}Режим проверки: ${WHITE}локальный${WHITE}"
  npx pnpm update \
    --interactive \
    --recursive \
    --latest
else
  echo -e "${GREY}Режим проверки: ${WHITE}глобальный${WHITE}"
  npx pnpm update \
    --interactive \
    --latest \
    --recursive
fi

SAY_GOODBYE
