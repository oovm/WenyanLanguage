// Generated from Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { StringRemove0Context } from './WenyanParser'
import { StringRemove2Context } from './WenyanParser'
import { StringRemove1Context } from './WenyanParser'
import { ProgramContext } from './WenyanParser'
import { StatementContext } from './WenyanParser'
import { IfStatementContext } from './WenyanParser'
import { DataContext } from './WenyanParser'
import { DeclareDataContext } from './WenyanParser'
import { DeclareStringContext } from './WenyanParser'
import { StringContext } from './WenyanParser'
import { DeclareNumberContext } from './WenyanParser'
import { DeclareBooleanContext } from './WenyanParser'
import { VariableContext } from './WenyanParser'
import { DeclarefunctionContext } from './WenyanParser'
import { VariablesContext } from './WenyanParser'
import { ApplyContext } from './WenyanParser'
import { NumberContext } from './WenyanParser'
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
	 * Enter a parse tree produced by `WenyanParser.apply`.
	 * @param ctx the parse tree
	 */
    enterApply?: (ctx: ApplyContext) => void
    /**
	 * Exit a parse tree produced by `WenyanParser.apply`.
	 * @param ctx the parse tree
	 */
    exitApply?: (ctx: ApplyContext) => void

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

