grammar Wenyan;
// $antlr-format useTab false ;
// $antlr-format columnLimit 160;
// $antlr-format alignColons trailing;
program   : statement* EOF;
statement : (declaration);
/*====================================================================================================================*/
declaration : declareNumber;
ifStatement : If statement EndIf Else statement;
If          : 'if' | '若';
EndIf       : '者';
Else        : '若非';
Return      : 'return' | '乃得';
/*====================================================================================================================*/
//data : (string);
Declaration : '吾有一';
ValueIs     : '曰';
NameAs      : '名之曰';
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
string
    : Left2 Right2
    | StringPair StringPair
    | Left2 text = NonEscape+? Right2
    | StringPair text = NonEscape+? StringPair;
// $antlr-format alignColons trailing;
Left2      : '「「';
Right2     : '」」';
StringPair : '"';
NonEscape  : ~[\u0001]+?;
/*====================================================================================================================*/
//吾有一數。曰三。名之曰「甲」。
declareNumber : Declaration Digit ValueIs NameAs variable;
Digit         : '數' | '数';
/*====================================================================================================================*/
variable : Left . Right | Left3 . Right3;
Left     : '「';
Right    : '」';
Left3    : '(';
Right3   : ')';

Function : Declaration Method;

//施「翻倍」於「大衍」
apply : Apply f = variable At x = variable;

fragment Method : '術';
Apply           : '施';
At              : '於';
/*====================================================================================================================*/
Zero  : '零';
One   : '一';
Two   : '二';
Three : '三';
Four  : '四';
Five  : '五';
Six   : '六';
Seven : '七';
Eight : '八';
Nine  : '九';
Ten   : '十';

End : '云云';
/*====================================================================================================================*/
Equal   : '=' | '等於' | '等于';
Unequal : '≠' | '!=' | '不等於' | '不等于';
/*====================================================================================================================*/
LineComment                : Sharp ~[\r\n]* -> channel(HIDDEN);
PartComment                : Comment .*? Comment -> channel(HIDDEN);
WhiteSpace                 : UnicodeWhiteSpace+ -> skip;
fragment Sharp             : '%';
fragment Comment           : '%%%';
fragment UnicodeWhiteSpace : [\p{White_Space}]| '。';
