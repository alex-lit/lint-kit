# Install dependencies

COLOR_NAME='\e[96m'

echo "\n${COLOR_NAME}install dependencies..."
npm i

echo "\n${COLOR_NAME}get submodules..."
git submodule update --init

cd submodules

echo "\n${COLOR_NAME}install commitlint..."
cd config-commitlint
npm i
cd ../

echo "\n${COLOR_NAME}install eslint..."
cd config-eslint
npm i
cd ../

echo "\n${COLOR_NAME}install htmllint..."
cd config-htmllint
npm i
cd ../

echo "\n${COLOR_NAME}install markdownlint..."
cd config-markdownlint
npm i
cd ../

echo "\n${COLOR_NAME}install npmlint..."
cd config-npmlint
npm i
cd ../

echo "\n${COLOR_NAME}install prettier..."
cd config-prettier
npm i
cd ../

echo "\n${COLOR_NAME}install stylelint..."
cd config-stylelint
npm i
cd ../
