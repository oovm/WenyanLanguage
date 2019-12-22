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
    public static readonly DeclareModule = 5
    public static readonly RanameAs = 6
    public static readonly Left5 = 7
    public static readonly Right5 = 8
    public static readonly Left6 = 9
    public static readonly Right6 = 10
    public static readonly Variable = 11
    public static readonly Left = 12
    public static readonly Right = 13
    public static readonly Left4 = 14
    public static readonly Right4 = 15
    public static readonly Apply = 16
    public static readonly At = 17
    public static readonly StackIn = 18
    public static readonly Take = 19
    public static readonly StackPop = 20
    public static readonly Get = 21
    public static readonly The = 22
    public static readonly End = 23
    public static readonly FunctionStart = 24
    public static readonly FunctionEnd = 25
    public static readonly VariableStart = 26
    public static readonly VariableEnd = 27
    public static readonly DeclareMethod = 28
    public static readonly ThisIs = 29
    public static readonly Is = 30
    public static readonly Said = 31
    public static readonly MethodOf = 32
    public static readonly EndStatment = 33
    public static readonly IHave = 34
    public static readonly NameAs = 35
    public static readonly ValueIs = 36
    public static readonly DeclareString = 37
    public static readonly DeclareStringIs = 38
    public static readonly StringEmpty = 39
    public static readonly StringEscape1 = 40
    public static readonly StringEscape2 = 41
    public static readonly StringEscape3 = 42
    public static readonly DeclareDigit = 43
    public static readonly DeclareDigitIs = 44
    public static readonly IntegerDigit = 45
    public static readonly FloatDigit = 46
    public static readonly IntegerDigitCN = 47
    public static readonly FloatDigitCN = 48
    public static readonly DeclareBoolean = 49
    public static readonly DeclareBooleanIs = 50
    public static readonly Boolean = 51
    public static readonly TRUE = 52
    public static readonly FALSE = 53
    public static readonly Equal = 54
    public static readonly Unequal = 55
    public static readonly Identifier = 56
    public static readonly Character = 57
    public static readonly LineComment = 58
    public static readonly PartComment = 59
    public static readonly WhiteSpace = 60
    public static readonly RULE_program = 0
    public static readonly RULE_statement = 1
    public static readonly RULE_ifStatement = 2
    public static readonly RULE_declaremodule = 3
    public static readonly RULE_moduleName = 4
    public static readonly RULE_variable = 5
    public static readonly RULE_applyStatement = 6
    public static readonly RULE_applyFunction = 7
    public static readonly RULE_applyStack = 8
    public static readonly RULE_stackIn = 9
    public static readonly RULE_stackPopOne = 10
    public static readonly RULE_stackPop = 11
    public static readonly RULE_stackOut = 12
    public static readonly RULE_stackReturn = 13
    public static readonly RULE_declarefunction = 14
    public static readonly RULE_variables = 15
    public static readonly RULE_data = 16
    public static readonly RULE_declareData = 17
    public static readonly RULE_declareString = 18
    public static readonly RULE_string = 19
    public static readonly RULE_declareNumber = 20
    public static readonly RULE_number = 21
    public static readonly RULE_digits = 22
    public static readonly RULE_declareBoolean = 23
    public static readonly RULE_boolean = 24
    public static readonly RULE_skipStatement = 25
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'program', 'statement', 'ifStatement', 'declaremodule', 'moduleName', 
        'variable', 'applyStatement', 'applyFunction', 'applyStack', 'stackIn', 
        'stackPopOne', 'stackPop', 'stackOut', 'stackReturn', 'declarefunction', 
        'variables', 'data', 'declareData', 'declareString', 'string', 'declareNumber', 
        'number', 'digits', 'declareBoolean', 'boolean', 'skipStatement',
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        "'\u300A'", "'\u300B'", "'<<'", "'>>'", undefined, "'['", "']'", "'\u300C'", 
        "'\u300D'",
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, 'If', 'EndDeclare', 'Else', 'Return', 'DeclareModule', 'RanameAs', 
        'Left5', 'Right5', 'Left6', 'Right6', 'Variable', 'Left', 'Right', 'Left4', 
        'Right4', 'Apply', 'At', 'StackIn', 'Take', 'StackPop', 'Get', 'The', 
        'End', 'FunctionStart', 'FunctionEnd', 'VariableStart', 'VariableEnd', 
        'DeclareMethod', 'ThisIs', 'Is', 'Said', 'MethodOf', 'EndStatment', 'IHave', 
        'NameAs', 'ValueIs', 'DeclareString', 'DeclareStringIs', 'StringEmpty', 
        'StringEscape1', 'StringEscape2', 'StringEscape3', 'DeclareDigit', 'DeclareDigitIs', 
        'IntegerDigit', 'FloatDigit', 'IntegerDigitCN', 'FloatDigitCN', 'DeclareBoolean', 
        'DeclareBooleanIs', 'Boolean', 'TRUE', 'FALSE', 'Equal', 'Unequal', 'Identifier', 
        'Character', 'LineComment', 'PartComment', 'WhiteSpace',
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
            this.state = 55
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WenyanParser.If) | (1 << WenyanParser.DeclareModule) | (1 << WenyanParser.Variable) | (1 << WenyanParser.Apply) | (1 << WenyanParser.StackIn) | (1 << WenyanParser.DeclareMethod))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (WenyanParser.DeclareString - 37)) | (1 << (WenyanParser.DeclareStringIs - 37)) | (1 << (WenyanParser.StringEmpty - 37)) | (1 << (WenyanParser.StringEscape1 - 37)) | (1 << (WenyanParser.StringEscape2 - 37)) | (1 << (WenyanParser.StringEscape3 - 37)) | (1 << (WenyanParser.DeclareDigit - 37)) | (1 << (WenyanParser.DeclareDigitIs - 37)) | (1 << (WenyanParser.IntegerDigit - 37)) | (1 << (WenyanParser.FloatDigit - 37)) | (1 << (WenyanParser.IntegerDigitCN - 37)) | (1 << (WenyanParser.FloatDigitCN - 37)) | (1 << (WenyanParser.DeclareBoolean - 37)) | (1 << (WenyanParser.DeclareBooleanIs - 37)) | (1 << (WenyanParser.Boolean - 37)) | (1 << (WenyanParser.Identifier - 37)) | (1 << (WenyanParser.Character - 37)))) !== 0)) {
                {
                {
                this.state = 52
                this.statement()
                }
                }
                this.state = 57
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            }
            this.state = 58
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
            this.state = 70
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
            case 1:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 60
                this.declaremodule()
                }
                break

            case 2:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 61
                this.declareNumber()
                }
                break

            case 3:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 62
                this.declareString()
                }
                break

            case 4:
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 63
                this.declareBoolean()
                }
                break

            case 5:
                this.enterOuterAlt(_localctx, 5)
                {
                this.state = 64
                this.declarefunction()
                }
                break

            case 6:
                this.enterOuterAlt(_localctx, 6)
                {
                this.state = 65
                this.declareData()
                }
                break

            case 7:
                this.enterOuterAlt(_localctx, 7)
                {
                this.state = 66
                this.ifStatement()
                }
                break

            case 8:
                this.enterOuterAlt(_localctx, 8)
                {
                this.state = 67
                this.applyStatement()
                }
                break

            case 9:
                this.enterOuterAlt(_localctx, 9)
                {
                this.state = 68
                this.data()
                }
                break

            case 10:
                this.enterOuterAlt(_localctx, 10)
                {
                this.state = 69
                this.skipStatement()
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
    public ifStatement(): IfStatementContext {
        let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state)
        this.enterRule(_localctx, 4, WenyanParser.RULE_ifStatement)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 72
            this.match(WenyanParser.If)
            this.state = 73
            this.statement()
            this.state = 74
            this.match(WenyanParser.EndDeclare)
            this.state = 75
            this.match(WenyanParser.Else)
            this.state = 76
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
    public declaremodule(): DeclaremoduleContext {
        let _localctx: DeclaremoduleContext = new DeclaremoduleContext(this._ctx, this.state)
        this.enterRule(_localctx, 6, WenyanParser.RULE_declaremodule)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 78
            this.match(WenyanParser.DeclareModule)
            this.state = 79
            _localctx._m = this.moduleName()
            this.state = 80
            this.match(WenyanParser.RanameAs)
            this.state = 81
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
    public moduleName(): ModuleNameContext {
        let _localctx: ModuleNameContext = new ModuleNameContext(this._ctx, this.state)
        this.enterRule(_localctx, 8, WenyanParser.RULE_moduleName)
        try {
            this.state = 95
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
            case 1:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 83
                this.match(WenyanParser.DeclareModule)
                this.state = 84
                this.match(WenyanParser.Left)
                this.state = 85
                this.match(WenyanParser.Identifier)
                this.state = 86
                this.match(WenyanParser.Right)
                }
                break

            case 2:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 87
                this.match(WenyanParser.DeclareModule)
                this.state = 88
                this.match(WenyanParser.Left5)
                this.state = 89
                this.match(WenyanParser.Identifier)
                this.state = 90
                this.match(WenyanParser.Right5)
                }
                break

            case 3:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 91
                this.match(WenyanParser.DeclareModule)
                this.state = 92
                this.match(WenyanParser.Left6)
                this.state = 93
                this.match(WenyanParser.Identifier)
                this.state = 94
                this.match(WenyanParser.Right6)
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
    public variable(): VariableContext {
        let _localctx: VariableContext = new VariableContext(this._ctx, this.state)
        this.enterRule(_localctx, 10, WenyanParser.RULE_variable)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 97
            this.match(WenyanParser.Variable)
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
        this.enterRule(_localctx, 12, WenyanParser.RULE_applyStatement)
        try {
            this.state = 101
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.Apply:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 99
                this.applyFunction()
                }
                break
            case WenyanParser.StackIn:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 100
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
        this.enterRule(_localctx, 14, WenyanParser.RULE_applyFunction)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 103
            this.match(WenyanParser.Apply)
            this.state = 104
            _localctx._f = this.variable()
            this.state = 105
            this.match(WenyanParser.At)
            this.state = 106
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
        this.enterRule(_localctx, 16, WenyanParser.RULE_applyStack)
        try {
            let _alt: number
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 108
            this.stackIn()
            this.state = 112
            this._errHandler.sync(this)
            _alt = 1
            do {
                switch (_alt) {
                case 1:
                    {
                    this.state = 112
                    this._errHandler.sync(this)
                    switch (this._input.LA(1)) {
                    case WenyanParser.StackIn:
                        {
                        this.state = 109
                        this.stackIn()
                        }
                        break
                    case WenyanParser.StackPop:
                        {
                        this.state = 110
                        this.stackPopOne()
                        }
                        break
                    case WenyanParser.Get:
                        {
                        this.state = 111
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
                this.state = 114
                this._errHandler.sync(this)
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx)
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
            this.state = 118
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
            case 1:
                {
                this.state = 116
                this.stackOut()
                }
                break

            case 2:
                {
                this.state = 117
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
        this.enterRule(_localctx, 18, WenyanParser.RULE_stackIn)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 120
            this.match(WenyanParser.StackIn)
            this.state = 122
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
                {
                {
                this.state = 121
                this.variable()
                }
                }
                this.state = 124
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            } while (_la === WenyanParser.Variable)
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
        this.enterRule(_localctx, 20, WenyanParser.RULE_stackPopOne)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 126
            this.match(WenyanParser.StackPop)
            this.state = 127
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
        this.enterRule(_localctx, 22, WenyanParser.RULE_stackPop)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 129
            this.match(WenyanParser.Get)
            this.state = 130
            this.digits()
            this.state = 131
            this.match(WenyanParser.StackPop)
            this.state = 132
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
        this.enterRule(_localctx, 24, WenyanParser.RULE_stackOut)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 134
            this.match(WenyanParser.Get)
            this.state = 135
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
        this.enterRule(_localctx, 26, WenyanParser.RULE_stackReturn)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 137
            this.match(WenyanParser.Get)
            this.state = 138
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
        this.enterRule(_localctx, 28, WenyanParser.RULE_declarefunction)
        try {
            this.state = 150
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
            case 1:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 140
                this.match(WenyanParser.DeclareMethod)
                this.state = 141
                this.match(WenyanParser.NameAs)
                this.state = 142
                this.variable()
                this.state = 143
                this.variables()
                this.state = 144
                this.match(WenyanParser.FunctionStart)
                this.state = 145
                this.match(WenyanParser.FunctionEnd)
                }
                break

            case 2:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 147
                this.match(WenyanParser.DeclareMethod)
                this.state = 148
                this.match(WenyanParser.NameAs)
                this.state = 149
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
        this.enterRule(_localctx, 30, WenyanParser.RULE_variables)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 152
            this.match(WenyanParser.VariableStart)
            this.state = 155
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
                {
                {
                this.state = 153
                this.match(WenyanParser.NameAs)
                this.state = 154
                this.variable()
                }
                }
                this.state = 157
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            } while (_la === WenyanParser.NameAs)
            this.state = 159
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
    public data(): DataContext {
        let _localctx: DataContext = new DataContext(this._ctx, this.state)
        this.enterRule(_localctx, 32, WenyanParser.RULE_data)
        try {
            this.state = 165
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.StringEmpty:
            case WenyanParser.StringEscape1:
            case WenyanParser.StringEscape2:
            case WenyanParser.StringEscape3:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 161
                this.string()
                }
                break
            case WenyanParser.IntegerDigit:
            case WenyanParser.FloatDigit:
            case WenyanParser.IntegerDigitCN:
            case WenyanParser.FloatDigitCN:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 162
                this.digits()
                }
                break
            case WenyanParser.Boolean:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 163
                this.boolean()
                }
                break
            case WenyanParser.Identifier:
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 164
                this.match(WenyanParser.Identifier)
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
        this.enterRule(_localctx, 34, WenyanParser.RULE_declareData)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 167
            this.variable()
            this.state = 168
            this.match(WenyanParser.EndDeclare)
            this.state = 169
            this.data()
            this.state = 170
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
    public declareString(): DeclareStringContext {
        let _localctx: DeclareStringContext = new DeclareStringContext(this._ctx, this.state)
        this.enterRule(_localctx, 36, WenyanParser.RULE_declareString)
        let _la: number
        try {
            this.state = 185
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareString:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 172
                this.match(WenyanParser.DeclareString)
                this.state = 174
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 173
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 176
                _localctx._s = this.string()
                this.state = 177
                this.match(WenyanParser.NameAs)
                this.state = 178
                _localctx._v = this.variable()
                }
                break
            case WenyanParser.DeclareStringIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 180
                this.match(WenyanParser.DeclareStringIs)
                this.state = 181
                _localctx._s = this.string()
                this.state = 182
                this.match(WenyanParser.NameAs)
                this.state = 183
                _localctx._s = this.string()
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
    public string(): StringContext {
        let _localctx: StringContext = new StringContext(this._ctx, this.state)
        this.enterRule(_localctx, 38, WenyanParser.RULE_string)
        try {
            this.state = 191
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.StringEmpty:
                _localctx = new StringRemove0Context(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 187
                this.match(WenyanParser.StringEmpty)
                }
                break
            case WenyanParser.StringEscape1:
                _localctx = new StringRemove2Context(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 188
                this.match(WenyanParser.StringEscape1)
                }
                break
            case WenyanParser.StringEscape2:
                _localctx = new StringRemove1Context(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 189
                this.match(WenyanParser.StringEscape2)
                }
                break
            case WenyanParser.StringEscape3:
                _localctx = new StringRemove1Context(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 190
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
    public declareNumber(): DeclareNumberContext {
        let _localctx: DeclareNumberContext = new DeclareNumberContext(this._ctx, this.state)
        this.enterRule(_localctx, 40, WenyanParser.RULE_declareNumber)
        let _la: number
        try {
            this.state = 210
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareDigit:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 193
                this.match(WenyanParser.DeclareDigit)
                this.state = 195
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 194
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 197
                _localctx._n = this.number()
                this.state = 198
                this.match(WenyanParser.NameAs)
                this.state = 199
                _localctx._v = this.variable()
                this.state = 201
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 200
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            case WenyanParser.DeclareDigitIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 203
                this.match(WenyanParser.DeclareDigitIs)
                this.state = 204
                _localctx._n = this.number()
                this.state = 205
                this.match(WenyanParser.NameAs)
                this.state = 206
                _localctx._v = this.variable()
                this.state = 208
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 207
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
        this.enterRule(_localctx, 42, WenyanParser.RULE_number)
        try {
            this.state = 217
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.Left:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 212
                this.match(WenyanParser.Left)
                this.state = 213
                _localctx._n = this.digits()
                this.state = 214
                this.match(WenyanParser.Right)
                }
                break
            case WenyanParser.IntegerDigit:
            case WenyanParser.FloatDigit:
            case WenyanParser.IntegerDigitCN:
            case WenyanParser.FloatDigitCN:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 216
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
        this.enterRule(_localctx, 44, WenyanParser.RULE_digits)
        try {
            let _alt: number
            this.state = 239
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.IntegerDigit:
                _localctx = new NumberIntegerContext(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 220
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 219
                        this.match(WenyanParser.IntegerDigit)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 222
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case WenyanParser.IntegerDigitCN:
                _localctx = new NumberIntegerCNContext(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 225
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 224
                        this.match(WenyanParser.IntegerDigitCN)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 227
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case WenyanParser.FloatDigit:
                _localctx = new NumberFloatContext(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 230
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 229
                        this.match(WenyanParser.FloatDigit)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 232
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx)
                } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
                }
                break
            case WenyanParser.FloatDigitCN:
                _localctx = new NumberFloatCNContext(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 235
                this._errHandler.sync(this)
                _alt = 1
                do {
                    switch (_alt) {
                    case 1:
                        {
                        {
                        this.state = 234
                        this.match(WenyanParser.FloatDigitCN)
                        }
                        }
                        break
                    default:
                        throw new NoViableAltException(this)
                    }
                    this.state = 237
                    this._errHandler.sync(this)
                    _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
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
    public declareBoolean(): DeclareBooleanContext {
        let _localctx: DeclareBooleanContext = new DeclareBooleanContext(this._ctx, this.state)
        this.enterRule(_localctx, 46, WenyanParser.RULE_declareBoolean)
        let _la: number
        try {
            this.state = 258
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareBoolean:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 241
                this.match(WenyanParser.DeclareBoolean)
                this.state = 243
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 242
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 245
                _localctx._b = this.boolean()
                this.state = 246
                this.match(WenyanParser.NameAs)
                this.state = 247
                _localctx._v = this.variable()
                this.state = 249
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 248
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            case WenyanParser.DeclareBooleanIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 251
                this.match(WenyanParser.DeclareBooleanIs)
                this.state = 252
                _localctx._b = this.boolean()
                this.state = 253
                this.match(WenyanParser.NameAs)
                this.state = 254
                _localctx._v = this.variable()
                this.state = 256
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 255
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
    public boolean(): BooleanContext {
        let _localctx: BooleanContext = new BooleanContext(this._ctx, this.state)
        this.enterRule(_localctx, 48, WenyanParser.RULE_boolean)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 260
            this.match(WenyanParser.Boolean)
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
        this.enterRule(_localctx, 50, WenyanParser.RULE_skipStatement)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 262
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
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03>\u010B\x04\x02' +
        '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
        '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
        '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
        '\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04' +
        '\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x07\x028' +
        '\n\x02\f\x02\x0E\x02;\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03' +
        '\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03I\n\x03\x03' +
        '\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03' +
        '\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03' +
        '\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06b\n\x06\x03\x07\x03\x07\x03' +
        '\b\x03\b\x05\bh\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03' +
        '\n\x06\ns\n\n\r\n\x0E\nt\x03\n\x03\n\x05\ny\n\n\x03\v\x03\v\x06\v}\n\v' +
        '\r\v\x0E\v~\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03' +
        '\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03' +
        '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x99\n\x10\x03\x11' +
        '\x03\x11\x03\x11\x06\x11\x9E\n\x11\r\x11\x0E\x11\x9F\x03\x11\x03\x11\x03' +
        '\x12\x03\x12\x03\x12\x03\x12\x05\x12\xA8\n\x12\x03\x13\x03\x13\x03\x13' +
        '\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\xB1\n\x14\x03\x14\x03\x14\x03' +
        '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xBC\n\x14' +
        '\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xC2\n\x15\x03\x16\x03\x16\x05' +
        '\x16\xC6\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xCC\n\x16\x03\x16' +
        '\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xD3\n\x16\x05\x16\xD5\n\x16\x03' +
        '\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xDC\n\x17\x03\x18\x06\x18' +
        '\xDF\n\x18\r\x18\x0E\x18\xE0\x03\x18\x06\x18\xE4\n\x18\r\x18\x0E\x18\xE5' +
        '\x03\x18\x06\x18\xE9\n\x18\r\x18\x0E\x18\xEA\x03\x18\x06\x18\xEE\n\x18' +
        '\r\x18\x0E\x18\xEF\x05\x18\xF2\n\x18\x03\x19\x03\x19\x05\x19\xF6\n\x19' +
        '\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xFC\n\x19\x03\x19\x03\x19\x03' +
        '\x19\x03\x19\x03\x19\x05\x19\u0103\n\x19\x05\x19\u0105\n\x19\x03\x1A\x03' +
        '\x1A\x03\x1B\x03\x1B\x03\x1B\x02\x02\x02\x1C\x02\x02\x04\x02\x06\x02\b' +
        '\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02' +
        '\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02' +
        '\x02\x03\x03\x02:;\x02\u011C\x029\x03\x02\x02\x02\x04H\x03\x02\x02\x02' +
        '\x06J\x03\x02\x02\x02\bP\x03\x02\x02\x02\na\x03\x02\x02\x02\fc\x03\x02' +
        '\x02\x02\x0Eg\x03\x02\x02\x02\x10i\x03\x02\x02\x02\x12n\x03\x02\x02\x02' +
        '\x14z\x03\x02\x02\x02\x16\x80\x03\x02\x02\x02\x18\x83\x03\x02\x02\x02' +
        '\x1A\x88\x03\x02\x02\x02\x1C\x8B\x03\x02\x02\x02\x1E\x98\x03\x02\x02\x02' +
        ' \x9A\x03\x02\x02\x02"\xA7\x03\x02\x02\x02$\xA9\x03\x02\x02\x02&\xBB' +
        '\x03\x02\x02\x02(\xC1\x03\x02\x02\x02*\xD4\x03\x02\x02\x02,\xDB\x03\x02' +
        '\x02\x02.\xF1\x03\x02\x02\x020\u0104\x03\x02\x02\x022\u0106\x03\x02\x02' +
        '\x024\u0108\x03\x02\x02\x0268\x05\x04\x03\x0276\x03\x02\x02\x028;\x03' +
        '\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03\x02\x02\x02;9\x03' +
        '\x02\x02\x02<=\x07\x02\x02\x03=\x03\x03\x02\x02\x02>I\x05\b\x05\x02?I' +
        '\x05*\x16\x02@I\x05&\x14\x02AI\x050\x19\x02BI\x05\x1E\x10\x02CI\x05$\x13' +
        '\x02DI\x05\x06\x04\x02EI\x05\x0E\b\x02FI\x05"\x12\x02GI\x054\x1B\x02' +
        'H>\x03\x02\x02\x02H?\x03\x02\x02\x02H@\x03\x02\x02\x02HA\x03\x02\x02\x02' +
        'HB\x03\x02\x02\x02HC\x03\x02\x02\x02HD\x03\x02\x02\x02HE\x03\x02\x02\x02' +
        'HF\x03\x02\x02\x02HG\x03\x02\x02\x02I\x05\x03\x02\x02\x02JK\x07\x03\x02' +
        '\x02KL\x05\x04\x03\x02LM\x07\x04\x02\x02MN\x07\x05\x02\x02NO\x05\x04\x03' +
        '\x02O\x07\x03\x02\x02\x02PQ\x07\x07\x02\x02QR\x05\n\x06\x02RS\x07\b\x02' +
        '\x02ST\x05\f\x07\x02T\t\x03\x02\x02\x02UV\x07\x07\x02\x02VW\x07\x0E\x02' +
        '\x02WX\x07:\x02\x02Xb\x07\x0F\x02\x02YZ\x07\x07\x02\x02Z[\x07\t\x02\x02' +
        '[\\\x07:\x02\x02\\b\x07\n\x02\x02]^\x07\x07\x02\x02^_\x07\v\x02\x02_`' +
        '\x07:\x02\x02`b\x07\f\x02\x02aU\x03\x02\x02\x02aY\x03\x02\x02\x02a]\x03' +
        '\x02\x02\x02b\v\x03\x02\x02\x02cd\x07\r\x02\x02d\r\x03\x02\x02\x02eh\x05' +
        '\x10\t\x02fh\x05\x12\n\x02ge\x03\x02\x02\x02gf\x03\x02\x02\x02h\x0F\x03' +
        '\x02\x02\x02ij\x07\x12\x02\x02jk\x05\f\x07\x02kl\x07\x13\x02\x02lm\x05' +
        '\f\x07\x02m\x11\x03\x02\x02\x02nr\x05\x14\v\x02os\x05\x14\v\x02ps\x05' +
        '\x16\f\x02qs\x05\x18\r\x02ro\x03\x02\x02\x02rp\x03\x02\x02\x02rq\x03\x02' +
        '\x02\x02st\x03\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02ux\x03\x02' +
        '\x02\x02vy\x05\x1A\x0E\x02wy\x05\x1C\x0F\x02xv\x03\x02\x02\x02xw\x03\x02' +
        '\x02\x02y\x13\x03\x02\x02\x02z|\x07\x14\x02\x02{}\x05\f\x07\x02|{\x03' +
        '\x02\x02\x02}~\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02' +
        '\x7F\x15\x03\x02\x02\x02\x80\x81\x07\x16\x02\x02\x81\x82\x05\f\x07\x02' +
        '\x82\x17\x03\x02\x02\x02\x83\x84\x07\x17\x02\x02\x84\x85\x05.\x18\x02' +
        '\x85\x86\x07\x16\x02\x02\x86\x87\x05\f\x07\x02\x87\x19\x03\x02\x02\x02' +
        '\x88\x89\x07\x17\x02\x02\x89\x8A\x05\f\x07\x02\x8A\x1B\x03\x02\x02\x02' +
        '\x8B\x8C\x07\x17\x02\x02\x8C\x8D\x07\x18\x02\x02\x8D\x1D\x03\x02\x02\x02' +
        '\x8E\x8F\x07\x1E\x02\x02\x8F\x90\x07%\x02\x02\x90\x91\x05\f\x07\x02\x91' +
        '\x92\x05 \x11\x02\x92\x93\x07\x1A\x02\x02\x93\x94\x07\x1B\x02\x02\x94' +
        '\x99\x03\x02\x02\x02\x95\x96\x07\x1E\x02\x02\x96\x97\x07%\x02\x02\x97' +
        '\x99\x05\f\x07\x02\x98\x8E\x03\x02\x02\x02\x98\x95\x03\x02\x02\x02\x99' +
        '\x1F\x03\x02\x02\x02\x9A\x9D\x07\x1C\x02\x02\x9B\x9C\x07%\x02\x02\x9C' +
        '\x9E\x05\f\x07\x02\x9D\x9B\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F' +
        '\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1' +
        '\xA2\x07\x1D\x02\x02\xA2!\x03\x02\x02\x02\xA3\xA8\x05(\x15\x02\xA4\xA8' +
        '\x05.\x18\x02\xA5\xA8\x052\x1A\x02\xA6\xA8\x07:\x02\x02\xA7\xA3\x03\x02' +
        '\x02\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA6\x03\x02' +
        '\x02\x02\xA8#\x03\x02\x02\x02\xA9\xAA\x05\f\x07\x02\xAA\xAB\x07\x04\x02' +
        '\x02\xAB\xAC\x05"\x12\x02\xAC\xAD\x07#\x02\x02\xAD%\x03\x02\x02\x02\xAE' +
        "\xB0\x07\'\x02\x02\xAF\xB1\x07&\x02\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1" +
        '\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x05(\x15\x02\xB3\xB4' +
        '\x07%\x02\x02\xB4\xB5\x05\f\x07\x02\xB5\xBC\x03\x02\x02\x02\xB6\xB7\x07' +
        '(\x02\x02\xB7\xB8\x05(\x15\x02\xB8\xB9\x07%\x02\x02\xB9\xBA\x05(\x15\x02' +
        '\xBA\xBC\x03\x02\x02\x02\xBB\xAE\x03\x02\x02\x02\xBB\xB6\x03\x02\x02\x02' +
        "\xBC\'\x03\x02\x02\x02\xBD\xC2\x07)\x02\x02\xBE\xC2\x07*\x02\x02\xBF\xC2" +
        '\x07+\x02\x02\xC0\xC2\x07,\x02\x02\xC1\xBD\x03\x02\x02\x02\xC1\xBE\x03' +
        '\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2)\x03' +
        '\x02\x02\x02\xC3\xC5\x07-\x02\x02\xC4\xC6\x07&\x02\x02\xC5\xC4\x03\x02' +
        '\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x05,' +
        '\x17\x02\xC8\xC9\x07%\x02\x02\xC9\xCB\x05\f\x07\x02\xCA\xCC\x07#\x02\x02' +
        '\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xD5\x03\x02\x02\x02' +
        '\xCD\xCE\x07.\x02\x02\xCE\xCF\x05,\x17\x02\xCF\xD0\x07%\x02\x02\xD0\xD2' +
        '\x05\f\x07\x02\xD1\xD3\x07#\x02\x02\xD2\xD1\x03\x02\x02\x02\xD2\xD3\x03' +
        '\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xC3\x03\x02\x02\x02\xD4\xCD\x03' +
        '\x02\x02\x02\xD5+\x03\x02\x02\x02\xD6\xD7\x07\x0E\x02\x02\xD7\xD8\x05' +
        '.\x18\x02\xD8\xD9\x07\x0F\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xDC\x05' +
        '.\x18\x02\xDB\xD6\x03\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC-\x03\x02' +
        '\x02\x02\xDD\xDF\x07/\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02' +
        '\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xF2\x03\x02' +
        '\x02\x02\xE2\xE4\x071\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02' +
        '\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xF2\x03\x02' +
        '\x02\x02\xE7\xE9\x070\x02\x02\xE8\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02' +
        '\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xF2\x03\x02' +
        '\x02\x02\xEC\xEE\x072\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02' +
        '\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02' +
        '\x02\x02\xF1\xDE\x03\x02\x02\x02\xF1\xE3\x03\x02\x02\x02\xF1\xE8\x03\x02' +
        '\x02\x02\xF1\xED\x03\x02\x02\x02\xF2/\x03\x02\x02\x02\xF3\xF5\x073\x02' +
        '\x02\xF4\xF6\x07&\x02\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02' +
        '\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x052\x1A\x02\xF8\xF9\x07%\x02\x02' +
        '\xF9\xFB\x05\f\x07\x02\xFA\xFC\x07#\x02\x02\xFB\xFA\x03\x02\x02\x02\xFB' +
        '\xFC\x03\x02\x02\x02\xFC\u0105\x03\x02\x02\x02\xFD\xFE\x074\x02\x02\xFE' +
        '\xFF\x052\x1A\x02\xFF\u0100\x07%\x02\x02\u0100\u0102\x05\f\x07\x02\u0101' +
        '\u0103\x07#\x02\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02' +
        '\x02\u0103\u0105\x03\x02\x02\x02\u0104\xF3\x03\x02\x02\x02\u0104\xFD\x03' +
        '\x02\x02\x02\u01051\x03\x02\x02\x02\u0106\u0107\x075\x02\x02\u01073\x03' +
        '\x02\x02\x02\u0108\u0109\t\x02\x02\x02\u01095\x03\x02\x02\x02\x1E9Hag' +
        'rtx~\x98\x9F\xA7\xB0\xBB\xC1\xC5\xCB\xD2\xD4\xDB\xE0\xE5\xEA\xEF\xF1\xF5' +
        '\xFB\u0102\u0104'
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


export class DeclaremoduleContext extends ParserRuleContext {
    public _m: ModuleNameContext
    public _v: VariableContext
    public DeclareModule(): TerminalNode { return this.getToken(WenyanParser.DeclareModule, 0) }
    public RanameAs(): TerminalNode { return this.getToken(WenyanParser.RanameAs, 0) }
    public moduleName(): ModuleNameContext {
        return this.getRuleContext(0, ModuleNameContext)
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


export class ModuleNameContext extends ParserRuleContext {
    public DeclareModule(): TerminalNode { return this.getToken(WenyanParser.DeclareModule, 0) }
    public Left(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left, 0) }
    public Identifier(): TerminalNode { return this.getToken(WenyanParser.Identifier, 0) }
    public Right(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right, 0) }
    public Left5(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left5, 0) }
    public Right5(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right5, 0) }
    public Left6(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left6, 0) }
    public Right6(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right6, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_moduleName }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterModuleName) {
            listener.enterModuleName(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitModuleName) {
            listener.exitModuleName(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitModuleName) {
            return visitor.visitModuleName(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class VariableContext extends ParserRuleContext {
    public Variable(): TerminalNode { return this.getToken(WenyanParser.Variable, 0) }
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


export class DataContext extends ParserRuleContext {
    public string(): StringContext | undefined {
        return this.tryGetRuleContext(0, StringContext)
    }
    public digits(): DigitsContext | undefined {
        return this.tryGetRuleContext(0, DigitsContext)
    }
    public boolean(): BooleanContext | undefined {
        return this.tryGetRuleContext(0, BooleanContext)
    }
    public Identifier(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Identifier, 0) }
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


export class DeclareStringContext extends ParserRuleContext {
    public _s: StringContext
    public _v: VariableContext
    public DeclareString(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareString, 0) }
    public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0) }
    public string(): StringContext[]
    public string(i: number): StringContext
    public string(i?: number): StringContext | StringContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StringContext)
        } else {
            return this.getRuleContext(i, StringContext)
        }
    }
    public variable(): VariableContext | undefined {
        return this.tryGetRuleContext(0, VariableContext)
    }
    public ValueIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.ValueIs, 0) }
    public DeclareStringIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareStringIs, 0) }
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


export class NumberContext extends ParserRuleContext {
    public _n: DigitsContext
    public Left(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left, 0) }
    public Right(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right, 0) }
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


export class DeclareBooleanContext extends ParserRuleContext {
    public _b: BooleanContext
    public _v: VariableContext
    public DeclareBoolean(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareBoolean, 0) }
    public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0) }
    public boolean(): BooleanContext {
        return this.getRuleContext(0, BooleanContext)
    }
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


export class BooleanContext extends ParserRuleContext {
    public Boolean(): TerminalNode { return this.getToken(WenyanParser.Boolean, 0) }
    constructor(parent: ParserRuleContext | undefined, invokingState: number) {
        super(parent, invokingState)
    }
    // @Override
    public get ruleIndex(): number { return WenyanParser.RULE_boolean }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterBoolean) {
            listener.enterBoolean(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitBoolean) {
            listener.exitBoolean(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this)
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


