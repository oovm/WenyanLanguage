yarn workspace @wy-lang/antlr build
tslint packages/*/source/*.ts --fix
tsc -b
eslint . --fix