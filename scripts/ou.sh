# Проверяет наличие устаревших пакетов

source "$(dirname $0)"/../bash.config.sh

echo -e "${YELLOW}Проверяю наличие устаревших пакетов...${WHITE}"

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
  pnpm outdated
else
  echo -e "${GREY}Режим проверки: ${WHITE}глобальный${WHITE}"
  pnpm outdated \
    --recursive
fi

SAY_GOODBYE
