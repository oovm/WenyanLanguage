// Generated from Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


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
    public static readonly DeclareString = 9
    public static readonly DeclareStringIs = 10
    public static readonly StringEmpty = 11
    public static readonly StringEscape1 = 12
    public static readonly StringEscape2 = 13
    public static readonly StringEscape3 = 14
    public static readonly DeclareDigit = 15
    public static readonly DeclareDigitIs = 16
    public static readonly DeclareBoolean = 17
    public static readonly DeclareBooleanIs = 18
    public static readonly Boolean = 19
    public static readonly True = 20
    public static readonly False = 21
    public static readonly Left = 22
    public static readonly Right = 23
    public static readonly Left3 = 24
    public static readonly Right3 = 25
    public static readonly FunctionStart = 26
    public static readonly FunctionEnd = 27
    public static readonly VariableStart = 28
    public static readonly VariableEnd = 29
    public static readonly DeclareMethod = 30
    public static readonly ThisIs = 31
    public static readonly Is = 32
    public static readonly Said = 33
    public static readonly MethodOf = 34
    public static readonly The = 35
    public static readonly At = 36
    public static readonly Apply = 37
    public static readonly End = 38
    public static readonly Number = 39
    public static readonly Digit = 40
    public static readonly Equal = 41
    public static readonly Unequal = 42
    public static readonly Identifier = 43
    public static readonly Character = 44
    public static readonly Underline = 45
    public static readonly LineComment = 46
    public static readonly PartComment = 47
    public static readonly WhiteSpace = 48
    public static readonly RULE_program = 0
    public static readonly RULE_statement = 1
    public static readonly RULE_ifStatement = 2
    public static readonly RULE_data = 3
    public static readonly RULE_declareData = 4
    public static readonly RULE_declareString = 5
    public static readonly RULE_string = 6
    public static readonly RULE_declareNumber = 7
    public static readonly RULE_declareBoolean = 8
    public static readonly RULE_variable = 9
    public static readonly RULE_declarefunction = 10
    public static readonly RULE_variables = 11
    public static readonly RULE_apply = 12
    public static readonly RULE_number = 13
    public static readonly RULE_skipStatement = 14
    // tslint:disable:no-trailing-whitespace
    public static readonly ruleNames: string[] = [
        'program', 'statement', 'ifStatement', 'data', 'declareData', 'declareString', 
        'string', 'declareNumber', 'declareBoolean', 'variable', 'declarefunction', 
        'variables', 'apply', 'number', 'skipStatement',
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, undefined, undefined, "'\u9633'", 
        "'\u9634'", "'\u300C'", "'\u300D'", "'['", "']'",
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, 'If', 'EndDeclare', 'Else', 'Return', 'EndStatment', 'IHave', 
        'NameAs', 'ValueIs', 'DeclareString', 'DeclareStringIs', 'StringEmpty', 
        'StringEscape1', 'StringEscape2', 'StringEscape3', 'DeclareDigit', 'DeclareDigitIs', 
        'DeclareBoolean', 'DeclareBooleanIs', 'Boolean', 'True', 'False', 'Left', 
        'Right', 'Left3', 'Right3', 'FunctionStart', 'FunctionEnd', 'VariableStart', 
        'VariableEnd', 'DeclareMethod', 'ThisIs', 'Is', 'Said', 'MethodOf', 'The', 
        'At', 'Apply', 'End', 'Number', 'Digit', 'Equal', 'Unequal', 'Identifier', 
        'Character', 'Underline', 'LineComment', 'PartComment', 'WhiteSpace',
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
            this.state = 33
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WenyanParser.If) | (1 << WenyanParser.DeclareString) | (1 << WenyanParser.StringEmpty) | (1 << WenyanParser.StringEscape1) | (1 << WenyanParser.StringEscape2) | (1 << WenyanParser.StringEscape3) | (1 << WenyanParser.DeclareDigit) | (1 << WenyanParser.DeclareDigitIs) | (1 << WenyanParser.Boolean) | (1 << WenyanParser.Left) | (1 << WenyanParser.Left3) | (1 << WenyanParser.DeclareMethod))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (WenyanParser.Apply - 37)) | (1 << (WenyanParser.Number - 37)) | (1 << (WenyanParser.Identifier - 37)))) !== 0)) {
                {
                {
                this.state = 30
                this.statement()
                }
                }
                this.state = 35
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            }
            this.state = 36
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
            this.state = 46
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareDigit:
            case WenyanParser.DeclareDigitIs:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 38
                this.declareNumber()
                }
                break
            case WenyanParser.DeclareString:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 39
                this.declareString()
                }
                break
            case WenyanParser.DeclareMethod:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 40
                this.declarefunction()
                }
                break
            case WenyanParser.Left:
            case WenyanParser.Left3:
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 41
                this.declareData()
                }
                break
            case WenyanParser.If:
                this.enterOuterAlt(_localctx, 5)
                {
                this.state = 42
                this.ifStatement()
                }
                break
            case WenyanParser.Apply:
                this.enterOuterAlt(_localctx, 6)
                {
                this.state = 43
                this.apply()
                }
                break
            case WenyanParser.StringEmpty:
            case WenyanParser.StringEscape1:
            case WenyanParser.StringEscape2:
            case WenyanParser.StringEscape3:
            case WenyanParser.Boolean:
            case WenyanParser.Number:
                this.enterOuterAlt(_localctx, 7)
                {
                this.state = 44
                this.data()
                }
                break
            case WenyanParser.Identifier:
                this.enterOuterAlt(_localctx, 8)
                {
                this.state = 45
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
            this.state = 48
            this.match(WenyanParser.If)
            this.state = 49
            this.statement()
            this.state = 50
            this.match(WenyanParser.EndDeclare)
            this.state = 51
            this.match(WenyanParser.Else)
            this.state = 52
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
            this.state = 57
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.StringEmpty:
            case WenyanParser.StringEscape1:
            case WenyanParser.StringEscape2:
            case WenyanParser.StringEscape3:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 54
                this.string()
                }
                break
            case WenyanParser.Number:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 55
                this.match(WenyanParser.Number)
                }
                break
            case WenyanParser.Boolean:
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 56
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
            this.state = 59
            this.variable()
            this.state = 60
            this.match(WenyanParser.EndDeclare)
            this.state = 61
            this.data()
            this.state = 62
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
        this.enterRule(_localctx, 10, WenyanParser.RULE_declareString)
        let _la: number
        try {
            this.state = 80
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
            case 1:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 64
                this.match(WenyanParser.DeclareString)
                this.state = 66
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 65
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 68
                _localctx._s = this.string()
                this.state = 69
                this.match(WenyanParser.NameAs)
                this.state = 70
                _localctx._v = this.variable()
                }
                break

            case 2:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 72
                this.match(WenyanParser.DeclareString)
                this.state = 73
                this.match(WenyanParser.NameAs)
                this.state = 74
                _localctx._v = this.variable()
                this.state = 76
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 75
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 78
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
        this.enterRule(_localctx, 12, WenyanParser.RULE_string)
        try {
            this.state = 86
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.StringEmpty:
                _localctx = new StringRemove0Context(_localctx)
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 82
                this.match(WenyanParser.StringEmpty)
                }
                break
            case WenyanParser.StringEscape1:
                _localctx = new StringRemove2Context(_localctx)
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 83
                this.match(WenyanParser.StringEscape1)
                }
                break
            case WenyanParser.StringEscape2:
                _localctx = new StringRemove1Context(_localctx)
                this.enterOuterAlt(_localctx, 3)
                {
                this.state = 84
                this.match(WenyanParser.StringEscape2)
                }
                break
            case WenyanParser.StringEscape3:
                _localctx = new StringRemove1Context(_localctx)
                this.enterOuterAlt(_localctx, 4)
                {
                this.state = 85
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
        this.enterRule(_localctx, 14, WenyanParser.RULE_declareNumber)
        let _la: number
        try {
            this.state = 105
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareDigit:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 88
                this.match(WenyanParser.DeclareDigit)
                this.state = 90
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 89
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 92
                this.number()
                this.state = 93
                this.match(WenyanParser.NameAs)
                this.state = 94
                _localctx._v = this.variable()
                this.state = 96
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 95
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            case WenyanParser.DeclareDigitIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 98
                this.match(WenyanParser.DeclareDigitIs)
                this.state = 99
                this.number()
                this.state = 100
                this.match(WenyanParser.NameAs)
                this.state = 101
                _localctx._v = this.variable()
                this.state = 103
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 102
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
        this.enterRule(_localctx, 16, WenyanParser.RULE_declareBoolean)
        let _la: number
        try {
            this.state = 124
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.DeclareBoolean:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 107
                this.match(WenyanParser.DeclareBoolean)
                this.state = 109
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.ValueIs) {
                    {
                    this.state = 108
                    this.match(WenyanParser.ValueIs)
                    }
                }

                this.state = 111
                this.number()
                this.state = 112
                this.match(WenyanParser.NameAs)
                this.state = 113
                _localctx._v = this.variable()
                this.state = 115
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 114
                    this.match(WenyanParser.EndStatment)
                    }
                }

                }
                break
            case WenyanParser.DeclareBooleanIs:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 117
                this.match(WenyanParser.DeclareBooleanIs)
                this.state = 118
                this.number()
                this.state = 119
                this.match(WenyanParser.NameAs)
                this.state = 120
                _localctx._v = this.variable()
                this.state = 122
                this._errHandler.sync(this)
                _la = this._input.LA(1)
                if (_la === WenyanParser.EndStatment) {
                    {
                    this.state = 121
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
                this.match(WenyanParser.Identifier)
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
                this.match(WenyanParser.Identifier)
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
    public declarefunction(): DeclarefunctionContext {
        let _localctx: DeclarefunctionContext = new DeclarefunctionContext(this._ctx, this.state)
        this.enterRule(_localctx, 20, WenyanParser.RULE_declarefunction)
        try {
            this.state = 144
            this._errHandler.sync(this)
            switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
            case 1:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 134
                this.match(WenyanParser.DeclareMethod)
                this.state = 135
                this.match(WenyanParser.NameAs)
                this.state = 136
                this.variable()
                this.state = 137
                this.variables()
                this.state = 138
                this.match(WenyanParser.FunctionStart)
                this.state = 139
                this.match(WenyanParser.FunctionEnd)
                }
                break

            case 2:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 141
                this.match(WenyanParser.DeclareMethod)
                this.state = 142
                this.match(WenyanParser.NameAs)
                this.state = 143
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
        this.enterRule(_localctx, 22, WenyanParser.RULE_variables)
        let _la: number
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 146
            this.match(WenyanParser.VariableStart)
            this.state = 149
            this._errHandler.sync(this)
            _la = this._input.LA(1)
            do {
                {
                {
                this.state = 147
                this.match(WenyanParser.NameAs)
                this.state = 148
                this.variable()
                }
                }
                this.state = 151
                this._errHandler.sync(this)
                _la = this._input.LA(1)
            } while (_la === WenyanParser.NameAs)
            this.state = 153
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
    public apply(): ApplyContext {
        let _localctx: ApplyContext = new ApplyContext(this._ctx, this.state)
        this.enterRule(_localctx, 24, WenyanParser.RULE_apply)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 155
            this.match(WenyanParser.Apply)
            this.state = 156
            _localctx._f = this.variable()
            this.state = 157
            this.match(WenyanParser.At)
            this.state = 158
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
    public number(): NumberContext {
        let _localctx: NumberContext = new NumberContext(this._ctx, this.state)
        this.enterRule(_localctx, 26, WenyanParser.RULE_number)
        try {
            this.state = 164
            this._errHandler.sync(this)
            switch (this._input.LA(1)) {
            case WenyanParser.Left3:
                this.enterOuterAlt(_localctx, 1)
                {
                this.state = 160
                this.match(WenyanParser.Left3)
                this.state = 161
                _localctx._n = this.match(WenyanParser.Number)
                this.state = 162
                this.match(WenyanParser.Right3)
                }
                break
            case WenyanParser.Number:
                this.enterOuterAlt(_localctx, 2)
                {
                this.state = 163
                _localctx._n = this.match(WenyanParser.Number)
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
        this.enterRule(_localctx, 28, WenyanParser.RULE_skipStatement)
        try {
            this.enterOuterAlt(_localctx, 1)
            {
            this.state = 166
            this.match(WenyanParser.Identifier)
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
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\xAB\x04\x02' +
        '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
        '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
        '\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x07\x02"\n\x02\f\x02\x0E' +
        '\x02%\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
        '\x03\x03\x03\x03\x03\x05\x031\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
        '\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05<\n\x05\x03\x06\x03\x06\x03' +
        '\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07E\n\x07\x03\x07\x03\x07\x03' +
        '\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07O\n\x07\x03\x07\x03' +
        '\x07\x05\x07S\n\x07\x03\b\x03\b\x03\b\x03\b\x05\bY\n\b\x03\t\x03\t\x05' +
        '\t]\n\t\x03\t\x03\t\x03\t\x03\t\x05\tc\n\t\x03\t\x03\t\x03\t\x03\t\x03' +
        '\t\x05\tj\n\t\x05\tl\n\t\x03\n\x03\n\x05\np\n\n\x03\n\x03\n\x03\n\x03' +
        '\n\x05\nv\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n}\n\n\x05\n\x7F\n\n\x03' +
        '\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x87\n\v\x03\f\x03\f\x03\f\x03\f' +
        '\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x93\n\f\x03\r\x03\r\x03\r\x06' +
        '\r\x98\n\r\r\r\x0E\r\x99\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03' +
        '\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA7\n\x0F\x03\x10\x03\x10' +
        '\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E' +
        '\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02\x02' +
        '\x02\x02\xB7\x02#\x03\x02\x02\x02\x040\x03\x02\x02\x02\x062\x03\x02\x02' +
        '\x02\b;\x03\x02\x02\x02\n=\x03\x02\x02\x02\fR\x03\x02\x02\x02\x0EX\x03' +
        '\x02\x02\x02\x10k\x03\x02\x02\x02\x12~\x03\x02\x02\x02\x14\x86\x03\x02' +
        '\x02\x02\x16\x92\x03\x02\x02\x02\x18\x94\x03\x02\x02\x02\x1A\x9D\x03\x02' +
        '\x02\x02\x1C\xA6\x03\x02\x02\x02\x1E\xA8\x03\x02\x02\x02 "\x05\x04\x03' +
        '\x02! \x03\x02\x02\x02"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02' +
        "\x02\x02$&\x03\x02\x02\x02%#\x03\x02\x02\x02&\'\x07\x02\x02\x03\'\x03" +
        '\x03\x02\x02\x02(1\x05\x10\t\x02)1\x05\f\x07\x02*1\x05\x16\f\x02+1\x05' +
        '\n\x06\x02,1\x05\x06\x04\x02-1\x05\x1A\x0E\x02.1\x05\b\x05\x02/1\x05\x1E' +
        '\x10\x020(\x03\x02\x02\x020)\x03\x02\x02\x020*\x03\x02\x02\x020+\x03\x02' +
        '\x02\x020,\x03\x02\x02\x020-\x03\x02\x02\x020.\x03\x02\x02\x020/\x03\x02' +
        '\x02\x021\x05\x03\x02\x02\x0223\x07\x03\x02\x0234\x05\x04\x03\x0245\x07' +
        '\x04\x02\x0256\x07\x05\x02\x0267\x05\x04\x03\x027\x07\x03\x02\x02\x02' +
        '8<\x05\x0E\b\x029<\x07)\x02\x02:<\x07\x15\x02\x02;8\x03\x02\x02\x02;9' +
        '\x03\x02\x02\x02;:\x03\x02\x02\x02<\t\x03\x02\x02\x02=>\x05\x14\v\x02' +
        '>?\x07\x04\x02\x02?@\x05\b\x05\x02@A\x07\x07\x02\x02A\v\x03\x02\x02\x02' +
        'BD\x07\v\x02\x02CE\x07\n\x02\x02DC\x03\x02\x02\x02DE\x03\x02\x02\x02E' +
        'F\x03\x02\x02\x02FG\x05\x0E\b\x02GH\x07\t\x02\x02HI\x05\x14\v\x02IS\x03' +
        '\x02\x02\x02JK\x07\v\x02\x02KL\x07\t\x02\x02LN\x05\x14\v\x02MO\x07\n\x02' +
        '\x02NM\x03\x02\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x05\x0E\b' +
        '\x02QS\x03\x02\x02\x02RB\x03\x02\x02\x02RJ\x03\x02\x02\x02S\r\x03\x02' +
        '\x02\x02TY\x07\r\x02\x02UY\x07\x0E\x02\x02VY\x07\x0F\x02\x02WY\x07\x10' +
        '\x02\x02XT\x03\x02\x02\x02XU\x03\x02\x02\x02XV\x03\x02\x02\x02XW\x03\x02' +
        '\x02\x02Y\x0F\x03\x02\x02\x02Z\\\x07\x11\x02\x02[]\x07\n\x02\x02\\[\x03' +
        '\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x05\x1C\x0F\x02_`' +
        '\x07\t\x02\x02`b\x05\x14\v\x02ac\x07\x07\x02\x02ba\x03\x02\x02\x02bc\x03' +
        '\x02\x02\x02cl\x03\x02\x02\x02de\x07\x12\x02\x02ef\x05\x1C\x0F\x02fg\x07' +
        '\t\x02\x02gi\x05\x14\v\x02hj\x07\x07\x02\x02ih\x03\x02\x02\x02ij\x03\x02' +
        '\x02\x02jl\x03\x02\x02\x02kZ\x03\x02\x02\x02kd\x03\x02\x02\x02l\x11\x03' +
        '\x02\x02\x02mo\x07\x13\x02\x02np\x07\n\x02\x02on\x03\x02\x02\x02op\x03' +
        '\x02\x02\x02pq\x03\x02\x02\x02qr\x05\x1C\x0F\x02rs\x07\t\x02\x02su\x05' +
        '\x14\v\x02tv\x07\x07\x02\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02v\x7F' +
        '\x03\x02\x02\x02wx\x07\x14\x02\x02xy\x05\x1C\x0F\x02yz\x07\t\x02\x02z' +
        '|\x05\x14\v\x02{}\x07\x07\x02\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02' +
        '}\x7F\x03\x02\x02\x02~m\x03\x02\x02\x02~w\x03\x02\x02\x02\x7F\x13\x03' +
        '\x02\x02\x02\x80\x81\x07\x18\x02\x02\x81\x82\x07-\x02\x02\x82\x87\x07' +
        '\x19\x02\x02\x83\x84\x07\x1A\x02\x02\x84\x85\x07-\x02\x02\x85\x87\x07' +
        '\x1B\x02\x02\x86\x80\x03\x02\x02\x02\x86\x83\x03\x02\x02\x02\x87\x15\x03' +
        '\x02\x02\x02\x88\x89\x07 \x02\x02\x89\x8A\x07\t\x02\x02\x8A\x8B\x05\x14' +
        '\v\x02\x8B\x8C\x05\x18\r\x02\x8C\x8D\x07\x1C\x02\x02\x8D\x8E\x07\x1D\x02' +
        '\x02\x8E\x93\x03\x02\x02\x02\x8F\x90\x07 \x02\x02\x90\x91\x07\t\x02\x02' +
        '\x91\x93\x05\x14\v\x02\x92\x88\x03\x02\x02\x02\x92\x8F\x03\x02\x02\x02' +
        '\x93\x17\x03\x02\x02\x02\x94\x97\x07\x1E\x02\x02\x95\x96\x07\t\x02\x02' +
        '\x96\x98\x05\x14\v\x02\x97\x95\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02' +
        '\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02' +
        "\x9B\x9C\x07\x1F\x02\x02\x9C\x19\x03\x02\x02\x02\x9D\x9E\x07\'\x02\x02" +
        '\x9E\x9F\x05\x14\v\x02\x9F\xA0\x07&\x02\x02\xA0\xA1\x05\x14\v\x02\xA1' +
        '\x1B\x03\x02\x02\x02\xA2\xA3\x07\x1A\x02\x02\xA3\xA4\x07)\x02\x02\xA4' +
        '\xA7\x07\x1B\x02\x02\xA5\xA7\x07)\x02\x02\xA6\xA2\x03\x02\x02\x02\xA6' +
        '\xA5\x03\x02\x02\x02\xA7\x1D\x03\x02\x02\x02\xA8\xA9\x07-\x02\x02\xA9' +
        '\x1F\x03\x02\x02\x02\x15#0;DNRX\\bikou|~\x86\x92\x99\xA6'
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
    public declareNumber(): DeclareNumberContext | undefined {
        return this.tryGetRuleContext(0, DeclareNumberContext)
    }
    public declareString(): DeclareStringContext | undefined {
        return this.tryGetRuleContext(0, DeclareStringContext)
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
    public apply(): ApplyContext | undefined {
        return this.tryGetRuleContext(0, ApplyContext)
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
    public Number(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Number, 0) }
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


export class DeclareNumberContext extends ParserRuleContext {
    public _v: VariableContext
    public DeclareDigit(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareDigit, 0) }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)
    }
    public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0) }
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


export class VariableContext extends ParserRuleContext {
    public Left(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left, 0) }
    public Identifier(): TerminalNode { return this.getToken(WenyanParser.Identifier, 0) }
    public Right(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right, 0) }
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


export class ApplyContext extends ParserRuleContext {
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
    public get ruleIndex(): number { return WenyanParser.RULE_apply }
    // @Override
    public enterRule(listener: WenyanListener): void {
        if (listener.enterApply) {
            listener.enterApply(this)
        }
    }
    // @Override
    public exitRule(listener: WenyanListener): void {
        if (listener.exitApply) {
            listener.exitApply(this)
        }
    }
    // @Override
    public accept<Result>(visitor: WenyanVisitor<Result>): Result {
        if (visitor.visitApply) {
            return visitor.visitApply(this)
        } else {
            return visitor.visitChildren(this)
        }
    }
}


export class NumberContext extends ParserRuleContext {
    public _n: Token
    public Left3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left3, 0) }
    public Right3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right3, 0) }
    public Number(): TerminalNode { return this.getToken(WenyanParser.Number, 0) }
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


export class SkipStatementContext extends ParserRuleContext {
    public Identifier(): TerminalNode { return this.getToken(WenyanParser.Identifier, 0) }
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


