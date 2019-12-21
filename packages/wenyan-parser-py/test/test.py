import os

from antlr4 import *
from antlr4.error.ErrorListener import *
from unittest import TestCase
import io
from source.parser import WenyanParser, WenyanLexer, WenyanListener
from antlr4.tree.Trees import Trees


def aster(path):
    dir_path = os.path.dirname(os.path.abspath(path))
    name = os.path.splitext(os.path.basename(path))[0]
    lexer = WenyanLexer(FileStream(path, encoding='utf8'))
    stream = CommonTokenStream(lexer)
    parser = WenyanParser(stream)
    ast = parser.program()
    with open('ast/' + name + ".txt", 'w') as f:
        f.write(Trees.toStringTree(ast, None, parser))
        f.close()


class ErrorListener(ErrorListener):
    def __init__(self, output):
        self.output = output
        self._symbol = ''

    def syntaxError(self, recognizer, offending_symbol, line, column, msg, e):
        self.output.write(msg)
        self._symbol = offending_symbol.text
        stack = recognizer.getRuleInvocationStack()
        stack.reverse()
        print("rule stack: {}".format(str(stack)))
        print("line {} : {} at {} : {}".format(
            str(line),
            str(column),
            str(offending_symbol).replace(" ", u'\u23B5'),
            msg.replace(" ", u'\u23B5'))
        )

    @property
    def symbol(self):
        return self._symbol


class ParserTests(TestCase):
    def setup(self, path):
        file_in = FileStream(path, encoding='utf8')
        lexer = WenyanLexer(file_in)
        stream = CommonTokenStream(lexer)

        # print out the token parsing
        stream.fill()
        print("TOKENS:")
        for token in stream.tokens:
            if token.text != '<EOF>':
                type_name = WenyanParser.symbolicNames[token.type]
                tabs = 5 - len(type_name) // 4
                sep = "\t" * tabs
                print("    %s%s%s" % (type_name, sep, token.text.replace(" ", u'\u23B5').replace("\n", u'\u2936')))
        parser = WenyanParser(stream)

        self.output = io.StringIO()
        self.error = io.StringIO()

        parser.removeErrorListeners()
        self.errorListener = ErrorListener(self.error)
        parser.addErrorListener(self.errorListener)
        return parser

    def test_import(self):
        path = "../../../tests/string.wy"
        parser = self.setup(path)
        tree = parser.program()
        listener = WenyanListener()
        walker = ParseTreeWalker()
        walker.walk(listener, tree)
        self.assertEqual(len(self.errorListener.symbol), 2)
        aster(path)
