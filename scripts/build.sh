yarn workspace @wy-lang/antlr build
tslint packages/**/*.ts --fix
tsc -b
eslint . --fix