import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { WenyanLexer, WenyanParser } from '../grammar';
import WenyanErrorListener from './ErrorListener';
import WenyanEvaluationVisitor from './EvaluationVisitor';

export default function execute(code: string): string {
    const input = new ANTLRInputStream(code);
    const lexer = new WenyanLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new WenyanParser(tokens);
    const listener = new WenyanErrorListener();
    const visitor = new WenyanEvaluationVisitor();

    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    lexer.addErrorListener(listener);
    parser.addErrorListener(listener);

    const program = parser.program();
    visitor.visit(program);

    if (listener.hasError()) {
        return listener.print();
    }

    return visitor.print();
}
