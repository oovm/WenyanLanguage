# Generated from D:/Hybrid/Wengyan-language/packages\Wenyan.g4 by ANTLR 4.7.2
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .WenyanParser import WenyanParser
else:
    from WenyanParser import WenyanParser

# This class defines a complete generic visitor for a parse tree produced by WenyanParser.

class WenyanVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by WenyanParser#program.
    def visitProgram(self, ctx:WenyanParser.ProgramContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#statement.
    def visitStatement(self, ctx:WenyanParser.StatementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#ifStatement.
    def visitIfStatement(self, ctx:WenyanParser.IfStatementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#module.
    def visitModule(self, ctx:WenyanParser.ModuleContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#declaremodule.
    def visitDeclaremodule(self, ctx:WenyanParser.DeclaremoduleContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#variable.
    def visitVariable(self, ctx:WenyanParser.VariableContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#applyStatement.
    def visitApplyStatement(self, ctx:WenyanParser.ApplyStatementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#applyFunction.
    def visitApplyFunction(self, ctx:WenyanParser.ApplyFunctionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#applyStack.
    def visitApplyStack(self, ctx:WenyanParser.ApplyStackContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#stackIn.
    def visitStackIn(self, ctx:WenyanParser.StackInContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#stackPopOne.
    def visitStackPopOne(self, ctx:WenyanParser.StackPopOneContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#stackPop.
    def visitStackPop(self, ctx:WenyanParser.StackPopContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#stackOut.
    def visitStackOut(self, ctx:WenyanParser.StackOutContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#stackReturn.
    def visitStackReturn(self, ctx:WenyanParser.StackReturnContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#declarefunction.
    def visitDeclarefunction(self, ctx:WenyanParser.DeclarefunctionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#variables.
    def visitVariables(self, ctx:WenyanParser.VariablesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#data.
    def visitData(self, ctx:WenyanParser.DataContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#declareData.
    def visitDeclareData(self, ctx:WenyanParser.DeclareDataContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#declareString.
    def visitDeclareString(self, ctx:WenyanParser.DeclareStringContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#StringRemove0.
    def visitStringRemove0(self, ctx:WenyanParser.StringRemove0Context):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#StringRemove2.
    def visitStringRemove2(self, ctx:WenyanParser.StringRemove2Context):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#StringRemove1.
    def visitStringRemove1(self, ctx:WenyanParser.StringRemove1Context):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#declareNumber.
    def visitDeclareNumber(self, ctx:WenyanParser.DeclareNumberContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#declareBoolean.
    def visitDeclareBoolean(self, ctx:WenyanParser.DeclareBooleanContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#number.
    def visitNumber(self, ctx:WenyanParser.NumberContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#NumberInteger.
    def visitNumberInteger(self, ctx:WenyanParser.NumberIntegerContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#NumberIntegerCN.
    def visitNumberIntegerCN(self, ctx:WenyanParser.NumberIntegerCNContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#NumberFloat.
    def visitNumberFloat(self, ctx:WenyanParser.NumberFloatContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#NumberFloatCN.
    def visitNumberFloatCN(self, ctx:WenyanParser.NumberFloatCNContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by WenyanParser#skipStatement.
    def visitSkipStatement(self, ctx:WenyanParser.SkipStatementContext):
        return self.visitChildren(ctx)



del WenyanParser