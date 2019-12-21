# Generated from D:/Hybrid/Wengyan-language/packages\Wenyan.g4 by ANTLR 4.7.2
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .WenyanParser import WenyanParser
else:
    from WenyanParser import WenyanParser

# This class defines a complete listener for a parse tree produced by WenyanParser.
class WenyanListener(ParseTreeListener):

    # Enter a parse tree produced by WenyanParser#program.
    def enterProgram(self, ctx:WenyanParser.ProgramContext):
        pass

    # Exit a parse tree produced by WenyanParser#program.
    def exitProgram(self, ctx:WenyanParser.ProgramContext):
        pass


    # Enter a parse tree produced by WenyanParser#statement.
    def enterStatement(self, ctx:WenyanParser.StatementContext):
        pass

    # Exit a parse tree produced by WenyanParser#statement.
    def exitStatement(self, ctx:WenyanParser.StatementContext):
        pass


    # Enter a parse tree produced by WenyanParser#ifStatement.
    def enterIfStatement(self, ctx:WenyanParser.IfStatementContext):
        pass

    # Exit a parse tree produced by WenyanParser#ifStatement.
    def exitIfStatement(self, ctx:WenyanParser.IfStatementContext):
        pass


    # Enter a parse tree produced by WenyanParser#data.
    def enterData(self, ctx:WenyanParser.DataContext):
        pass

    # Exit a parse tree produced by WenyanParser#data.
    def exitData(self, ctx:WenyanParser.DataContext):
        pass


    # Enter a parse tree produced by WenyanParser#declareData.
    def enterDeclareData(self, ctx:WenyanParser.DeclareDataContext):
        pass

    # Exit a parse tree produced by WenyanParser#declareData.
    def exitDeclareData(self, ctx:WenyanParser.DeclareDataContext):
        pass


    # Enter a parse tree produced by WenyanParser#module.
    def enterModule(self, ctx:WenyanParser.ModuleContext):
        pass

    # Exit a parse tree produced by WenyanParser#module.
    def exitModule(self, ctx:WenyanParser.ModuleContext):
        pass


    # Enter a parse tree produced by WenyanParser#declaremodule.
    def enterDeclaremodule(self, ctx:WenyanParser.DeclaremoduleContext):
        pass

    # Exit a parse tree produced by WenyanParser#declaremodule.
    def exitDeclaremodule(self, ctx:WenyanParser.DeclaremoduleContext):
        pass


    # Enter a parse tree produced by WenyanParser#declareString.
    def enterDeclareString(self, ctx:WenyanParser.DeclareStringContext):
        pass

    # Exit a parse tree produced by WenyanParser#declareString.
    def exitDeclareString(self, ctx:WenyanParser.DeclareStringContext):
        pass


    # Enter a parse tree produced by WenyanParser#StringRemove0.
    def enterStringRemove0(self, ctx:WenyanParser.StringRemove0Context):
        pass

    # Exit a parse tree produced by WenyanParser#StringRemove0.
    def exitStringRemove0(self, ctx:WenyanParser.StringRemove0Context):
        pass


    # Enter a parse tree produced by WenyanParser#StringRemove2.
    def enterStringRemove2(self, ctx:WenyanParser.StringRemove2Context):
        pass

    # Exit a parse tree produced by WenyanParser#StringRemove2.
    def exitStringRemove2(self, ctx:WenyanParser.StringRemove2Context):
        pass


    # Enter a parse tree produced by WenyanParser#StringRemove1.
    def enterStringRemove1(self, ctx:WenyanParser.StringRemove1Context):
        pass

    # Exit a parse tree produced by WenyanParser#StringRemove1.
    def exitStringRemove1(self, ctx:WenyanParser.StringRemove1Context):
        pass


    # Enter a parse tree produced by WenyanParser#variable.
    def enterVariable(self, ctx:WenyanParser.VariableContext):
        pass

    # Exit a parse tree produced by WenyanParser#variable.
    def exitVariable(self, ctx:WenyanParser.VariableContext):
        pass


    # Enter a parse tree produced by WenyanParser#apply.
    def enterApply(self, ctx:WenyanParser.ApplyContext):
        pass

    # Exit a parse tree produced by WenyanParser#apply.
    def exitApply(self, ctx:WenyanParser.ApplyContext):
        pass


    # Enter a parse tree produced by WenyanParser#applyFunction.
    def enterApplyFunction(self, ctx:WenyanParser.ApplyFunctionContext):
        pass

    # Exit a parse tree produced by WenyanParser#applyFunction.
    def exitApplyFunction(self, ctx:WenyanParser.ApplyFunctionContext):
        pass


    # Enter a parse tree produced by WenyanParser#applyStack.
    def enterApplyStack(self, ctx:WenyanParser.ApplyStackContext):
        pass

    # Exit a parse tree produced by WenyanParser#applyStack.
    def exitApplyStack(self, ctx:WenyanParser.ApplyStackContext):
        pass


    # Enter a parse tree produced by WenyanParser#stackIn.
    def enterStackIn(self, ctx:WenyanParser.StackInContext):
        pass

    # Exit a parse tree produced by WenyanParser#stackIn.
    def exitStackIn(self, ctx:WenyanParser.StackInContext):
        pass


    # Enter a parse tree produced by WenyanParser#stackPopOne.
    def enterStackPopOne(self, ctx:WenyanParser.StackPopOneContext):
        pass

    # Exit a parse tree produced by WenyanParser#stackPopOne.
    def exitStackPopOne(self, ctx:WenyanParser.StackPopOneContext):
        pass


    # Enter a parse tree produced by WenyanParser#stackPop.
    def enterStackPop(self, ctx:WenyanParser.StackPopContext):
        pass

    # Exit a parse tree produced by WenyanParser#stackPop.
    def exitStackPop(self, ctx:WenyanParser.StackPopContext):
        pass


    # Enter a parse tree produced by WenyanParser#stackOut.
    def enterStackOut(self, ctx:WenyanParser.StackOutContext):
        pass

    # Exit a parse tree produced by WenyanParser#stackOut.
    def exitStackOut(self, ctx:WenyanParser.StackOutContext):
        pass


    # Enter a parse tree produced by WenyanParser#stackReturn.
    def enterStackReturn(self, ctx:WenyanParser.StackReturnContext):
        pass

    # Exit a parse tree produced by WenyanParser#stackReturn.
    def exitStackReturn(self, ctx:WenyanParser.StackReturnContext):
        pass


    # Enter a parse tree produced by WenyanParser#declarefunction.
    def enterDeclarefunction(self, ctx:WenyanParser.DeclarefunctionContext):
        pass

    # Exit a parse tree produced by WenyanParser#declarefunction.
    def exitDeclarefunction(self, ctx:WenyanParser.DeclarefunctionContext):
        pass


    # Enter a parse tree produced by WenyanParser#variables.
    def enterVariables(self, ctx:WenyanParser.VariablesContext):
        pass

    # Exit a parse tree produced by WenyanParser#variables.
    def exitVariables(self, ctx:WenyanParser.VariablesContext):
        pass


    # Enter a parse tree produced by WenyanParser#declareNumber.
    def enterDeclareNumber(self, ctx:WenyanParser.DeclareNumberContext):
        pass

    # Exit a parse tree produced by WenyanParser#declareNumber.
    def exitDeclareNumber(self, ctx:WenyanParser.DeclareNumberContext):
        pass


    # Enter a parse tree produced by WenyanParser#declareBoolean.
    def enterDeclareBoolean(self, ctx:WenyanParser.DeclareBooleanContext):
        pass

    # Exit a parse tree produced by WenyanParser#declareBoolean.
    def exitDeclareBoolean(self, ctx:WenyanParser.DeclareBooleanContext):
        pass


    # Enter a parse tree produced by WenyanParser#number.
    def enterNumber(self, ctx:WenyanParser.NumberContext):
        pass

    # Exit a parse tree produced by WenyanParser#number.
    def exitNumber(self, ctx:WenyanParser.NumberContext):
        pass


    # Enter a parse tree produced by WenyanParser#NumberInteger.
    def enterNumberInteger(self, ctx:WenyanParser.NumberIntegerContext):
        pass

    # Exit a parse tree produced by WenyanParser#NumberInteger.
    def exitNumberInteger(self, ctx:WenyanParser.NumberIntegerContext):
        pass


    # Enter a parse tree produced by WenyanParser#NumberIntegerCN.
    def enterNumberIntegerCN(self, ctx:WenyanParser.NumberIntegerCNContext):
        pass

    # Exit a parse tree produced by WenyanParser#NumberIntegerCN.
    def exitNumberIntegerCN(self, ctx:WenyanParser.NumberIntegerCNContext):
        pass


    # Enter a parse tree produced by WenyanParser#NumberFloat.
    def enterNumberFloat(self, ctx:WenyanParser.NumberFloatContext):
        pass

    # Exit a parse tree produced by WenyanParser#NumberFloat.
    def exitNumberFloat(self, ctx:WenyanParser.NumberFloatContext):
        pass


    # Enter a parse tree produced by WenyanParser#NumberFloatCN.
    def enterNumberFloatCN(self, ctx:WenyanParser.NumberFloatCNContext):
        pass

    # Exit a parse tree produced by WenyanParser#NumberFloatCN.
    def exitNumberFloatCN(self, ctx:WenyanParser.NumberFloatCNContext):
        pass


    # Enter a parse tree produced by WenyanParser#skipStatement.
    def enterSkipStatement(self, ctx:WenyanParser.SkipStatementContext):
        pass

    # Exit a parse tree produced by WenyanParser#skipStatement.
    def exitSkipStatement(self, ctx:WenyanParser.SkipStatementContext):
        pass


