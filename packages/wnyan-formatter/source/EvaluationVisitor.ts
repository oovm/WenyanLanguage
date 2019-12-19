import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { NyarVisitor, MathAliasContext } from '../grammar';
import { INTEGER } from "../core";
import {
    NyarParser,
    ExpressionStatementContext,
    SymbolContext,
    AssignStatementContext,
    Add_Subtract_Context,
    Multiply_Divide_Context,
    Power_Context,
    PriorityOperationContext,
    IntegerContext,
} from '../grammar';


export default class NyarEvaluationVisitor extends AbstractParseTreeVisitor<number> implements NyarVisitor<number> {
    // Save execution output
    private buffers: string[] = [];
    // Save intermediate variables
    private memory: { [id: string]: number } = {};

    defaultResult() { return 0 }

    visitSymbol(ctx: SymbolContext) {
        const id = ctx.SYMBOL().text;
        if (this.memory[id] !== undefined) {
            return this.memory[id];
        }
        return 0;
    }

    visitInteger(ctx: IntegerContext) {
        return parseInt(ctx.INTEGER().text, 10);
    }

    visitExpressionStatement(ctx: ExpressionStatementContext) {
        const val = this.visit(ctx.expression());
        this.buffers.push(`${val}`);
        console.log(val)
        return val;
    }

    visitAssignStatement(ctx: AssignStatementContext) {
        const id = ctx.SYMBOL().text;
        const val = this.visit(ctx.expression());
        this.memory[id] = val;
        return val;
    }

    visitAdd_Subtract_(ctx: Add_Subtract_Context) {
        const left = this.visit(ctx._left);
        const right = this.visit(ctx._right);
        const op = ctx._op;

        switch (op.type) {
            case NyarParser.Add: {
                return left + right;
            }
            case NyarParser.Subtract: {
                return left - right;
            }
            default: {
                return 0
            }
        }
    }

    visitMultiply_Divide_(ctx: Multiply_Divide_Context) {
        const left = this.visit(ctx._left);
        const right = this.visit(ctx._right);
        const op = ctx._op;

        switch (op.type) {
            case NyarParser.Multiply: {
                return left * right;
            }
            case NyarParser.Divide: {
                return left / right;
            }
            case NyarParser.Times: {
                return left * right;
            }
            default: {
                return 0
            }
        }
    }

    visitPower_(ctx: Power_Context) {
        const left = this.visit(ctx._left);
        const right = this.visit(ctx._right);
        const op = ctx._op;

        switch (op.type) {
            case NyarParser.Power: {
                return left ** right;
            }
            default: {
                return 0
            }
        }
    }

    visitMathAlias(ctx: MathAliasContext) {
        switch (ctx._alias.type) {
            case NyarParser.Pi: {
                return 3.14159;
            }
            case NyarParser.E: {
                return 2.7;
            }
            case NyarParser.EulerGamma: {
                return 0.57;
            }
            default: {
                return 0
            }
        }
    }

    visitPriorityOperation(ctx: PriorityOperationContext) {
        return this.visit(ctx.expression());
    }

    print() {
        return this.buffers.join('\n');
    }
}
