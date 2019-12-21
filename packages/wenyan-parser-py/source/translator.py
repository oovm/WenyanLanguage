from .parser import WenyanParser, WenyanVisitor

from .build_ast import Import, Literal, Expression, Define, Type, ast_build


class Translator(WenyanVisitor):
    def visitProgram(self, ctx: WenyanParser.ProgramContext):
        stats = list(map(self.visit, ctx.statement()))
        return ast_build(stats)

    def visitStatement(self, ctx: WenyanParser.StatementContext):
        # debug_print("Statement", self.visitChildren(ctx))
        return self.visitChildren(ctx)

    # region Import
    # endregion

    # region Expression
    # endregion

    # region Function
    # endregion

    # region Atom
    def visitStringRemove0(self, ctx: WenyanParser.StringRemove0Context):
        return ''

    def visitStringRemove1(self, ctx: WenyanParser.StringRemove1Context):
        t = ctx.getText()
        print(t)
        return t[1:-1]

    def visitStringRemove2(self, ctx: WenyanParser.StringRemove1Context):
        t = ctx.getText()
        print(t)
        return t[2:-2]
    # endregion


from unittest import TestCase
from .parser import WenyanLexer
from antlr4 import InputStream, CommonTokenStream


class FastTests(TestCase):
    @staticmethod
    def aster(str_in):
        lexer = WenyanLexer(InputStream(str_in))
        stream = CommonTokenStream(lexer)
        parser = WenyanParser(stream)
        visitor = Translator()
        return visitor.visitProgram(parser.program())

    def test_ast_print(self):
        ast = self.aster("「齐谐」者，「「志怪」」者也！")
        print(ast)
