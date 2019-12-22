// Generated from packages/Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { StringRemove0Context } from './WenyanParser'
import { StringRemove2Context } from './WenyanParser'
import { StringRemove1Context } from './WenyanParser'
import { NumberIntegerContext } from './WenyanParser'
import { NumberIntegerCNContext } from './WenyanParser'
import { NumberFloatContext } from './WenyanParser'
import { NumberFloatCNContext } from './WenyanParser'
import { ProgramContext } from './WenyanParser'
import { StatementContext } from './WenyanParser'
import { IfStatementContext } from './WenyanParser'
import { DeclaremoduleContext } from './WenyanParser'
import { ModuleNameContext } from './WenyanParser'
import { VariableContext } from './WenyanParser'
import { ApplyStatementContext } from './WenyanParser'
import { ApplyFunctionContext } from './WenyanParser'
import { ApplyStackContext } from './WenyanParser'
import { StackInContext } from './WenyanParser'
import { StackPopOneContext } from './WenyanParser'
import { StackPopContext } from './WenyanParser'
import { StackOutContext } from './WenyanParser'
import { StackReturnContext } from './WenyanParser'
import { DeclarefunctionContext } from './WenyanParser'
import { VariablesContext } from './WenyanParser'
import { DataContext } from './WenyanParser'
import { DeclareDataContext } from './WenyanParser'
import { DeclareStringContext } from './WenyanParser'
import { StringContext } from './WenyanParser'
import { DeclareNumberContext } from './WenyanParser'
import { NumberContext } from './WenyanParser'
import { DigitsContext } from './WenyanParser'
import { DeclareBooleanContext } from './WenyanParser'
import { BooleanContext } from './WenyanParser'
import { SkipStatementContext } from './WenyanParser'


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WenyanParser`.
 */
export interface WenyanListener extends ParseTreeListener {
    /**
	 * Enter a parse tree produced by the `StringRemove0`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringRemove0?: (ctx: StringRemove0Context) => void
    /**
	 * Exit a parse tree produced by the `StringRemove0`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringRemove0?: (ctx: StringRemove0Context) => void

    /**
	 * Enter a parse tree produced by the `StringRemove2`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringRemove2?: (ctx: StringRemove2Context) => void
    /**
	 * Exit a parse tree produced by the `StringRemove2`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringRemove2?: (ctx: StringRemove2Context) => void

    /**
	 * Enter a parse tree produced by the `StringRemove1`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    enterStringRemove1?: (ctx: StringRemove1Context) => void
    /**
	 * Exit a parse tree produced by the `StringRemove1`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    exitStringRemove1?: (ctx: StringRemove1Context) => void

    /**
	 * Enter a parse tree produced by the `NumberInteger`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    enterNumberInteger?: (ctx: NumberIntegerContext) => void
    /**
	 * Exit a parse tree produced by the `NumberInteger`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    exitNumberInteger?: (ctx: NumberIntegerContext) => void

    /**
	 * Enter a parse tree produced by the `NumberIntegerCN`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    enterNumberIntegerCN?: (ctx: NumberIntegerCNContext) => void
    /**
	 * Exit a parse tree produced by the `NumberIntegerCN`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    exitNumberIntegerCN?: (ctx: NumberIntegerCNContext) => void

    /**
	 * Enter a parse tree produced by the `NumberFloat`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    enterNumberFloat?: (ctx: NumberFloatContext) => void
    /**
	 * Exit a parse tree produced by the `NumberFloat`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    exitNumberFloat?: (ctx: NumberFloatContext) => void

    /**
	 * Enter a parse tree produced by the `NumberFloatCN`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    enterNumberFloatCN?: (ctx: NumberFloatCNContext) => void
    /**
	 * Exit a parse tree produced by the `NumberFloatCN`
	 * labeled alternative in `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    exitNumberFloatCN?: (ctx: NumberFloatCNContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.program`.
	 * @param ctx the parse tree
	 */
    enterProgram?: (ctx: ProgramContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.program`.
	 * @param ctx the parse tree
	 */
    exitProgram?: (ctx: ProgramContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.statement`.
	 * @param ctx the parse tree
	 */
    enterStatement?: (ctx: StatementContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.statement`.
	 * @param ctx the parse tree
	 */
    exitStatement?: (ctx: StatementContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.ifStatement`.
	 * @param ctx the parse tree
	 */
    enterIfStatement?: (ctx: IfStatementContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.ifStatement`.
	 * @param ctx the parse tree
	 */
    exitIfStatement?: (ctx: IfStatementContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.declaremodule`.
	 * @param ctx the parse tree
	 */
    enterDeclaremodule?: (ctx: DeclaremoduleContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.declaremodule`.
	 * @param ctx the parse tree
	 */
    exitDeclaremodule?: (ctx: DeclaremoduleContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.moduleName`.
	 * @param ctx the parse tree
	 */
    enterModuleName?: (ctx: ModuleNameContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.moduleName`.
	 * @param ctx the parse tree
	 */
    exitModuleName?: (ctx: ModuleNameContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.variable`.
	 * @param ctx the parse tree
	 */
    enterVariable?: (ctx: VariableContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.variable`.
	 * @param ctx the parse tree
	 */
    exitVariable?: (ctx: VariableContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.applyStatement`.
	 * @param ctx the parse tree
	 */
    enterApplyStatement?: (ctx: ApplyStatementContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.applyStatement`.
	 * @param ctx the parse tree
	 */
    exitApplyStatement?: (ctx: ApplyStatementContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.applyFunction`.
	 * @param ctx the parse tree
	 */
    enterApplyFunction?: (ctx: ApplyFunctionContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.applyFunction`.
	 * @param ctx the parse tree
	 */
    exitApplyFunction?: (ctx: ApplyFunctionContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.applyStack`.
	 * @param ctx the parse tree
	 */
    enterApplyStack?: (ctx: ApplyStackContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.applyStack`.
	 * @param ctx the parse tree
	 */
    exitApplyStack?: (ctx: ApplyStackContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.stackIn`.
	 * @param ctx the parse tree
	 */
    enterStackIn?: (ctx: StackInContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.stackIn`.
	 * @param ctx the parse tree
	 */
    exitStackIn?: (ctx: StackInContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.stackPopOne`.
	 * @param ctx the parse tree
	 */
    enterStackPopOne?: (ctx: StackPopOneContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.stackPopOne`.
	 * @param ctx the parse tree
	 */
    exitStackPopOne?: (ctx: StackPopOneContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.stackPop`.
	 * @param ctx the parse tree
	 */
    enterStackPop?: (ctx: StackPopContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.stackPop`.
	 * @param ctx the parse tree
	 */
    exitStackPop?: (ctx: StackPopContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.stackOut`.
	 * @param ctx the parse tree
	 */
    enterStackOut?: (ctx: StackOutContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.stackOut`.
	 * @param ctx the parse tree
	 */
    exitStackOut?: (ctx: StackOutContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.stackReturn`.
	 * @param ctx the parse tree
	 */
    enterStackReturn?: (ctx: StackReturnContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.stackReturn`.
	 * @param ctx the parse tree
	 */
    exitStackReturn?: (ctx: StackReturnContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.declarefunction`.
	 * @param ctx the parse tree
	 */
    enterDeclarefunction?: (ctx: DeclarefunctionContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.declarefunction`.
	 * @param ctx the parse tree
	 */
    exitDeclarefunction?: (ctx: DeclarefunctionContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.variables`.
	 * @param ctx the parse tree
	 */
    enterVariables?: (ctx: VariablesContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.variables`.
	 * @param ctx the parse tree
	 */
    exitVariables?: (ctx: VariablesContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.data`.
	 * @param ctx the parse tree
	 */
    enterData?: (ctx: DataContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.data`.
	 * @param ctx the parse tree
	 */
    exitData?: (ctx: DataContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.declareData`.
	 * @param ctx the parse tree
	 */
    enterDeclareData?: (ctx: DeclareDataContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.declareData`.
	 * @param ctx the parse tree
	 */
    exitDeclareData?: (ctx: DeclareDataContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.declareString`.
	 * @param ctx the parse tree
	 */
    enterDeclareString?: (ctx: DeclareStringContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.declareString`.
	 * @param ctx the parse tree
	 */
    exitDeclareString?: (ctx: DeclareStringContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    enterString?: (ctx: StringContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.string`.
	 * @param ctx the parse tree
	 */
    exitString?: (ctx: StringContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.declareNumber`.
	 * @param ctx the parse tree
	 */
    enterDeclareNumber?: (ctx: DeclareNumberContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.declareNumber`.
	 * @param ctx the parse tree
	 */
    exitDeclareNumber?: (ctx: DeclareNumberContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.number`.
	 * @param ctx the parse tree
	 */
    enterNumber?: (ctx: NumberContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.number`.
	 * @param ctx the parse tree
	 */
    exitNumber?: (ctx: NumberContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    enterDigits?: (ctx: DigitsContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.digits`.
	 * @param ctx the parse tree
	 */
    exitDigits?: (ctx: DigitsContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.declareBoolean`.
	 * @param ctx the parse tree
	 */
    enterDeclareBoolean?: (ctx: DeclareBooleanContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.declareBoolean`.
	 * @param ctx the parse tree
	 */
    exitDeclareBoolean?: (ctx: DeclareBooleanContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.boolean`.
	 * @param ctx the parse tree
	 */
    enterBoolean?: (ctx: BooleanContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.boolean`.
	 * @param ctx the parse tree
	 */
    exitBoolean?: (ctx: BooleanContext) => void

    /**
	 * Enter a parse tree produced by `WenyanParser.skipStatement`.
	 * @param ctx the parse tree
	 */
    enterSkipStatement?: (ctx: SkipStatementContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.skipStatement`.
	 * @param ctx the parse tree
	 */
    exitSkipStatement?: (ctx: SkipStatementContext) => void
}

