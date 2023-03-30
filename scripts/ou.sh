# Check outdated packages

COLOR_NAME='\e[96m'

clear

echo -e "\n${COLOR_NAME}check lint-kit..."
npm ou

cd submodules

echo -e "\n${COLOR_NAME}check commitlint..."
cd config-commitlint
npm ou
cd ../

echo -e "\n${COLOR_NAME}check eslint..."
cd config-eslint
npm ou
cd ../

echo -e "\n${COLOR_NAME}check htmllint..."
cd config-htmllint
npm ou
cd ../

echo -e "\n${COLOR_NAME}check markdownlint..."
cd config-markdownlint
npm ou
cd ../

echo -e "\n${COLOR_NAME}check npmlint..."
cd config-npmlint
npm ou
cd ../

echo -e "\n${COLOR_NAME}check prettier..."
cd config-prettier
npm ou
cd ../

echo -e "\n${COLOR_NAME}check stylelint..."
cd config-stylelint
npm ou
cd ../
