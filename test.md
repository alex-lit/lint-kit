To support backwards-compatibility, monorepo features require multiple
lint-staged configuration files present in the git repo. If you still want to
run lint-staged in only one of the packages in a monorepo, you can either add an
"empty" lint-staged configuration to the root of the repo (so that there's two
configs in total), or alternatively run lint-staged with the --cwd option
pointing to your package directory (for example, lint-staged --cwd
packages/frontend).
