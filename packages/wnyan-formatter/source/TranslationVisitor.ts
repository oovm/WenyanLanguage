import { AbstractParseTreeVisitor } from 'antlr4ts/tree'
import { WenyanVisitor, WenyanParser } from '@wy-lang/antlr'
import * as wy from '@wy-lang/antlr'

export default class WenyanTranslationVisitor
    extends AbstractParseTreeVisitor<string>
    implements WenyanVisitor<string> {
    defaultResult() {
        return ''
    }

    visitProgram(ctx: wy.ProgramContext) {
        let val = ''
        for (let i = 0; i < ctx.childCount; i++) {
            val += this.visit(ctx.statement(i))
        }
        return val
    }

    visitNumber(ctx: wy.NumberContext) {
        return 'unimplemented'
    }

    visitString(ctx: wy.StringContext) {
        return 'unimplemented'
    }
}
