import { AbstractParseTreeVisitor } from 'antlr4ts/tree'
import { WenyanVisitor, WenyanParser } from '@wy-lang/antlr'
import * as wy from '@wy-lang/antlr'
import * as ts from 'typescript'
import { Node } from 'typescript'


export default class WenyanTranslationVisitor
    extends AbstractParseTreeVisitor<Node>
    implements WenyanVisitor<Node> {
    defaultResult() {
        return ts.createEmptyStatement()
    }


    visitProgram(ctx: wy.ProgramContext) {
        let val: Node[] = []
        for (let i = 0; i < ctx.childCount; i++) {
            val.concat(this.visit(ctx.statement(i)))
        }
        return ts.createEmptyStatement()
    }


    visitNumber(ctx: wy.NumberContext) {
        return ts.createEmptyStatement()
    }

    visitString(ctx: wy.StringContext) {
        return ts.createEmptyStatement()
    }

}

new WenyanTranslationVisitor()

