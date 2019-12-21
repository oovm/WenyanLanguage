from astunparse import unparse, dump
from ast import Module
from .literal import Literal
from .module import Import
from .define import Define
from .typed import Type
from .expression import Expression


def ast_build(exprs):
    ast = Module(body=exprs)
    return unparse(ast)
