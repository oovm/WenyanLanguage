from .build_ast import Import, Literal, Expression, Define, Type, ast_build
from .parser import WenyanParser, WenyanVisitor
from .hanzi2num import parse_int_m
from .utils import debug_print


class Translator(WenyanVisitor):
    def visitProgram(self, ctx: WenyanParser.ProgramContext):
        stats = list(map(self.visit, ctx.statement()))
        return stats

    def visitStatement(self, ctx: WenyanParser.StatementContext):
        s = self.visitChildren(ctx)
        debug_print("Statement", ast_build([s]))
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
        return Expression.assign_data(v, d)

    def visitDeclareBoolean(self, ctx: WenyanParser.DeclareBooleanContext):
        # TODO: toAST
        print(ctx.v)
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
        t = ctx.getText()
        return Literal.from_symbol_set(t[1:-1])

    def visitBoolean(self, ctx: WenyanParser.BooleanContext):
        t = ctx.getText()
        if t == '阳' or t == '陽':
            return Literal.from_symbol_get('True')
        else:
            return Literal.from_symbol_get('False')

    def visitNumberInteger(self, ctx: WenyanParser.NumberIntegerContext):
        n = int(ctx.getText())
        return Literal.from_number(n)

    def visitNumberIntegerCN(self, ctx: WenyanParser.NumberIntegerCNContext):
        n = parse_int_m(ctx.getText())
        return Literal.from_number(n)

    def visitNumberFloat(self, ctx: WenyanParser.NumberFloatContext):
        n = float(ctx.getText())
        return Literal.from_number(n)

    def visitNumberFloatCN(self, ctx: WenyanParser.NumberFloatCNContext):
        # TODO: parse_float
        return Literal.from_number(0)

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
        ast = self.aster("""
        「齐谐」者，「「志怪」」者也！
        [先辈]者, 一一四五一四也!
        """)
        return True
