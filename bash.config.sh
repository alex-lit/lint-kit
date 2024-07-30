# Colors
export BLUE='\e[94m'
export CYAN='\e[96m'
export GREEN='\e[32m'
export GREY='\e[90m'
export WHITE='\e[39m'
export YELLOW='\e[33m'

# Paths
export CURRENT_DIR=${PWD##*/}
export CURRENT_PACKAGE_NAME=$(node -p "require('./package.json').name")
export CURRENT_PACKAGE_VERSION=$(node -p "require('./package.json').version")
export MAIN_PACKAGE="@alexlit/lint-kit"
export SKIPED_PACKAGES='NONE'
