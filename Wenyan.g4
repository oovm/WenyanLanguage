grammar Wenyan;
// $antlr-format useTab false ;
// $antlr-format columnLimit 160;
// $antlr-format alignColons trailing;
program   : statement* EOF;
statement : (declaration);
/*====================================================================================================================*/
declaration : declareNumber | declarefunction;
ifStatement : If statement EndIf Else statement;
If          : 'if' | '若';
EndIf       : '者';
Else        : '若非';
Return      : 'return' | '乃得';
/*====================================================================================================================*/
//data : (string);
IHaveA  : '吾有一';
ValueIs : '曰';
NameAs  : '名之曰';
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
string: Left2 Right2 | StringPair StringPair | Left2 text = . Right2 | StringPair text = . StringPair;
// $antlr-format alignColons trailing;
Left2      : '「「';
Right2     : '」」';
StringPair : '"';
/*====================================================================================================================*/
//吾有一數。曰三。名之曰「甲」。
declareNumber : DeclareDigit ValueIs . NameAs variable;

DeclareDigit   : IHaveA Digit; //吾有一数
fragment Digit : '數' | '数';
/*====================================================================================================================*/
variable : Left . Right;
Left     : '「';
Right    : '」';
Left3    : '(';
Right3   : ')';
/*====================================================================================================================*/
//吾有一術。名之曰「六脈神劍」。欲行是術。必先得六數。曰「甲」。曰「乙」。曰「丙」。曰「丁」。曰「戊」。曰「己」乃行
// 是術曰。⋯⋯是謂「六脈神劍」之術也。
// $antlr-format alignColons hanging;
declarefunction
    : DeclareMethod NameAs variable variables FunctionStart FunctionEnd
    | DeclareMethod NameAs variable;
// $antlr-format alignColons trailing;
FunctionStart : Is Method ValueIs; //是术曰
FunctionEnd   : ThisIs . MethodOf; //是谓「XX」之术也

//欲行是術必先得六數
variables : VariableStart (NameAs variable)+ VariableEnd;

VariableStart : '欲行' Is Method '必先得' Number Digit;
VariableEnd   : '乃行';

DeclareMethod   : IHaveA Method; //吾有一术
fragment Method : '術' | '术';
ThisIs          : Is Said; // 是谓
fragment Is     : '是';
fragment Said   : '謂' | '谓';
MethodOf        : Of Method The; // 之术也
fragment Of     : '之';
fragment The    : '也';

//施「翻倍」於「大衍」
apply : Apply f = variable At x = variable;

Apply : '施';
At    : '於' | '于';
/*====================================================================================================================*/
Number : Zero;
Zero   : '零';
One    : '一';
Two    : '二';
Three  : '三';
Four   : '四';
Five   : '五';
Six    : '六';
Seven  : '七';
Eight  : '八';
Nine   : '九';
Ten    : '十';

End : '云云';
/*====================================================================================================================*/
Equal   : '=' | '等於' | '等于';
Unequal : '≠' | '!=' | '不等於' | '不等于';
/*====================================================================================================================*/
Identifier : Character+;
Character  : Underline | [\p{Latin}]| [\p{Han}] | [\p{Hiragana}] | [\p{Katakana}];
Underline  : '_' | '-';
/*====================================================================================================================*/
LineComment                : Sharp ~[\r\n]* -> channel(HIDDEN);
PartComment                : Comment .*? Comment -> channel(HIDDEN);
WhiteSpace                 : UnicodeWhiteSpace+ -> skip;
fragment Sharp             : '%';
fragment Comment           : '%%%';
fragment UnicodeWhiteSpace : [\p{White_Space}]| '。';

