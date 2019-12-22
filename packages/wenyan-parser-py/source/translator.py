from .build_ast import Import, Literal, Expression, Define, Type, ast_build
from .parser import WenyanParser, WenyanVisitor
from .utils import debug_print


class Translator(WenyanVisitor):
    def visitProgram(self, ctx: WenyanParser.ProgramContext):
        stats = list(map(self.visit, ctx.statement()))
        # return ast_build(stats)
        return ''

    def visitStatement(self, ctx: WenyanParser.StatementContext):
        debug_print("Statement", self.visitChildren(ctx))
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
        print(ast_build([d]))
        return ''

    def visitDeclareBoolean(self, ctx: WenyanParser.DeclareBooleanContext):
        # TODO: toAST
        print(ctx.getText())
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

    def visitNumberInteger(self, ctx: WenyanParser.NumberIntegerContext):
        n = ctx.getText()
        return Literal.from_int_dec(n)

    def visitNumberIntegerCN(self, ctx: WenyanParser.NumberIntegerCNContext):
        # TODO: parse_int
        return ''

    def visitNumberFloat(self, ctx: WenyanParser.NumberFloatContext):
        n = ctx.getText()
        return Literal.from_float(n)

    def visitNumberFloatCN(self, ctx: WenyanParser.NumberFloatCNContext):
        # TODO: parse_float
        return ''

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
