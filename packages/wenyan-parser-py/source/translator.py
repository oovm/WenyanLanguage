from .parser import WenyanParser, WenyanVisitor

from .build_ast import Import, Literal, Expression, Define, Type, ast_build


class Translator(WenyanVisitor):
    def visitProgram(self, ctx: WenyanParser.ProgramContext):
        stats = list(map(self.visit, ctx.statement()))
        # return ast_build(stats)
        return ''

    def visitStatement(self, ctx: WenyanParser.StatementContext):
        # debug_print("Statement", self.visitChildren(ctx))
        return self.visitChildren(ctx)

    # region Import
    # endregion

    # region Expression
    # endregion

    # region Function
    # endregion

    # region Declaration
    def visitDeclareData(self, ctx: WenyanParser.DeclareDataContext):
        v = self.visit(ctx.variable())
        d = self.visit(ctx.data())
        # TODO: toAST
        print(v)
        print(d)
        return ''

    def visitDeclareString(self, ctx: WenyanParser.DeclareStringContext):
        v = self.visit(ctx.v)
        s = self.visit(ctx.s)
        # TODO: toAST
        print(v)
        print(s)
        return ''

    # endregion

    # region Atom
    def visitVariable(self, ctx: WenyanParser.VariableContext):
        # TODO: toAST
        return ctx.v.text

    def visitStringRemove0(self, ctx: WenyanParser.StringRemove0Context):
        return Literal.from_escape_single('')

    def visitStringRemove1(self, ctx: WenyanParser.StringRemove1Context):
        t = ctx.getText()
        return Literal.from_escape_single(t[1:-1])

    def visitStringRemove2(self, ctx: WenyanParser.StringRemove1Context):
        t = ctx.getText()
        return Literal.from_escape_single(t[2:-2])
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
        return True
