import { AbstractParseTreeVisitor } from 'antlr4ts/tree'
import { WenyanVisitor, WenyanParser } from '@wy-lang/antlr'
import * as wy from '@wy-lang/antlr'
import * as ts from 'typescript'
import { Node } from 'typescript'


function wrap_declear(node: ts.VariableDeclaration, exposed: Boolean) {
    let mod = undefined
    const v = ts.createVariableDeclarationList([node], ts.NodeFlags.Let)
    if (exposed) {
        mod = [ts.createModifier(ts.SyntaxKind.ExportKeyword)]
    }
    return ts.createVariableStatement(mod, v)
}

export default class WenyanTranslationVisitor
    extends AbstractParseTreeVisitor<Node>
    implements WenyanVisitor<Node> {
    defaultResult() {
        return ts.createEmptyStatement()
    }


    visitProgram(ctx: wy.ProgramContext) {
        let val: Node[] = []
        for (let i = 0; i < ctx.childCount - 1; i++) {
            let node = this.visit(ctx.statement(i))
            val.concat(node)
        }
        return ts.createEmptyStatement()
    }

    visitVariable(ctx: wy.VariableContext) {
        return ts.createIdentifier(ctx._v.text)
    }




    visitDeclareString(ctx: wy.DeclareStringContext) {
        let pub: Boolean = true
        const conditions = ['吾', '私']

        const str = ctx.DeclareString().text
        if (conditions.some(el => str.includes(el))) {
            pub = false
        }
        const declare = ts.createVariableDeclaration(
            this.visit(ctx._v) as any,
            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            this.visit(ctx._s) as any
        )
        return this.defaultResult()
    }
    visitStringRemove0(ctx: wy.StringRemove0Context) {
        return ts.createStringLiteral('')
    }
    visitStringRemove1(ctx: wy.StringRemove1Context) {
        const t = ctx.text
        const s = t.substring(1, t.length - 1)
        return ts.createStringLiteral(s)
    }
    visitStringRemove2(ctx: wy.StringRemove2Context) {
        const t = ctx.text
        const s = t.substring(2, t.length - 2)
        return ts.createStringLiteral(s)
    }




    visitDeclareNumber(ctx: wy.DeclareNumberContext) {
        const declare = ts.createVariableDeclaration(
            this.visit(ctx._v) as any,
            ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
            this.visit(ctx._n) as any,
        )
        return this.defaultResult()
    }
    visitNumberInteger(ctx: wy.NumberIntegerContext) {
        return ts.createNumericLiteral(ctx.text)
    }
    visitNumberIntegerCN(ctx: wy.NumberIntegerCNContext) {
        return ts.createNumericLiteral('0')
    }
    visitNumberFloat(ctx: wy.NumberFloatContext) {
        return ts.createNumericLiteral(ctx.text)
    }
    visitNumberFloatCN(ctx: wy.NumberFloatCNContext) {
        return ts.createNumericLiteral('0')
    }

}

