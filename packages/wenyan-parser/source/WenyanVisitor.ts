// Generated from Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StringRemove0Context } from "./WenyanParser";
import { StringRemove2Context } from "./WenyanParser";
import { StringRemove1Context } from "./WenyanParser";
import { ProgramContext } from "./WenyanParser";
import { StatementContext } from "./WenyanParser";
import { IfStatementContext } from "./WenyanParser";
import { DataContext } from "./WenyanParser";
import { DeclareStringContext } from "./WenyanParser";
import { StringContext } from "./WenyanParser";
import { DeclareNumberContext } from "./WenyanParser";
import { VariableContext } from "./WenyanParser";
import { DeclarefunctionContext } from "./WenyanParser";
import { VariablesContext } from "./WenyanParser";
import { ApplyContext } from "./WenyanParser";
import { NumberContext } from "./WenyanParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WenyanParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WenyanVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `StringRemove0`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringRemove0?: (ctx: StringRemove0Context) => Result;

	/**
	 * Visit a parse tree produced by the `StringRemove2`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringRemove2?: (ctx: StringRemove2Context) => Result;

	/**
	 * Visit a parse tree produced by the `StringRemove1`
	 * labeled alternative in `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringRemove1?: (ctx: StringRemove1Context) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData?: (ctx: DataContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.declareString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareString?: (ctx: DeclareStringContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.declareNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareNumber?: (ctx: DeclareNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.declarefunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarefunction?: (ctx: DeclarefunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.variables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariables?: (ctx: VariablesContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.apply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApply?: (ctx: ApplyContext) => Result;

	/**
	 * Visit a parse tree produced by `WenyanParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

