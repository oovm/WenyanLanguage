// Generated from packages/Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import { NotNull } from 'antlr4ts/Decorators'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Override } from 'antlr4ts/Decorators'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import * as Utils from 'antlr4ts/misc/Utils'

import { WenyanListener } from './WenyanListener'
import { WenyanVisitor } from './WenyanVisitor'


export class WenyanParser extends Parser {
    public static readonly If = 1
    public static readonly EndDeclare = 2
    public static readonly Else = 3
    public static readonly Return = 4
    public static readonly EndStatment = 5
    public static readonly IHave = 6
    public static readonly NameAs = 7
    public static readonly ValueIs = 8
    public static readonly DeclareModule = 9
    public static readonly RanameAs = 10
    public static readonly Left5 = 11
    public static readonly Right5 = 12
    public static readonly Left6 = 13
    public static readonly Right6 = 14
    public static readonly DeclareString = 15
    public static readonly DeclareStringIs = 16
    public static readonly StringEmpty = 17
    public static readonly StringEscape1 = 18
    public static readonly StringEscape2 = 19
    public static readonly StringEscape3 = 20
    public static readonly Left = 21
    public static readonly Right = 22
    public static readonly Left3 = 23
    public static readonly Right3 = 24
    public static readonly Apply = 25
    public static readonly At = 26
    public static readonly StackIn = 27
    public static readonly Take = 28
    public static readonly StackPop = 29
    public static readonly Get = 30
    public static readonly The = 31
    public static readonly End = 32
    public static readonly FunctionStart = 33
    public static readonly FunctionEnd = 34
    public static readonly VariableStart = 35
    public static readonly VariableEnd = 36
    public static readonly DeclareMethod = 37
    public static readonly ThisIs = 38
    public static readonly Is = 39
    public static readonly Said = 40
    public static readonly MethodOf = 41
    public static readonly DeclareDigit = 42
    public static readonly DeclareDigitIs = 43
    public static readonly DeclareBoolean = 44
    public static readonly DeclareBooleanIs = 45
    public static readonly Boolean = 46
    public static readonly TRUE = 47
    public static readonly FALSE = 48
    public static readonly IntegerDigit = 49
    public static readonly FloatDigit = 50
    public static readonly IntegerDigitCN = 51
    public static readonly FloatDigitCN = 52
    public static readonly Equal = 53
    public static readonly Unequal = 54
    public static readonly Identifier = 55
    public static readonly Character = 56
    public static readonly LineComment = 57
    public static readonly PartComment = 58
    public static readonly WhiteSpace = 59
    public static readonly RULE_program = 0
    public static readonly RULE_statement = 1
    public static readonly RULE_ifStatement = 2
    public static readonly RULE_data = 3
    public static readonly RULE_declareData = 4
    public static readonly RULE_module = 5
    public static readonly RULE_declaremodule = 6
    public static readonly RULE_declareString = 7
    public static readonly RULE_string = 8
    public static readonly RULE_variable = 9
    public static readonly RULE_applyStatement = 10
    public static readonly RULE_applyFunction = 11
    public static readonly RULE_applyStack = 12
    public static readonly RULE_stackIn = 13
    public static readonly RULE_stackPopOne = 14
    public static readonly RULE_stackPop = 15
    public static readonly RULE_stackOut = 16
    public static readonly RULE_stackReturn = 17
    public static readonly RULE_declarefunction = 18
    public static readonly RULE_variables = 19
    public static readonly RULE_declareNumber = 20
    public static readonly RULE_declareBoolean = 21
    public static readonly RULE_number = 22
    public static readonly RULE_digits = 23
    public static readonly RULE_skipStatement = 24
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'program', 'statement', 'ifStatement', 'data', 'declareData', 'module', 
        'declaremodule', 'declareString', 'string', 'variable', 'applyStatement', 
        'applyFunction', 'applyStack', 'stackIn', 'stackPopOne', 'stackPop', 'stackOut', 
        'stackReturn', 'declarefunction', 'variables', 'declareNumber', 'declareBoolean', 
        'number', 'digits', 'skipStatement',
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, "'\u300A'", "'\u300B'", "'<<'", 
        "'>>'", undefined, undefined, undefined, undefined, undefined, undefined, 
        "'\u300C'", "'\u300D'", "'['", "']'",
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, 'If', 'EndDeclare', 'Else', 'Return', 'EndStatment', 'IHave', 
        'NameAs', 'ValueIs', 'DeclareModule', 'RanameAs', 'Left5', 'Right5', 'Left6', 
        'Right6', 'DeclareString', 'DeclareStringIs', 'StringEmpty', 'StringEscape1', 
        'StringEscape2', 'StringEscape3', 'Left', 'Right', 'Left3', 'Right3', 
        'Apply', 'At', 'StackIn', 'Take', 'StackPop', 'Get', 'The', 'End', 'FunctionStart', 
        'FunctionEnd', 'VariableStart', 'VariableEnd', 'DeclareMethod', 'ThisIs', 
        'Is', 'Said', 'MethodOf', 'DeclareDigit', 'DeclareDigitIs', 'DeclareBoolean', 
        'DeclareBooleanIs', 'Boolean', 'TRUE', 'FALSE', 'IntegerDigit', 'FloatDigit', 
        'IntegerDigitCN', 'FloatDigitCN', 'Equal', 'Unequal', 'Identifier', 'Character', 
        'LineComment', 'PartComment', 'WhiteSpace',
    ]
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WenyanParser._LITERAL_NAMES, WenyanParser._SYMBOLIC_NAMES, [])

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return WenyanParser.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace

    // @Override
    public get grammarFileName(): string { return 'Wenyan.g4' }

    // @Override
    public get ruleNames(): string[] { return WenyanParser.ruleNames }

    // @Override
    public get serializedATN(): string { return WenyanParser._serializedATN }

    constructor(input: TokenStream) {
        super(input)
        this._interp = new ParserATNSimulator(WenyanParser._ATN, this)
    }
    // @RuleVersion(0)
    public program(): ProgramContext {
        let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state)
        this.enterRule(_localctx, 0, WenyanParser.RULE_program)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 53
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WenyanParser.If) | (1 << WenyanParser.DeclareModule) | (1 << WenyanParser.DeclareString) | (1 << WenyanParser.StringEmpty) | (1 << WenyanParser.StringEscape1) | (1 << WenyanParser.StringEscape2) | (1 << WenyanParser.StringEscape3) | (1 << WenyanParser.Left) | (1 << WenyanParser.Left3) | (1 << WenyanParser.Apply) | (1 << WenyanParser.StackIn))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (WenyanParser.DeclareMethod - 37)) | (1 << (WenyanParser.DeclareDigit - 37)) | (1 << (WenyanParser.DeclareDigitIs - 37)) | (1 << (WenyanParser.DeclareBoolean - 37)) | (1 << (WenyanParser.DeclareBooleanIs - 37)) | (1 << (WenyanParser.Boolean - 37)) | (1 << (WenyanParser.IntegerDigit - 37)) | (1 << (WenyanParser.FloatDigit - 37)) | (1 << (WenyanParser.IntegerDigitCN - 37)) | (1 << (WenyanParser.FloatDigitCN - 37)) | (1 << (WenyanParser.Identifier - 37)) | (1 << (WenyanParser.Character - 37)))) !== 0)) {
                {
                {
                this.state = 50
                this.statement()
                }
                }
                this.state = 55
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            }
            this.state = 56
            this.match(WenyanParser.EOF)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public statement(): StatementContext {
        let _localctx: StatementContext = new StatementContext(this._ctx, this.state)
        this.enterRule(_localctx, 2, WenyanParser.RULE_statement)
        try {
            this.state = 68
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareModule:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 58
                this.declaremodule()
                }
                break
            case WenyanParser.DeclareDigit:
            case WenyanParser.DeclareDigitIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 59
                this.declareNumber()
                }
                break
            case WenyanParser.DeclareString:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 60
                this.declareString()
                }
                break
            case WenyanParser.DeclareBoolean:
            case WenyanParser.DeclareBooleanIs:
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 61
                this.declareBoolean()
                }
                break
            case WenyanParser.DeclareMethod:
                this.enterOuterAlt(_localctx, 5)
                {
                this.state = 62
                this.declarefunction()
                }
                break
            case WenyanParser.Left:
            case WenyanParser.Left3:
                this.enterOuterAlt(_localctx, 6)
                {
                this.state = 63
                this.declareData()
                }
                break
            case WenyanParser.If:
                this.enterOuterAlt(_localctx, 7)
                {
                this.state = 64
                this.ifStatement()
                }
                break
            case WenyanParser.Apply:
            case WenyanParser.StackIn:
                this.enterOuterAlt(_localctx, 8)
                {
                this.state = 65
                this.applyStatement()
                }
                break
            case WenyanParser.StringEmpty:
            case WenyanParser.StringEscape1:
            case WenyanParser.StringEscape2:
            case WenyanParser.StringEscape3:
            case WenyanParser.Boolean:
            case WenyanParser.IntegerDigit:
            case WenyanParser.FloatDigit:
            case WenyanParser.IntegerDigitCN:
            case WenyanParser.FloatDigitCN:
                this.enterOuterAlt(_localctx, 9)
                {
                this.state = 66
                this.data()
                }
                break
            case WenyanParser.Identifier:
            case WenyanParser.Character:
                this.enterOuterAlt(_localctx, 10)
                {
                this.state = 67
                this.skipStatement()
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public ifStatement(): IfStatementContext {
        let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state)
        this.enterRule(_localctx, 4, WenyanParser.RULE_ifStatement)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 70
            this.match(WenyanParser.If)
            this.state = 71
            this.statement()
            this.state = 72
            this.match(WenyanParser.EndDeclare)
            this.state = 73
            this.match(WenyanParser.Else)
            this.state = 74
            this.statement()
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public data(): DataContext {
        let _localctx: DataContext = new DataContext(this._ctx, this.state)
        this.enterRule(_localctx, 6, WenyanParser.RULE_data)
        try {
            this.state = 79
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.StringEmpty:
            case WenyanParser.StringEscape1:
            case WenyanParser.StringEscape2:
            case WenyanParser.StringEscape3:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 76
                this.string()
                }
                break
            case WenyanParser.IntegerDigit:
            case WenyanParser.FloatDigit:
            case WenyanParser.IntegerDigitCN:
            case WenyanParser.FloatDigitCN:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 77
                this.digits()
                }
                break
            case WenyanParser.Boolean:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 78
                this.match(WenyanParser.Boolean)
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public declareData(): DeclareDataContext {
        let _localctx: DeclareDataContext = new DeclareDataContext(this._ctx, this.state)
        this.enterRule(_localctx, 8, WenyanParser.RULE_declareData)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 81
            this.variable()
            this.state = 82
            this.match(WenyanParser.EndDeclare)
            this.state = 83
            this.data()
            this.state = 84
            this.match(WenyanParser.EndStatment)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public module(): ModuleContext {
        let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state)
        this.enterRule(_localctx, 10, WenyanParser.RULE_module)
        try {
            this.state = 95
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.Left3:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 86
                this.match(WenyanParser.Left3)
                this.state = 87
                this.match(WenyanParser.Identifier)
                this.state = 88
                this.match(WenyanParser.Right3)
                }
                break
            case WenyanParser.Left5:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 89
                this.match(WenyanParser.Left5)
                this.state = 90
                this.match(WenyanParser.Identifier)
                this.state = 91
                this.match(WenyanParser.Right5)
                }
                break
            case WenyanParser.Left6:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 92
                this.match(WenyanParser.Left6)
                this.state = 93
                this.match(WenyanParser.Identifier)
                this.state = 94
                this.match(WenyanParser.Right6)
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public declaremodule(): DeclaremoduleContext {
        let _localctx: DeclaremoduleContext = new DeclaremoduleContext(this._ctx, this.state)
        this.enterRule(_localctx, 12, WenyanParser.RULE_declaremodule)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 97
            this.match(WenyanParser.DeclareModule)
            this.state = 98
            _localctx._m = this.module()
            this.state = 99
            this.match(WenyanParser.RanameAs)
            this.state = 100
            _localctx._v = this.variable()
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public declareString(): DeclareStringContext {
        let _localctx: DeclareStringContext = new DeclareStringContext(this._ctx, this.state)
        this.enterRule(_localctx, 14, WenyanParser.RULE_declareString)
        let _la: number
        try {
            this.state = 118
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
            case 1:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 102
                this.match(WenyanParser.DeclareString)
                this.state = 104
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 103
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 106
                _localctx._s = this.string()
                this.state = 107
                this.match(WenyanParser.NameAs)
                this.state = 108
                _localctx._v = this.variable()
                }
                break

            case 2:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 110
                this.match(WenyanParser.DeclareString)
                this.state = 111
                this.match(WenyanParser.NameAs)
                this.state = 112
                _localctx._v = this.variable()
                this.state = 114
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 113
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 116
                _localctx._s = this.string()
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public string(): StringContext {
        let _localctx: StringContext = new StringContext(this._ctx, this.state)
        this.enterRule(_localctx, 16, WenyanParser.RULE_string)
        try {
            this.state = 124
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.StringEmpty:
                _localctx = new StringRemove0Context(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 120
                this.match(WenyanParser.StringEmpty)
                }
                break
            case WenyanParser.StringEscape1:
                _localctx = new StringRemove2Context(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 121
                this.match(WenyanParser.StringEscape1)
                }
                break
            case WenyanParser.StringEscape2:
                _localctx = new StringRemove1Context(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 122
                this.match(WenyanParser.StringEscape2)
                }
                break
            case WenyanParser.StringEscape3:
                _localctx = new StringRemove1Context(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 123
                this.match(WenyanParser.StringEscape3)
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public variable(): VariableContext {
        let _localctx: VariableContext = new VariableContext(this._ctx, this.state)
        this.enterRule(_localctx, 18, WenyanParser.RULE_variable)
        try {
            this.state = 132
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.Left:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 126
                this.match(WenyanParser.Left)
                this.state = 127
                _localctx._v = this.match(WenyanParser.Identifier)
                this.state = 128
                this.match(WenyanParser.Right)
                }
                break
            case WenyanParser.Left3:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 129
                this.match(WenyanParser.Left3)
                this.state = 130
                _localctx._v = this.match(WenyanParser.Identifier)
                this.state = 131
                this.match(WenyanParser.Right3)
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public applyStatement(): ApplyStatementContext {
        let _localctx: ApplyStatementContext = new ApplyStatementContext(this._ctx, this.state)
        this.enterRule(_localctx, 20, WenyanParser.RULE_applyStatement)
        try {
            this.state = 136
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.Apply:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 134
                this.applyFunction()
                }
                break
            case WenyanParser.StackIn:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 135
                this.applyStack()
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public applyFunction(): ApplyFunctionContext {
        let _localctx: ApplyFunctionContext = new ApplyFunctionContext(this._ctx, this.state)
        this.enterRule(_localctx, 22, WenyanParser.RULE_applyFunction)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 138
            this.match(WenyanParser.Apply)
            this.state = 139
            _localctx._f = this.variable()
            this.state = 140
            this.match(WenyanParser.At)
            this.state = 141
            _localctx._x = this.variable()
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public applyStack(): ApplyStackContext {
        let _localctx: ApplyStackContext = new ApplyStackContext(this._ctx, this.state)
        this.enterRule(_localctx, 24, WenyanParser.RULE_applyStack)
        try {
            let _alt: number
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 143
            this.stackIn()
            this.state = 147
            this._errHandler.sync(this)
            _alt = 1
            do {
                switch (_alt) {
                case 1:
                    {
                    this.state = 147
                    this._errHandler.sync(this)
                    switch (this._input.LA(1)) {
                    case WenyanParser.StackIn:
                        {
                        this.state = 144
                        this.stackIn()
                        }
                        break
                    case WenyanParser.StackPop:
                        {
                        this.state = 145
                        this.stackPopOne()
                        }
                        break
                    case WenyanParser.Get:
                        {
                        this.state = 146
                        this.stackPop()
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    }
                    break
                default:
                    throw new NoViableAltException(this)
                }
                this.state = 149
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx)
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
            this.state = 153
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
            case 1:
                {
                this.state = 151
                this.stackOut()
                }
                break

            case 2:
                {
                this.state = 152
                this.stackReturn()
                }
                break
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public stackIn(): StackInContext {
        let _localctx: StackInContext = new StackInContext(this._ctx, this.state)
        this.enterRule(_localctx, 26, WenyanParser.RULE_stackIn)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 155
            this.match(WenyanParser.StackIn)
            this.state = 157
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
                {
                {
                this.state = 156
                this.variable()
                }
                }
                this.state = 159
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            } while (_la === WenyanParser.Left || _la === WenyanParser.Left3)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public stackPopOne(): StackPopOneContext {
        let _localctx: StackPopOneContext = new StackPopOneContext(this._ctx, this.state)
        this.enterRule(_localctx, 28, WenyanParser.RULE_stackPopOne)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 161
            this.match(WenyanParser.StackPop)
            this.state = 162
            this.variable()
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public stackPop(): StackPopContext {
        let _localctx: StackPopContext = new StackPopContext(this._ctx, this.state)
        this.enterRule(_localctx, 30, WenyanParser.RULE_stackPop)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 164
            this.match(WenyanParser.Get)
            this.state = 165
            this.digits()
            this.state = 166
            this.match(WenyanParser.StackPop)
            this.state = 167
            this.variable()
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public stackOut(): StackOutContext {
        let _localctx: StackOutContext = new StackOutContext(this._ctx, this.state)
        this.enterRule(_localctx, 32, WenyanParser.RULE_stackOut)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 169
            this.match(WenyanParser.Get)
            this.state = 170
            this.variable()
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public stackReturn(): StackReturnContext {
        let _localctx: StackReturnContext = new StackReturnContext(this._ctx, this.state)
        this.enterRule(_localctx, 34, WenyanParser.RULE_stackReturn)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 172
            this.match(WenyanParser.Get)
            this.state = 173
            this.match(WenyanParser.The)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public declarefunction(): DeclarefunctionContext {
        let _localctx: DeclarefunctionContext = new DeclarefunctionContext(this._ctx, this.state)
        this.enterRule(_localctx, 36, WenyanParser.RULE_declarefunction)
        try {
            this.state = 185
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
            case 1:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 175
                this.match(WenyanParser.DeclareMethod)
                this.state = 176
                this.match(WenyanParser.NameAs)
                this.state = 177
                this.variable()
                this.state = 178
                this.variables()
                this.state = 179
                this.match(WenyanParser.FunctionStart)
                this.state = 180
                this.match(WenyanParser.FunctionEnd)
                }
                break

            case 2:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 182
                this.match(WenyanParser.DeclareMethod)
                this.state = 183
                this.match(WenyanParser.NameAs)
                this.state = 184
                this.variable()
                }
                break
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public variables(): VariablesContext {
        let _localctx: VariablesContext = new VariablesContext(this._ctx, this.state)
        this.enterRule(_localctx, 38, WenyanParser.RULE_variables)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 187
            this.match(WenyanParser.VariableStart)
            this.state = 190
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
                {
                {
                this.state = 188
                this.match(WenyanParser.NameAs)
                this.state = 189
                this.variable()
                }
                }
                this.state = 192
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            } while (_la === WenyanParser.NameAs)
            this.state = 194
            this.match(WenyanParser.VariableEnd)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public declareNumber(): DeclareNumberContext {
        let _localctx: DeclareNumberContext = new DeclareNumberContext(this._ctx, this.state)
        this.enterRule(_localctx, 40, WenyanParser.RULE_declareNumber)
        let _la: number
        try {
            this.state = 213
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareDigit:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 196
                this.match(WenyanParser.DeclareDigit)
                this.state = 198
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 197
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 200
                _localctx._n = this.number()
                this.state = 201
                this.match(WenyanParser.NameAs)
                this.state = 202
                _localctx._v = this.variable()
                this.state = 204
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 203
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            case WenyanParser.DeclareDigitIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 206
                this.match(WenyanParser.DeclareDigitIs)
                this.state = 207
                _localctx._n = this.number()
                this.state = 208
                this.match(WenyanParser.NameAs)
                this.state = 209
                _localctx._v = this.variable()
                this.state = 211
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 210
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public declareBoolean(): DeclareBooleanContext {
        let _localctx: DeclareBooleanContext = new DeclareBooleanContext(this._ctx, this.state)
        this.enterRule(_localctx, 42, WenyanParser.RULE_declareBoolean)
        let _la: number
        try {
            this.state = 232
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareBoolean:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 215
                this.match(WenyanParser.DeclareBoolean)
                this.state = 217
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 216
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 219
                this.number()
                this.state = 220
                this.match(WenyanParser.NameAs)
                this.state = 221
                _localctx._v = this.variable()
                this.state = 223
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 222
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            case WenyanParser.DeclareBooleanIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 225
                this.match(WenyanParser.DeclareBooleanIs)
                this.state = 226
                this.number()
                this.state = 227
                this.match(WenyanParser.NameAs)
                this.state = 228
                _localctx._v = this.variable()
                this.state = 230
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 229
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public number(): NumberContext {
        let _localctx: NumberContext = new NumberContext(this._ctx, this.state)
        this.enterRule(_localctx, 44, WenyanParser.RULE_number)
        try {
            this.state = 239
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.Left3:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 234
                this.match(WenyanParser.Left3)
                this.state = 235
                _localctx._n = this.digits()
                this.state = 236
                this.match(WenyanParser.Right3)
                }
                break
            case WenyanParser.IntegerDigit:
            case WenyanParser.FloatDigit:
            case WenyanParser.IntegerDigitCN:
            case WenyanParser.FloatDigitCN:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 238
                _localctx._n = this.digits()
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public digits(): DigitsContext {
        let _localctx: DigitsContext = new DigitsContext(this._ctx, this.state)
        this.enterRule(_localctx, 46, WenyanParser.RULE_digits)
        try {
            let _alt: number
            this.state = 261
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.IntegerDigit:
                _localctx = new NumberIntegerContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 242
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 241
                        this.match(WenyanParser.IntegerDigit)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 244
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case WenyanParser.IntegerDigitCN:
                _localctx = new NumberIntegerCNContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 247
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 246
                        this.match(WenyanParser.IntegerDigitCN)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 249
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case WenyanParser.FloatDigit:
                _localctx = new NumberFloatContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 252
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 251
                        this.match(WenyanParser.FloatDigit)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 254
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case WenyanParser.FloatDigitCN:
                _localctx = new NumberFloatCNContext(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 257
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 256
                        this.match(WenyanParser.FloatDigitCN)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 259
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            default:
                throw new NoViableAltException(this)
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }
    // @RuleVersion(0)
    public skipStatement(): SkipStatementContext {
        let _localctx: SkipStatementContext = new SkipStatementContext(this._ctx, this.state)
        this.enterRule(_localctx, 48, WenyanParser.RULE_skipStatement)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 263
            _la = this._input.LA(1)
            if (!(_la === WenyanParser.Identifier || _la === WenyanParser.Character)) {
            this._errHandler.recoverInline(this)
            } else {
                if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
            }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException) {
                _localctx.exception = re
                this._errHandler.reportError(this, re)
                this._errHandler.recover(this, re)
            } else {
                throw re
            }
        }
        finally {
            this.exitRule()
        }
        return _localctx
    }

    public static readonly _serializedATN: string =
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03=\u010C\x04\x02' +
        '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
        '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
        '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
        '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
        '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x07\x026\n\x02\f\x02\x0E' +
        '\x029\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
        '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03G\n\x03\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05R\n\x05\x03' +
        '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03' +
        '\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07b\n\x07\x03\b\x03\b\x03\b' +
        '\x03\b\x03\b\x03\t\x03\t\x05\tk\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03' +
        '\t\x03\t\x03\t\x05\tu\n\t\x03\t\x03\t\x05\ty\n\t\x03\n\x03\n\x03\n\x03' +
        '\n\x05\n\x7F\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x87\n\v\x03' +
        '\f\x03\f\x05\f\x8B\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03' +
        '\x0E\x03\x0E\x06\x0E\x96\n\x0E\r\x0E\x0E\x0E\x97\x03\x0E\x03\x0E\x05\x0E' +
        '\x9C\n\x0E\x03\x0F\x03\x0F\x06\x0F\xA0\n\x0F\r\x0F\x0E\x0F\xA1\x03\x10' +
        '\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12' +
        '\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
        '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xBC\n\x14\x03\x15\x03' +
        '\x15\x03\x15\x06\x15\xC1\n\x15\r\x15\x0E\x15\xC2\x03\x15\x03\x15\x03\x16' +
        '\x03\x16\x05\x16\xC9\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xCF' +
        '\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xD6\n\x16\x05\x16' +
        '\xD8\n\x16\x03\x17\x03\x17\x05\x17\xDC\n\x17\x03\x17\x03\x17\x03\x17\x03' +
        '\x17\x05\x17\xE2\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17' +
        '\xE9\n\x17\x05\x17\xEB\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05' +
        '\x18\xF2\n\x18\x03\x19\x06\x19\xF5\n\x19\r\x19\x0E\x19\xF6\x03\x19\x06' +
        '\x19\xFA\n\x19\r\x19\x0E\x19\xFB\x03\x19\x06\x19\xFF\n\x19\r\x19\x0E\x19' +
        '\u0100\x03\x19\x06\x19\u0104\n\x19\r\x19\x0E\x19\u0105\x05\x19\u0108\n' +
        '\x19\x03\x1A\x03\x1A\x03\x1A\x02\x02\x02\x1B\x02\x02\x04\x02\x06\x02\b' +
        '\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02' +
        '\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02\x02' +
        '\x03\x03\x029:\x02\u011F\x027\x03\x02\x02\x02\x04F\x03\x02\x02\x02\x06' +
        'H\x03\x02\x02\x02\bQ\x03\x02\x02\x02\nS\x03\x02\x02\x02\fa\x03\x02\x02' +
        '\x02\x0Ec\x03\x02\x02\x02\x10x\x03\x02\x02\x02\x12~\x03\x02\x02\x02\x14' +
        '\x86\x03\x02\x02\x02\x16\x8A\x03\x02\x02\x02\x18\x8C\x03\x02\x02\x02\x1A' +
        '\x91\x03\x02\x02\x02\x1C\x9D\x03\x02\x02\x02\x1E\xA3\x03\x02\x02\x02 ' +
        '\xA6\x03\x02\x02\x02"\xAB\x03\x02\x02\x02$\xAE\x03\x02\x02\x02&\xBB\x03' +
        '\x02\x02\x02(\xBD\x03\x02\x02\x02*\xD7\x03\x02\x02\x02,\xEA\x03\x02\x02' +
        '\x02.\xF1\x03\x02\x02\x020\u0107\x03\x02\x02\x022\u0109\x03\x02\x02\x02' +
        '46\x05\x04\x03\x0254\x03\x02\x02\x0269\x03\x02\x02\x0275\x03\x02\x02\x02' +
        '78\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02\x02:;\x07\x02\x02\x03' +
        ';\x03\x03\x02\x02\x02<G\x05\x0E\b\x02=G\x05*\x16\x02>G\x05\x10\t\x02?' +
        'G\x05,\x17\x02@G\x05&\x14\x02AG\x05\n\x06\x02BG\x05\x06\x04\x02CG\x05' +
        '\x16\f\x02DG\x05\b\x05\x02EG\x052\x1A\x02F<\x03\x02\x02\x02F=\x03\x02' +
        '\x02\x02F>\x03\x02\x02\x02F?\x03\x02\x02\x02F@\x03\x02\x02\x02FA\x03\x02' +
        '\x02\x02FB\x03\x02\x02\x02FC\x03\x02\x02\x02FD\x03\x02\x02\x02FE\x03\x02' +
        '\x02\x02G\x05\x03\x02\x02\x02HI\x07\x03\x02\x02IJ\x05\x04\x03\x02JK\x07' +
        '\x04\x02\x02KL\x07\x05\x02\x02LM\x05\x04\x03\x02M\x07\x03\x02\x02\x02' +
        'NR\x05\x12\n\x02OR\x050\x19\x02PR\x070\x02\x02QN\x03\x02\x02\x02QO\x03' +
        '\x02\x02\x02QP\x03\x02\x02\x02R\t\x03\x02\x02\x02ST\x05\x14\v\x02TU\x07' +
        '\x04\x02\x02UV\x05\b\x05\x02VW\x07\x07\x02\x02W\v\x03\x02\x02\x02XY\x07' +
        '\x19\x02\x02YZ\x079\x02\x02Zb\x07\x1A\x02\x02[\\\x07\r\x02\x02\\]\x07' +
        '9\x02\x02]b\x07\x0E\x02\x02^_\x07\x0F\x02\x02_`\x079\x02\x02`b\x07\x10' +
        '\x02\x02aX\x03\x02\x02\x02a[\x03\x02\x02\x02a^\x03\x02\x02\x02b\r\x03' +
        '\x02\x02\x02cd\x07\v\x02\x02de\x05\f\x07\x02ef\x07\f\x02\x02fg\x05\x14' +
        '\v\x02g\x0F\x03\x02\x02\x02hj\x07\x11\x02\x02ik\x07\n\x02\x02ji\x03\x02' +
        '\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x05\x12\n\x02mn\x07\t\x02' +
        '\x02no\x05\x14\v\x02oy\x03\x02\x02\x02pq\x07\x11\x02\x02qr\x07\t\x02\x02' +
        'rt\x05\x14\v\x02su\x07\n\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02u' +
        'v\x03\x02\x02\x02vw\x05\x12\n\x02wy\x03\x02\x02\x02xh\x03\x02\x02\x02' +
        'xp\x03\x02\x02\x02y\x11\x03\x02\x02\x02z\x7F\x07\x13\x02\x02{\x7F\x07' +
        '\x14\x02\x02|\x7F\x07\x15\x02\x02}\x7F\x07\x16\x02\x02~z\x03\x02\x02\x02' +
        '~{\x03\x02\x02\x02~|\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x13\x03\x02' +
        '\x02\x02\x80\x81\x07\x17\x02\x02\x81\x82\x079\x02\x02\x82\x87\x07\x18' +
        '\x02\x02\x83\x84\x07\x19\x02\x02\x84\x85\x079\x02\x02\x85\x87\x07\x1A' +
        '\x02\x02\x86\x80\x03\x02\x02\x02\x86\x83\x03\x02\x02\x02\x87\x15\x03\x02' +
        '\x02\x02\x88\x8B\x05\x18\r\x02\x89\x8B\x05\x1A\x0E\x02\x8A\x88\x03\x02' +
        '\x02\x02\x8A\x89\x03\x02\x02\x02\x8B\x17\x03\x02\x02\x02\x8C\x8D\x07\x1B' +
        '\x02\x02\x8D\x8E\x05\x14\v\x02\x8E\x8F\x07\x1C\x02\x02\x8F\x90\x05\x14' +
        '\v\x02\x90\x19\x03\x02\x02\x02\x91\x95\x05\x1C\x0F\x02\x92\x96\x05\x1C' +
        '\x0F\x02\x93\x96\x05\x1E\x10\x02\x94\x96\x05 \x11\x02\x95\x92\x03\x02' +
        '\x02\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02' +
        '\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9B\x03\x02' +
        '\x02\x02\x99\x9C\x05"\x12\x02\x9A\x9C\x05$\x13\x02\x9B\x99\x03\x02\x02' +
        '\x02\x9B\x9A\x03\x02\x02\x02\x9C\x1B\x03\x02\x02\x02\x9D\x9F\x07\x1D\x02' +
        '\x02\x9E\xA0\x05\x14\v\x02\x9F\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02' +
        '\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\x1D\x03\x02\x02' +
        '\x02\xA3\xA4\x07\x1F\x02\x02\xA4\xA5\x05\x14\v\x02\xA5\x1F\x03\x02\x02' +
        '\x02\xA6\xA7\x07 \x02\x02\xA7\xA8\x050\x19\x02\xA8\xA9\x07\x1F\x02\x02' +
        '\xA9\xAA\x05\x14\v\x02\xAA!\x03\x02\x02\x02\xAB\xAC\x07 \x02\x02\xAC\xAD' +
        '\x05\x14\v\x02\xAD#\x03\x02\x02\x02\xAE\xAF\x07 \x02\x02\xAF\xB0\x07!' +
        "\x02\x02\xB0%\x03\x02\x02\x02\xB1\xB2\x07\'\x02\x02\xB2\xB3\x07\t\x02" +
        '\x02\xB3\xB4\x05\x14\v\x02\xB4\xB5\x05(\x15\x02\xB5\xB6\x07#\x02\x02\xB6' +
        "\xB7\x07$\x02\x02\xB7\xBC\x03\x02\x02\x02\xB8\xB9\x07\'\x02\x02\xB9\xBA" +
        '\x07\t\x02\x02\xBA\xBC\x05\x14\v\x02\xBB\xB1\x03\x02\x02\x02\xBB\xB8\x03' +
        "\x02\x02\x02\xBC\'\x03\x02\x02\x02\xBD\xC0\x07%\x02\x02\xBE\xBF\x07\t" +
        '\x02\x02\xBF\xC1\x05\x14\v\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x03\x02' +
        '\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x03\x02' +
        '\x02\x02\xC4\xC5\x07&\x02\x02\xC5)\x03\x02\x02\x02\xC6\xC8\x07,\x02\x02' +
        '\xC7\xC9\x07\n\x02\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02' +
        '\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x05.\x18\x02\xCB\xCC\x07\t\x02\x02\xCC' +
        '\xCE\x05\x14\v\x02\xCD\xCF\x07\x07\x02\x02\xCE\xCD\x03\x02\x02\x02\xCE' +
        '\xCF\x03\x02\x02\x02\xCF\xD8\x03\x02\x02\x02\xD0\xD1\x07-\x02\x02\xD1' +
        '\xD2\x05.\x18\x02\xD2\xD3\x07\t\x02\x02\xD3\xD5\x05\x14\v\x02\xD4\xD6' +
        '\x07\x07\x02\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8' +
        '\x03\x02\x02\x02\xD7\xC6\x03\x02\x02\x02\xD7\xD0\x03\x02\x02\x02\xD8+' +
        '\x03\x02\x02\x02\xD9\xDB\x07.\x02\x02\xDA\xDC\x07\n\x02\x02\xDB\xDA\x03' +
        '\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x05' +
        '.\x18\x02\xDE\xDF\x07\t\x02\x02\xDF\xE1\x05\x14\v\x02\xE0\xE2\x07\x07' +
        '\x02\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xEB\x03\x02' +
        '\x02\x02\xE3\xE4\x07/\x02\x02\xE4\xE5\x05.\x18\x02\xE5\xE6\x07\t\x02\x02' +
        '\xE6\xE8\x05\x14\v\x02\xE7\xE9\x07\x07\x02\x02\xE8\xE7\x03\x02\x02\x02' +
        '\xE8\xE9\x03\x02\x02\x02\xE9\xEB\x03\x02\x02\x02\xEA\xD9\x03\x02\x02\x02' +
        '\xEA\xE3\x03\x02\x02\x02\xEB-\x03\x02\x02\x02\xEC\xED\x07\x19\x02\x02' +
        '\xED\xEE\x050\x19\x02\xEE\xEF\x07\x1A\x02\x02\xEF\xF2\x03\x02\x02\x02' +
        '\xF0\xF2\x050\x19\x02\xF1\xEC\x03\x02\x02\x02\xF1\xF0\x03\x02\x02\x02' +
        '\xF2/\x03\x02\x02\x02\xF3\xF5\x073\x02\x02\xF4\xF3\x03\x02\x02\x02\xF5' +
        '\xF6\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7' +
        '\u0108\x03\x02\x02\x02\xF8\xFA\x075\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA' +
        '\xFB\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC' +
        '\u0108\x03\x02\x02\x02\xFD\xFF\x074\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF' +
        '\u0100\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02' +
        '\x02\u0101\u0108\x03\x02\x02\x02\u0102\u0104\x076\x02\x02\u0103\u0102' +
        '\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02' +
        '\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\xF4\x03' +
        '\x02\x02\x02\u0107\xF9\x03\x02\x02\x02\u0107\xFE\x03\x02\x02\x02\u0107' +
        '\u0103\x03\x02\x02\x02\u01081\x03\x02\x02\x02\u0109\u010A\t\x02\x02\x02' +
        '\u010A3\x03\x02\x02\x02 7FQajtx~\x86\x8A\x95\x97\x9B\xA1\xBB\xC2\xC8\xCE' +
        '\xD5\xD7\xDB\xE1\xE8\xEA\xF1\xF6\xFB\u0100\u0105\u0107'
    public static __ATN: ATN
    public static get _ATN(): ATN {
        if (!WenyanParser.__ATN) {
            WenyanParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WenyanParser._serializedATN))
        }

        return WenyanParser.__ATN
    }

}

export class ProgramContext extends ParserRuleContext {
    public EOF(): TerminalNode { return this.getToken(WenyanParser.EOF, 0) }
    public statement(): StatementContext[]
    public statement(i: number): StatementContext
    public statement(i?: number): StatementContext | StatementContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext)
        } else {
            return this.getRuleContext(i, StatementContext)
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_program }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterProgram) {
            listener.enterProgram(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitProgram) {
            listener.exitProgram(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StatementContext extends ParserRuleContext {
    public declaremodule(): DeclaremoduleContext | undefined {
        return this.tryGetRuleContext(0, DeclaremoduleContext)
    }
    public declareNumber(): DeclareNumberContext | undefined {
        return this.tryGetRuleContext(0, DeclareNumberContext)
    }
    public declareString(): DeclareStringContext | undefined {
        return this.tryGetRuleContext(0, DeclareStringContext)
    }
    public declareBoolean(): DeclareBooleanContext | undefined {
        return this.tryGetRuleContext(0, DeclareBooleanContext)
    }
    public declarefunction(): DeclarefunctionContext | undefined {
        return this.tryGetRuleContext(0, DeclarefunctionContext)
    }
    public declareData(): DeclareDataContext | undefined {
        return this.tryGetRuleContext(0, DeclareDataContext)
    }
    public ifStatement(): IfStatementContext | undefined {
        return this.tryGetRuleContext(0, IfStatementContext)
    }
    public applyStatement(): ApplyStatementContext | undefined {
        return this.tryGetRuleContext(0, ApplyStatementContext)
    }
    public data(): DataContext | undefined {
        return this.tryGetRuleContext(0, DataContext)
    }
    public skipStatement(): SkipStatementContext | undefined {
        return this.tryGetRuleContext(0, SkipStatementContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_statement }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStatement) {
            listener.enterStatement(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStatement) {
            listener.exitStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class IfStatementContext extends ParserRuleContext {
    public If(): TerminalNode { return this.getToken(WenyanParser.If, 0) }
    public statement(): StatementContext[]
    public statement(i: number): StatementContext
    public statement(i?: number): StatementContext | StatementContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext)
        } else {
            return this.getRuleContext(i, StatementContext)
        }
    }
    public EndDeclare(): TerminalNode { return this.getToken(WenyanParser.EndDeclare, 0) }
    public Else(): TerminalNode { return this.getToken(WenyanParser.Else, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_ifStatement }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterIfStatement) {
            listener.enterIfStatement(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitIfStatement) {
            listener.exitIfStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DataContext extends ParserRuleContext {
    public string(): StringContext | undefined {
        return this.tryGetRuleContext(0, StringContext)
    }
    public digits(): DigitsContext | undefined {
        return this.tryGetRuleContext(0, DigitsContext)
    }
    public Boolean(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Boolean, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_data }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterData) {
            listener.enterData(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitData) {
            listener.exitData(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitData) {
            return visitor.visitData(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DeclareDataContext extends ParserRuleContext {
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    public EndDeclare(): TerminalNode { return this.getToken(WenyanParser.EndDeclare, 0) }
    public data(): DataContext {
        return this.getRuleContext(0, DataContext)
    }
    public EndStatment(): TerminalNode { return this.getToken(WenyanParser.EndStatment, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_declareData }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterDeclareData) {
            listener.enterDeclareData(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitDeclareData) {
            listener.exitDeclareData(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitDeclareData) {
            return visitor.visitDeclareData(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ModuleContext extends ParserRuleContext {
    public Left3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left3, 0) }
    public Identifier(): TerminalNode { return this.getToken(WenyanParser.Identifier, 0) }
    public Right3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right3, 0) }
    public Left5(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left5, 0) }
    public Right5(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right5, 0) }
    public Left6(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left6, 0) }
    public Right6(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right6, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_module }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterModule) {
            listener.enterModule(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitModule) {
            listener.exitModule(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitModule) {
            return visitor.visitModule(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DeclaremoduleContext extends ParserRuleContext {
    public _m: ModuleContext
    public _v: VariableContext
    public DeclareModule(): TerminalNode { return this.getToken(WenyanParser.DeclareModule, 0) }
    public RanameAs(): TerminalNode { return this.getToken(WenyanParser.RanameAs, 0) }
    public module(): ModuleContext {
        return this.getRuleContext(0, ModuleContext)
    }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_declaremodule }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterDeclaremodule) {
            listener.enterDeclaremodule(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitDeclaremodule) {
            listener.exitDeclaremodule(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitDeclaremodule) {
            return visitor.visitDeclaremodule(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DeclareStringContext extends ParserRuleContext {
    public _s: StringContext
    public _v: VariableContext
    public DeclareString(): TerminalNode { return this.getToken(WenyanParser.DeclareString, 0) }
    public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0) }
    public string(): StringContext {
        return this.getRuleContext(0, StringContext)
    }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    public ValueIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.ValueIs, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_declareString }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterDeclareString) {
            listener.enterDeclareString(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitDeclareString) {
            listener.exitDeclareString(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitDeclareString) {
            return visitor.visitDeclareString(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StringContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_string }
    public copyFrom(ctx: StringContext): void {
        super.copyFrom(ctx)
    }
}
export class StringRemove0Context extends StringContext {
    public StringEmpty(): TerminalNode { return this.getToken(WenyanParser.StringEmpty, 0) }
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStringRemove0) {
            listener.enterStringRemove0(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStringRemove0) {
            listener.exitStringRemove0(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStringRemove0) {
            return visitor.visitStringRemove0(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringRemove2Context extends StringContext {
    public StringEscape1(): TerminalNode { return this.getToken(WenyanParser.StringEscape1, 0) }
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStringRemove2) {
            listener.enterStringRemove2(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStringRemove2) {
            listener.exitStringRemove2(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStringRemove2) {
            return visitor.visitStringRemove2(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class StringRemove1Context extends StringContext {
    public StringEscape2(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.StringEscape2, 0) }
    public StringEscape3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.StringEscape3, 0) }
    constructor(ctx: StringContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStringRemove1) {
            listener.enterStringRemove1(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStringRemove1) {
            listener.exitStringRemove1(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStringRemove1) {
            return visitor.visitStringRemove1(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class VariableContext extends ParserRuleContext {
    public _v: Token
    public Left(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left, 0) }
    public Right(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right, 0) }
    public Identifier(): TerminalNode { return this.getToken(WenyanParser.Identifier, 0) }
    public Left3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left3, 0) }
    public Right3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right3, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_variable }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterVariable) {
            listener.enterVariable(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitVariable) {
            listener.exitVariable(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitVariable) {
            return visitor.visitVariable(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ApplyStatementContext extends ParserRuleContext {
    public applyFunction(): ApplyFunctionContext | undefined {
        return this.tryGetRuleContext(0, ApplyFunctionContext)
    }
    public applyStack(): ApplyStackContext | undefined {
        return this.tryGetRuleContext(0, ApplyStackContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_applyStatement }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterApplyStatement) {
            listener.enterApplyStatement(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitApplyStatement) {
            listener.exitApplyStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitApplyStatement) {
            return visitor.visitApplyStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ApplyFunctionContext extends ParserRuleContext {
    public _f: VariableContext
    public _x: VariableContext
    public Apply(): TerminalNode { return this.getToken(WenyanParser.Apply, 0) }
    public At(): TerminalNode { return this.getToken(WenyanParser.At, 0) }
    public variable(): VariableContext[]
    public variable(i: number): VariableContext
    public variable(i?: number): VariableContext | VariableContext[] {
        if (i === undefined) {
            return this.getRuleContexts(VariableContext)
        } else {
            return this.getRuleContext(i, VariableContext)
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_applyFunction }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterApplyFunction) {
            listener.enterApplyFunction(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitApplyFunction) {
            listener.exitApplyFunction(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitApplyFunction) {
            return visitor.visitApplyFunction(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class ApplyStackContext extends ParserRuleContext {
    public stackIn(): StackInContext[]
    public stackIn(i: number): StackInContext
    public stackIn(i?: number): StackInContext | StackInContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StackInContext)
        } else {
            return this.getRuleContext(i, StackInContext)
        }
    }
    public stackOut(): StackOutContext | undefined {
        return this.tryGetRuleContext(0, StackOutContext)
    }
    public stackReturn(): StackReturnContext | undefined {
        return this.tryGetRuleContext(0, StackReturnContext)
    }
    public stackPopOne(): StackPopOneContext[]
    public stackPopOne(i: number): StackPopOneContext
    public stackPopOne(i?: number): StackPopOneContext | StackPopOneContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StackPopOneContext)
        } else {
            return this.getRuleContext(i, StackPopOneContext)
        }
    }
    public stackPop(): StackPopContext[]
    public stackPop(i: number): StackPopContext
    public stackPop(i?: number): StackPopContext | StackPopContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StackPopContext)
        } else {
            return this.getRuleContext(i, StackPopContext)
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_applyStack }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterApplyStack) {
            listener.enterApplyStack(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitApplyStack) {
            listener.exitApplyStack(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitApplyStack) {
            return visitor.visitApplyStack(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StackInContext extends ParserRuleContext {
    public StackIn(): TerminalNode { return this.getToken(WenyanParser.StackIn, 0) }
    public variable(): VariableContext[]
    public variable(i: number): VariableContext
    public variable(i?: number): VariableContext | VariableContext[] {
        if (i === undefined) {
            return this.getRuleContexts(VariableContext)
        } else {
            return this.getRuleContext(i, VariableContext)
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_stackIn }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStackIn) {
            listener.enterStackIn(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStackIn) {
            listener.exitStackIn(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStackIn) {
            return visitor.visitStackIn(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StackPopOneContext extends ParserRuleContext {
    public StackPop(): TerminalNode { return this.getToken(WenyanParser.StackPop, 0) }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_stackPopOne }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStackPopOne) {
            listener.enterStackPopOne(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStackPopOne) {
            listener.exitStackPopOne(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStackPopOne) {
            return visitor.visitStackPopOne(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StackPopContext extends ParserRuleContext {
    public Get(): TerminalNode { return this.getToken(WenyanParser.Get, 0) }
    public digits(): DigitsContext {
        return this.getRuleContext(0, DigitsContext)
    }
    public StackPop(): TerminalNode { return this.getToken(WenyanParser.StackPop, 0) }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_stackPop }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStackPop) {
            listener.enterStackPop(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStackPop) {
            listener.exitStackPop(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStackPop) {
            return visitor.visitStackPop(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StackOutContext extends ParserRuleContext {
    public Get(): TerminalNode { return this.getToken(WenyanParser.Get, 0) }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_stackOut }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStackOut) {
            listener.enterStackOut(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStackOut) {
            listener.exitStackOut(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStackOut) {
            return visitor.visitStackOut(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class StackReturnContext extends ParserRuleContext {
    public Get(): TerminalNode { return this.getToken(WenyanParser.Get, 0) }
    public The(): TerminalNode { return this.getToken(WenyanParser.The, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_stackReturn }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterStackReturn) {
            listener.enterStackReturn(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitStackReturn) {
            listener.exitStackReturn(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitStackReturn) {
            return visitor.visitStackReturn(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DeclarefunctionContext extends ParserRuleContext {
    public DeclareMethod(): TerminalNode { return this.getToken(WenyanParser.DeclareMethod, 0) }
    public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0) }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    public variables(): VariablesContext | undefined {
        return this.tryGetRuleContext(0, VariablesContext)
    }
    public FunctionStart(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.FunctionStart, 0) }
    public FunctionEnd(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.FunctionEnd, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_declarefunction }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterDeclarefunction) {
            listener.enterDeclarefunction(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitDeclarefunction) {
            listener.exitDeclarefunction(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitDeclarefunction) {
            return visitor.visitDeclarefunction(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class VariablesContext extends ParserRuleContext {
    public VariableStart(): TerminalNode { return this.getToken(WenyanParser.VariableStart, 0) }
    public VariableEnd(): TerminalNode { return this.getToken(WenyanParser.VariableEnd, 0) }
    public NameAs(): TerminalNode[]
    public NameAs(i: number): TerminalNode
    public NameAs(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(WenyanParser.NameAs)
        } else {
            return this.getToken(WenyanParser.NameAs, i)
        }
    }
    public variable(): VariableContext[]
    public variable(i: number): VariableContext
    public variable(i?: number): VariableContext | VariableContext[] {
        if (i === undefined) {
            return this.getRuleContexts(VariableContext)
        } else {
            return this.getRuleContext(i, VariableContext)
        }
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_variables }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterVariables) {
            listener.enterVariables(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitVariables) {
            listener.exitVariables(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitVariables) {
            return visitor.visitVariables(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DeclareNumberContext extends ParserRuleContext {
    public _n: NumberContext
    public _v: VariableContext
    public DeclareDigit(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareDigit, 0) }
    public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0) }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)
    }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    public ValueIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.ValueIs, 0) }
    public EndStatment(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.EndStatment, 0) }
    public DeclareDigitIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareDigitIs, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_declareNumber }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterDeclareNumber) {
            listener.enterDeclareNumber(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitDeclareNumber) {
            listener.exitDeclareNumber(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitDeclareNumber) {
            return visitor.visitDeclareNumber(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DeclareBooleanContext extends ParserRuleContext {
    public _v: VariableContext
    public DeclareBoolean(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareBoolean, 0) }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)
    }
    public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0) }
    public variable(): VariableContext {
        return this.getRuleContext(0, VariableContext)
    }
    public ValueIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.ValueIs, 0) }
    public EndStatment(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.EndStatment, 0) }
    public DeclareBooleanIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareBooleanIs, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_declareBoolean }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterDeclareBoolean) {
            listener.enterDeclareBoolean(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitDeclareBoolean) {
            listener.exitDeclareBoolean(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitDeclareBoolean) {
            return visitor.visitDeclareBoolean(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class NumberContext extends ParserRuleContext {
    public _n: DigitsContext
    public Left3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left3, 0) }
    public Right3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right3, 0) }
    public digits(): DigitsContext {
        return this.getRuleContext(0, DigitsContext)
    }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_number }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterNumber) {
            listener.enterNumber(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitNumber) {
            listener.exitNumber(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class DigitsContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_digits }
    public copyFrom(ctx: DigitsContext): void {
        super.copyFrom(ctx)
    }
}
export class NumberIntegerContext extends DigitsContext {
    public IntegerDigit(): TerminalNode[]
    public IntegerDigit(i: number): TerminalNode
    public IntegerDigit(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(WenyanParser.IntegerDigit)
        } else {
            return this.getToken(WenyanParser.IntegerDigit, i)
        }
    }
    constructor(ctx: DigitsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterNumberInteger) {
            listener.enterNumberInteger(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitNumberInteger) {
            listener.exitNumberInteger(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitNumberInteger) {
            return visitor.visitNumberInteger(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class NumberIntegerCNContext extends DigitsContext {
    public IntegerDigitCN(): TerminalNode[]
    public IntegerDigitCN(i: number): TerminalNode
    public IntegerDigitCN(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(WenyanParser.IntegerDigitCN)
        } else {
            return this.getToken(WenyanParser.IntegerDigitCN, i)
        }
    }
    constructor(ctx: DigitsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterNumberIntegerCN) {
            listener.enterNumberIntegerCN(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitNumberIntegerCN) {
            listener.exitNumberIntegerCN(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitNumberIntegerCN) {
            return visitor.visitNumberIntegerCN(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class NumberFloatContext extends DigitsContext {
    public FloatDigit(): TerminalNode[]
    public FloatDigit(i: number): TerminalNode
    public FloatDigit(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(WenyanParser.FloatDigit)
        } else {
            return this.getToken(WenyanParser.FloatDigit, i)
        }
    }
    constructor(ctx: DigitsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterNumberFloat) {
            listener.enterNumberFloat(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitNumberFloat) {
            listener.exitNumberFloat(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitNumberFloat) {
            return visitor.visitNumberFloat(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}
export class NumberFloatCNContext extends DigitsContext {
    public FloatDigitCN(): TerminalNode[]
    public FloatDigitCN(i: number): TerminalNode
    public FloatDigitCN(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(WenyanParser.FloatDigitCN)
        } else {
            return this.getToken(WenyanParser.FloatDigitCN, i)
        }
    }
    constructor(ctx: DigitsContext) {
        super(ctx.parent, ctx.invokingState)
        this.copyFrom(ctx)
    }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterNumberFloatCN) {
            listener.enterNumberFloatCN(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitNumberFloatCN) {
            listener.exitNumberFloatCN(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitNumberFloatCN) {
            return visitor.visitNumberFloatCN(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class SkipStatementContext extends ParserRuleContext {
    public Identifier(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Identifier, 0) }
    public Character(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Character, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_skipStatement }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterSkipStatement) {
            listener.enterSkipStatement(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitSkipStatement) {
            listener.exitSkipStatement(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitSkipStatement) {
            return visitor.visitSkipStatement(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


