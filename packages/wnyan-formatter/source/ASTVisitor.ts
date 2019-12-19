import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { NyarVisitor } from '@wy-lang/antlr';
import {
    NyarParser,
    ProgramContext,
    ExpressionStatementContext,
    SymbolContext,
    AssignStatementContext,
    Add_Subtract_Context,
    Multiply_Divide_Context,
    PriorityOperationContext,
    IntegerContext,
} from '@wy-lang/antlr';



export default class NyarTranslationVisitor
    extends AbstractParseTreeVisitor<string>
    implements NyarVisitor<string> {
    defaultResult() {
        return '';
    }

    visitProgram(ctx: ProgramContext) {
        let val = '';
        for (let i = 0; i < ctx.childCount; i++) {
            val += this.visit(ctx.statement(i));
        }
        return val;
    }

    visitExpressionStatement(ctx: ExpressionStatementContext) {
        const val = this.visit(ctx.expression());
        return `${val};\n`;
    }

    visitAssignStatement(ctx: AssignStatementContext) {
        const id = ctx.Symbol().text;
        const val = this.visit(ctx.expression());
        return `${id} = ${val};\n`;
    }

    visitAdd_Subtract_(ctx: Add_Subtract_Context) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;

        if (op.type === NyarParser.Add) {
            return `+ ${left} ${right}`;
        }
        return `- ${left} ${right}`;
    }

    visitMultiply_Divide_(ctx: Multiply_Divide_Context) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        const op = ctx._op;

        if (op.type === NyarParser.Multiply) {
            return `* ${left} ${right}`;
        }
        return `/ ${left} ${right}`;
    }

    visitSymbol(ctx: SymbolContext) {
        const parent = ctx.parent;
        const id = ctx.Symbol().text;
        return id;
    }

    visitInteger(ctx: IntegerContext) {
        const parent = ctx.parent;
        const val = ctx.Integer().text;
        return val;
    }

    visitPriorityOperation(ctx: PriorityOperationContext) {
        const val = this.visit(ctx.expression());
        return val;
    }
}
