import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts'
import { WenyanLexer, WenyanParser } from '@wy-lang/antlr'
import WenyanErrorListener from './ErrorListener'
import WenyanTranslationVisitor from './TranslationVisitor'

export default function translater(code: string): string {
    const input = new ANTLRInputStream(code)
    const lexer = new WenyanLexer(input)
    const tokens = new CommonTokenStream(lexer)
    const parser = new WenyanParser(tokens)
    const listener = new WenyanErrorListener()
    const visitor = new WenyanTranslationVisitor()

    lexer.removeErrorListeners()
    parser.removeErrorListeners()
    lexer.addErrorListener(listener)
    parser.addErrorListener(listener)

    const prog = parser.program()
    const result = visitor.visit(prog)

    if (listener.hasError()) {
        return listener.print()
    }

    return ''
}
