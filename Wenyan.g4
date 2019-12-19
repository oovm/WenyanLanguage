grammar Wenyan;
// $antlr-format useTab false ;
// $antlr-format columnLimit 160;
// $antlr-format alignColons trailing;
program   : statement* EOF;
statement : (declaration | data);
/*====================================================================================================================*/
declaration : '吾有一[' Digit ']';

/*====================================================================================================================*/
data : (string);
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
string
    : StringStart StringEnd
    | StringPair StringPair
    | StringStart text = NonEscape+? StringEnd
    | StringPair text = NonEscape+? StringPair;
// $antlr-format alignColons trailing;
StringStart : '「「';
StringEnd   : '」」';
StringPair  : '"';
NonEscape   : ~[\u0001]+?;
/*====================================================================================================================*/
Digit : Zero | One;
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
