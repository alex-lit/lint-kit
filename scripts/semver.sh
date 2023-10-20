# Update package version

git add --all
git commit -m 'chore: preparing for version update'
conventional-changelog -p angular -i CHANGELOG.md -s $1
git add CHANGELOG.md
