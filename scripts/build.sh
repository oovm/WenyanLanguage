antlr4ts -visitor packages/Wenyan.g4 -o packages/wenyan-parser/source
tslint packages/**/*.ts --fix
tsc -b
eslint . --fix