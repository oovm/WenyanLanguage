// Generated from Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { WenyanListener } from "./WenyanListener";
import { WenyanVisitor } from "./WenyanVisitor";


export class WenyanParser extends Parser {
	public static readonly If = 1;
	public static readonly EndIf = 2;
	public static readonly Else = 3;
	public static readonly Return = 4;
	public static readonly IHave = 5;
	public static readonly NameAs = 6;
	public static readonly ValueIs = 7;
	public static readonly DeclareString = 8;
	public static readonly DeclareStringIs = 9;
	public static readonly StringEmpty = 10;
	public static readonly StringEscape1 = 11;
	public static readonly StringEscape2 = 12;
	public static readonly StringEscape3 = 13;
	public static readonly DeclareDigit = 14;
	public static readonly DeclareDigitIs = 15;
	public static readonly Left = 16;
	public static readonly Right = 17;
	public static readonly Left3 = 18;
	public static readonly Right3 = 19;
	public static readonly FunctionStart = 20;
	public static readonly FunctionEnd = 21;
	public static readonly VariableStart = 22;
	public static readonly VariableEnd = 23;
	public static readonly DeclareMethod = 24;
	public static readonly ThisIs = 25;
	public static readonly Is = 26;
	public static readonly Said = 27;
	public static readonly MethodOf = 28;
	public static readonly EndDeclare = 29;
	public static readonly The = 30;
	public static readonly At = 31;
	public static readonly Apply = 32;
	public static readonly End = 33;
	public static readonly Number = 34;
	public static readonly Digit = 35;
	public static readonly Equal = 36;
	public static readonly Unequal = 37;
	public static readonly Identifier = 38;
	public static readonly Character = 39;
	public static readonly Underline = 40;
	public static readonly LineComment = 41;
	public static readonly PartComment = 42;
	public static readonly WhiteSpace = 43;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_ifStatement = 2;
	public static readonly RULE_data = 3;
	public static readonly RULE_declareString = 4;
	public static readonly RULE_string = 5;
	public static readonly RULE_declareNumber = 6;
	public static readonly RULE_variable = 7;
	public static readonly RULE_declarefunction = 8;
	public static readonly RULE_variables = 9;
	public static readonly RULE_apply = 10;
	public static readonly RULE_number = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "ifStatement", "data", "declareString", "string", 
		"declareNumber", "variable", "declarefunction", "variables", "apply", 
		"number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'\u300C'", "'\u300D'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "If", "EndIf", "Else", "Return", "IHave", "NameAs", "ValueIs", 
		"DeclareString", "DeclareStringIs", "StringEmpty", "StringEscape1", "StringEscape2", 
		"StringEscape3", "DeclareDigit", "DeclareDigitIs", "Left", "Right", "Left3", 
		"Right3", "FunctionStart", "FunctionEnd", "VariableStart", "VariableEnd", 
		"DeclareMethod", "ThisIs", "Is", "Said", "MethodOf", "EndDeclare", "The", 
		"At", "Apply", "End", "Number", "Digit", "Equal", "Unequal", "Identifier", 
		"Character", "Underline", "LineComment", "PartComment", "WhiteSpace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WenyanParser._LITERAL_NAMES, WenyanParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return WenyanParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Wenyan.g4"; }

	// @Override
	public get ruleNames(): string[] { return WenyanParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return WenyanParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(WenyanParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, WenyanParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << WenyanParser.If) | (1 << WenyanParser.DeclareString) | (1 << WenyanParser.StringEmpty) | (1 << WenyanParser.StringEscape1) | (1 << WenyanParser.StringEscape2) | (1 << WenyanParser.StringEscape3) | (1 << WenyanParser.DeclareDigit) | (1 << WenyanParser.DeclareDigitIs) | (1 << WenyanParser.DeclareMethod))) !== 0) || _la === WenyanParser.Apply || _la === WenyanParser.Identifier) {
				{
				{
				this.state = 24;
				this.statement();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 30;
			this.match(WenyanParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, WenyanParser.RULE_statement);
		try {
			this.state = 40;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WenyanParser.DeclareString:
			case WenyanParser.DeclareDigit:
			case WenyanParser.DeclareDigitIs:
			case WenyanParser.DeclareMethod:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 35;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case WenyanParser.DeclareDigit:
				case WenyanParser.DeclareDigitIs:
					{
					this.state = 32;
					this.declareNumber();
					}
					break;
				case WenyanParser.DeclareString:
					{
					this.state = 33;
					this.declareString();
					}
					break;
				case WenyanParser.DeclareMethod:
					{
					this.state = 34;
					this.declarefunction();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case WenyanParser.If:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.ifStatement();
				}
				break;
			case WenyanParser.Apply:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 38;
				this.apply();
				}
				}
				break;
			case WenyanParser.StringEmpty:
			case WenyanParser.StringEscape1:
			case WenyanParser.StringEscape2:
			case WenyanParser.StringEscape3:
			case WenyanParser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 39;
				this.data();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, WenyanParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(WenyanParser.If);
			this.state = 43;
			this.statement();
			this.state = 44;
			this.match(WenyanParser.EndIf);
			this.state = 45;
			this.match(WenyanParser.Else);
			this.state = 46;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public data(): DataContext {
		let _localctx: DataContext = new DataContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, WenyanParser.RULE_data);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WenyanParser.StringEmpty:
			case WenyanParser.StringEscape1:
			case WenyanParser.StringEscape2:
			case WenyanParser.StringEscape3:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 48;
				this.string();
				}
				}
				break;
			case WenyanParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.match(WenyanParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declareString(): DeclareStringContext {
		let _localctx: DeclareStringContext = new DeclareStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, WenyanParser.RULE_declareString);
		let _la: number;
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(WenyanParser.DeclareString);
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WenyanParser.ValueIs) {
					{
					this.state = 53;
					this.match(WenyanParser.ValueIs);
					}
				}

				this.state = 56;
				_localctx._s = this.string();
				this.state = 57;
				this.match(WenyanParser.NameAs);
				this.state = 58;
				_localctx._v = this.variable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.match(WenyanParser.DeclareString);
				this.state = 61;
				this.match(WenyanParser.NameAs);
				this.state = 62;
				_localctx._v = this.variable();
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WenyanParser.ValueIs) {
					{
					this.state = 63;
					this.match(WenyanParser.ValueIs);
					}
				}

				this.state = 66;
				_localctx._s = this.string();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, WenyanParser.RULE_string);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WenyanParser.StringEmpty:
				_localctx = new StringRemove0Context(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				this.match(WenyanParser.StringEmpty);
				}
				break;
			case WenyanParser.StringEscape1:
				_localctx = new StringRemove2Context(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.match(WenyanParser.StringEscape1);
				}
				break;
			case WenyanParser.StringEscape2:
				_localctx = new StringRemove1Context(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 72;
				this.match(WenyanParser.StringEscape2);
				}
				break;
			case WenyanParser.StringEscape3:
				_localctx = new StringRemove1Context(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 73;
				this.match(WenyanParser.StringEscape3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declareNumber(): DeclareNumberContext {
		let _localctx: DeclareNumberContext = new DeclareNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, WenyanParser.RULE_declareNumber);
		let _la: number;
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WenyanParser.DeclareDigit:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				this.match(WenyanParser.DeclareDigit);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WenyanParser.ValueIs) {
					{
					this.state = 77;
					this.match(WenyanParser.ValueIs);
					}
				}

				this.state = 80;
				this.number();
				this.state = 81;
				this.match(WenyanParser.NameAs);
				this.state = 82;
				_localctx._v = this.variable();
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WenyanParser.EndDeclare) {
					{
					this.state = 83;
					this.match(WenyanParser.EndDeclare);
					}
				}

				}
				break;
			case WenyanParser.DeclareDigitIs:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 86;
				this.match(WenyanParser.DeclareDigitIs);
				this.state = 87;
				this.number();
				this.state = 88;
				this.match(WenyanParser.NameAs);
				this.state = 89;
				_localctx._v = this.variable();
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === WenyanParser.EndDeclare) {
					{
					this.state = 90;
					this.match(WenyanParser.EndDeclare);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, WenyanParser.RULE_variable);
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WenyanParser.Left:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.match(WenyanParser.Left);
				this.state = 96;
				this.match(WenyanParser.Identifier);
				this.state = 97;
				this.match(WenyanParser.Right);
				}
				break;
			case WenyanParser.Left3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.match(WenyanParser.Left3);
				this.state = 99;
				this.match(WenyanParser.Identifier);
				this.state = 100;
				this.match(WenyanParser.Right3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarefunction(): DeclarefunctionContext {
		let _localctx: DeclarefunctionContext = new DeclarefunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, WenyanParser.RULE_declarefunction);
		try {
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.match(WenyanParser.DeclareMethod);
				this.state = 104;
				this.match(WenyanParser.NameAs);
				this.state = 105;
				this.variable();
				this.state = 106;
				this.variables();
				this.state = 107;
				this.match(WenyanParser.FunctionStart);
				this.state = 108;
				this.match(WenyanParser.FunctionEnd);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this.match(WenyanParser.DeclareMethod);
				this.state = 111;
				this.match(WenyanParser.NameAs);
				this.state = 112;
				this.variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variables(): VariablesContext {
		let _localctx: VariablesContext = new VariablesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, WenyanParser.RULE_variables);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(WenyanParser.VariableStart);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 116;
				this.match(WenyanParser.NameAs);
				this.state = 117;
				this.variable();
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === WenyanParser.NameAs);
			this.state = 122;
			this.match(WenyanParser.VariableEnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apply(): ApplyContext {
		let _localctx: ApplyContext = new ApplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, WenyanParser.RULE_apply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(WenyanParser.Apply);
			this.state = 125;
			_localctx._f = this.variable();
			this.state = 126;
			this.match(WenyanParser.At);
			this.state = 127;
			_localctx._x = this.variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, WenyanParser.RULE_number);
		try {
			this.state = 133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case WenyanParser.Left3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.match(WenyanParser.Left3);
				this.state = 130;
				_localctx._n = this.match(WenyanParser.Number);
				this.state = 131;
				this.match(WenyanParser.Right3);
				}
				break;
			case WenyanParser.Number:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 132;
				_localctx._n = this.match(WenyanParser.Number);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\x8A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x07\x02\x1C\n\x02\f\x02\x0E\x02\x1F\v\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x05\x03&\n\x03\x03\x03\x03\x03\x03\x03\x05\x03+\n\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05" +
		"5\n\x05\x03\x06\x03\x06\x05\x069\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06C\n\x06\x03\x06\x03\x06\x05\x06" +
		"G\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07M\n\x07\x03\b\x03\b\x05" +
		"\bQ\n\b\x03\b\x03\b\x03\b\x03\b\x05\bW\n\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b^\n\b\x05\b`\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\th\n" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nt" +
		"\n\n\x03\v\x03\v\x03\v\x06\vy\n\v\r\v\x0E\vz\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x05\r\x88\n\r\x03\r\x02\x02\x02" +
		"\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x02\x02\x02\x92\x02\x1D\x03\x02\x02\x02\x04*" +
		"\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b4\x03\x02\x02\x02\nF\x03\x02\x02" +
		"\x02\fL\x03\x02\x02\x02\x0E_\x03\x02\x02\x02\x10g\x03\x02\x02\x02\x12" +
		"s\x03\x02\x02\x02\x14u\x03\x02\x02\x02\x16~\x03\x02\x02\x02\x18\x87\x03" +
		"\x02\x02\x02\x1A\x1C\x05\x04\x03\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1F\x03" +
		"\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03" +
		"\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07\x02\x02\x03!\x03\x03\x02\x02" +
		"\x02\"&\x05\x0E\b\x02#&\x05\n\x06\x02$&\x05\x12\n\x02%\"\x03\x02\x02\x02" +
		"%#\x03\x02\x02\x02%$\x03\x02\x02\x02&+\x03\x02\x02\x02\'+\x05\x06\x04" +
		"\x02(+\x05\x16\f\x02)+\x05\b\x05\x02*%\x03\x02\x02\x02*\'\x03\x02\x02" +
		"\x02*(\x03\x02\x02\x02*)\x03\x02\x02\x02+\x05\x03\x02\x02\x02,-\x07\x03" +
		"\x02\x02-.\x05\x04\x03\x02./\x07\x04\x02\x02/0\x07\x05\x02\x0201\x05\x04" +
		"\x03\x021\x07\x03\x02\x02\x0225\x05\f\x07\x0235\x07(\x02\x0242\x03\x02" +
		"\x02\x0243\x03\x02\x02\x025\t\x03\x02\x02\x0268\x07\n\x02\x0279\x07\t" +
		"\x02\x0287\x03\x02\x02\x0289\x03\x02\x02\x029:\x03\x02\x02\x02:;\x05\f" +
		"\x07\x02;<\x07\b\x02\x02<=\x05\x10\t\x02=G\x03\x02\x02\x02>?\x07\n\x02" +
		"\x02?@\x07\b\x02\x02@B\x05\x10\t\x02AC\x07\t\x02\x02BA\x03\x02\x02\x02" +
		"BC\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x05\f\x07\x02EG\x03\x02\x02\x02" +
		"F6\x03\x02\x02\x02F>\x03\x02\x02\x02G\v\x03\x02\x02\x02HM\x07\f\x02\x02" +
		"IM\x07\r\x02\x02JM\x07\x0E\x02\x02KM\x07\x0F\x02\x02LH\x03\x02\x02\x02" +
		"LI\x03\x02\x02\x02LJ\x03\x02\x02\x02LK\x03\x02\x02\x02M\r\x03\x02\x02" +
		"\x02NP\x07\x10\x02\x02OQ\x07\t\x02\x02PO\x03\x02\x02\x02PQ\x03\x02\x02" +
		"\x02QR\x03\x02\x02\x02RS\x05\x18\r\x02ST\x07\b\x02\x02TV\x05\x10\t\x02" +
		"UW\x07\x1F\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02W`\x03\x02\x02\x02" +
		"XY\x07\x11\x02\x02YZ\x05\x18\r\x02Z[\x07\b\x02\x02[]\x05\x10\t\x02\\^" +
		"\x07\x1F\x02\x02]\\\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02" +
		"_N\x03\x02\x02\x02_X\x03\x02\x02\x02`\x0F\x03\x02\x02\x02ab\x07\x12\x02" +
		"\x02bc\x07(\x02\x02ch\x07\x13\x02\x02de\x07\x14\x02\x02ef\x07(\x02\x02" +
		"fh\x07\x15\x02\x02ga\x03\x02\x02\x02gd\x03\x02\x02\x02h\x11\x03\x02\x02" +
		"\x02ij\x07\x1A\x02\x02jk\x07\b\x02\x02kl\x05\x10\t\x02lm\x05\x14\v\x02" +
		"mn\x07\x16\x02\x02no\x07\x17\x02\x02ot\x03\x02\x02\x02pq\x07\x1A\x02\x02" +
		"qr\x07\b\x02\x02rt\x05\x10\t\x02si\x03\x02\x02\x02sp\x03\x02\x02\x02t" +
		"\x13\x03\x02\x02\x02ux\x07\x18\x02\x02vw\x07\b\x02\x02wy\x05\x10\t\x02" +
		"xv\x03\x02\x02\x02yz\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02\x02\x02" +
		"{|\x03\x02\x02\x02|}\x07\x19\x02\x02}\x15\x03\x02\x02\x02~\x7F\x07\"\x02" +
		"\x02\x7F\x80\x05\x10\t\x02\x80\x81\x07!\x02\x02\x81\x82\x05\x10\t\x02" +
		"\x82\x17\x03\x02\x02\x02\x83\x84\x07\x14\x02\x02\x84\x85\x07$\x02\x02" +
		"\x85\x88\x07\x15\x02\x02\x86\x88\x07$\x02\x02\x87\x83\x03\x02\x02\x02" +
		"\x87\x86\x03\x02\x02\x02\x88\x19\x03\x02\x02\x02\x12\x1D%*48BFLPV]_gs" +
		"z\x87";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WenyanParser.__ATN) {
			WenyanParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WenyanParser._serializedATN));
		}

		return WenyanParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(WenyanParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_program; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declareNumber(): DeclareNumberContext | undefined {
		return this.tryGetRuleContext(0, DeclareNumberContext);
	}
	public declareString(): DeclareStringContext | undefined {
		return this.tryGetRuleContext(0, DeclareStringContext);
	}
	public declarefunction(): DeclarefunctionContext | undefined {
		return this.tryGetRuleContext(0, DeclarefunctionContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public apply(): ApplyContext | undefined {
		return this.tryGetRuleContext(0, ApplyContext);
	}
	public data(): DataContext | undefined {
		return this.tryGetRuleContext(0, DataContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_statement; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(WenyanParser.If, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public EndIf(): TerminalNode { return this.getToken(WenyanParser.EndIf, 0); }
	public Else(): TerminalNode { return this.getToken(WenyanParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_data; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterData) {
			listener.enterData(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitData) {
			listener.exitData(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitData) {
			return visitor.visitData(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareStringContext extends ParserRuleContext {
	public _s: StringContext;
	public _v: VariableContext;
	public DeclareString(): TerminalNode { return this.getToken(WenyanParser.DeclareString, 0); }
	public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public ValueIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.ValueIs, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_declareString; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterDeclareString) {
			listener.enterDeclareString(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitDeclareString) {
			listener.exitDeclareString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitDeclareString) {
			return visitor.visitDeclareString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_string; }
	public copyFrom(ctx: StringContext): void {
		super.copyFrom(ctx);
	}
}
export class StringRemove0Context extends StringContext {
	public StringEmpty(): TerminalNode { return this.getToken(WenyanParser.StringEmpty, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterStringRemove0) {
			listener.enterStringRemove0(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitStringRemove0) {
			listener.exitStringRemove0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitStringRemove0) {
			return visitor.visitStringRemove0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringRemove2Context extends StringContext {
	public StringEscape1(): TerminalNode { return this.getToken(WenyanParser.StringEscape1, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterStringRemove2) {
			listener.enterStringRemove2(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitStringRemove2) {
			listener.exitStringRemove2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitStringRemove2) {
			return visitor.visitStringRemove2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringRemove1Context extends StringContext {
	public StringEscape2(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.StringEscape2, 0); }
	public StringEscape3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.StringEscape3, 0); }
	constructor(ctx: StringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterStringRemove1) {
			listener.enterStringRemove1(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitStringRemove1) {
			listener.exitStringRemove1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitStringRemove1) {
			return visitor.visitStringRemove1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareNumberContext extends ParserRuleContext {
	public _v: VariableContext;
	public DeclareDigit(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareDigit, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public ValueIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.ValueIs, 0); }
	public EndDeclare(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.EndDeclare, 0); }
	public DeclareDigitIs(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.DeclareDigitIs, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_declareNumber; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterDeclareNumber) {
			listener.enterDeclareNumber(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitDeclareNumber) {
			listener.exitDeclareNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitDeclareNumber) {
			return visitor.visitDeclareNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public Left(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left, 0); }
	public Identifier(): TerminalNode { return this.getToken(WenyanParser.Identifier, 0); }
	public Right(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right, 0); }
	public Left3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left3, 0); }
	public Right3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right3, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_variable; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarefunctionContext extends ParserRuleContext {
	public DeclareMethod(): TerminalNode { return this.getToken(WenyanParser.DeclareMethod, 0); }
	public NameAs(): TerminalNode { return this.getToken(WenyanParser.NameAs, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public variables(): VariablesContext | undefined {
		return this.tryGetRuleContext(0, VariablesContext);
	}
	public FunctionStart(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.FunctionStart, 0); }
	public FunctionEnd(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.FunctionEnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_declarefunction; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterDeclarefunction) {
			listener.enterDeclarefunction(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitDeclarefunction) {
			listener.exitDeclarefunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitDeclarefunction) {
			return visitor.visitDeclarefunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariablesContext extends ParserRuleContext {
	public VariableStart(): TerminalNode { return this.getToken(WenyanParser.VariableStart, 0); }
	public VariableEnd(): TerminalNode { return this.getToken(WenyanParser.VariableEnd, 0); }
	public NameAs(): TerminalNode[];
	public NameAs(i: number): TerminalNode;
	public NameAs(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(WenyanParser.NameAs);
		} else {
			return this.getToken(WenyanParser.NameAs, i);
		}
	}
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_variables; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterVariables) {
			listener.enterVariables(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitVariables) {
			listener.exitVariables(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitVariables) {
			return visitor.visitVariables(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApplyContext extends ParserRuleContext {
	public _f: VariableContext;
	public _x: VariableContext;
	public Apply(): TerminalNode { return this.getToken(WenyanParser.Apply, 0); }
	public At(): TerminalNode { return this.getToken(WenyanParser.At, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_apply; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterApply) {
			listener.enterApply(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitApply) {
			listener.exitApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitApply) {
			return visitor.visitApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public _n: Token;
	public Left3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Left3, 0); }
	public Right3(): TerminalNode | undefined { return this.tryGetToken(WenyanParser.Right3, 0); }
	public Number(): TerminalNode { return this.getToken(WenyanParser.Number, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return WenyanParser.RULE_number; }
	// @Override
	public enterRule(listener: WenyanListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: WenyanListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WenyanVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


