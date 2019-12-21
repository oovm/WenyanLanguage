import ast
from ast import ImportFrom


class Import:
    @staticmethod
    def import_module(name: str, alias: str = None):
        return ast.Import(names=[ast.alias(name=name, asname=alias)])

    @staticmethod
    def import_module_all(name: str):
        return ImportFrom(
            module=name,
            names=[ast.alias(name='*', asname=None)],
            level=0
        )

    @staticmethod
    def symbol_pair(name: str, alias: str = None):
        return ast.alias(name=name, asname=alias)

    @staticmethod
    def import_symbols(name: str, symbols):
        return ImportFrom(module=name, names=symbols, level=0)
