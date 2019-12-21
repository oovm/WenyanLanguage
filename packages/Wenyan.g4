grammar Wenyan;
// $antlr-format useTab false;
// $antlr-format columnLimit 160;
// $antlr-format alignColons hanging;
program: statement* EOF;
statement
    : declaremodule
    | declareNumber
    | declareString
    | declareBoolean
    | declarefunction
    | declareData
    | ifStatement
    | applyStatement
    | data
    | skipStatement;
/*====================================================================================================================*/
// $antlr-format alignColons trailing;
ifStatement : If statement EndDeclare Else statement;
If          : Ruo; // 若
EndDeclare  : Zhe; // 者
Else        : Ruo Fei; // 若非
Return      : Nai De; // 乃得

fragment Ruo : '若';
fragment Fei : '非';
fragment Nai : '乃';
fragment De  : '得';
fragment Zhe : '者';
/*====================================================================================================================*/
data        : string | digits | Boolean;
declareData : variable EndDeclare data EndStatment;

EndStatment : Zhe? Ye;

IHave : (Jin | Wu | Zi | You | You2)? You Yi?; //吾有一

fragment Jin  : '今';
fragment Wu   : '吾';
fragment Zi   : '兹';
fragment You  : '有';
fragment You2 : '又';
fragment Yi   : '一';

NameAs  : Ming Zhi? Yue | Ming Zhi Yue? | Ci? Suo Wei | Wei Zhi Yue?; //名之曰
ValueIs : Yue; //曰

fragment Ming : '名';
fragment Zhi  : '之';
fragment Yue  : '曰';
fragment Ci   : '此';
fragment Suo  : '所';
fragment Wei  : '謂' | '谓';
/*====================================================================================================================*/
// 有一书名曰 《九章算数》, 载 「求和」之术, 今名之曰 「加」
module        : Left3 Identifier Right3 | Left5 Identifier Right5 | Left6 Identifier Right6;
declaremodule : DeclareModule m = module RanameAs v = variable;

DeclareModule : You Yi? Shu3 Ming Yue; //有一书名曰
RanameAs      : Jin NameAs; //今名之曰

Left5         : '《';
Right5        : '》';
Left6         : '<<';
Right6        : '>>';
fragment Zai  : '载';
fragment Shu3 : '书';
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
declareString
    : DeclareString ValueIs? s = string NameAs v = variable
    | DeclareString NameAs v = variable ValueIs? s = string;
// $antlr-format alignColons trailing;
DeclareString   : IHave Yan; //吾有一言
DeclareStringIs : DeclareString ValueIs?;
fragment Yan    : '言';

// $antlr-format alignColons hanging;
string
    : StringEmpty   # StringRemove0
    | StringEscape1 # StringRemove2
    | StringEscape2 # StringRemove1
    | StringEscape3 # StringRemove1;
StringEmpty: Left2 Right2 | String3 String3 | Left4 Right4;
// $antlr-format alignColons trailing;
StringEscape1      : Left2 NonEscape+ Right2;
StringEscape2      : Left2 NonEscape+ Right2;
StringEscape3      : String3 NonEscape+ String3;
fragment Left2     : '「「';
fragment Right2    : '」」';
fragment Left4     : '『';
fragment Right4    : '』';
fragment String3   : '"';
fragment NonEscape : '\\' (["\\/0bfnrt]) | ~[\\];
/*====================================================================================================================*/
variable : Left v = Identifier Right | Left3 v = Identifier Right3;
Left     : '「';
Right    : '」';
Left3    : '[';
Right3   : ']';
/*====================================================================================================================*/
applyStatement : applyFunction | applyStack;
//施「翻倍」於「大衍」
applyFunction : Apply f = variable At x = variable;
Apply         : Shi2; //施
At            : Yu; // 于
//入「戊」「丙」「斯」取二求「丁」入「甲」「斯」取二求「乙」求「己」得「斯」
applyStack  : stackIn (stackIn | stackPopOne | stackPop)+ (stackOut | stackReturn);
stackIn     : StackIn variable+; //入 [var] [var] [var]
stackPopOne : StackPop variable; //求 [var]
stackPop    : Get digits StackPop variable; // 取 [num] 求 [var]
stackOut    : Get variable; //得「斯」
stackReturn : Get The; //得之
StackIn     : Ru; // 入
Take        : Qu; //取
StackPop    : Qiu; //求
Get         : De2; //得

fragment Shi2 : '施';
fragment Ru   : '入';
fragment Qiu  : '求';
fragment Qu   : '取';
fragment De2  : '得';

The          : Zhi;
End          : Yun Yun; //云云
fragment Yun : '云' | '雲';
/*====================================================================================================================*/
//吾有一術。名之曰「六脈神劍」。欲行是術。必先得六數。曰「甲」。曰「乙」。曰「丙」。曰「丁」。曰「戊」。曰「己」乃行
// 是術曰。⋯⋯是謂「六脈神劍」之術也。
// $antlr-format alignColons hanging;
declarefunction
    : DeclareMethod NameAs variable variables FunctionStart FunctionEnd
    | DeclareMethod NameAs variable;
// $antlr-format alignColons trailing;
FunctionStart : Is Shu2 ValueIs; //是术曰
FunctionEnd   : ThisIs . MethodOf; //是谓「XX」之术也

//欲行是術必先得六數
variables : VariableStart (NameAs variable)+ VariableEnd;

VariableStart : Yu2 Xing Is Shu2 '必先得' Shu;
VariableEnd   : Nai Xing;
fragment Yu2  : '欲';
fragment Xing : '行';

DeclareMethod : IHave Shu2; //吾有一术
fragment Shu2 : '術' | '术';

ThisIs       : Shi Wei; // 是谓
Is           : Shi;
Said         : Wei;
MethodOf     : Of Shu2 Ye; // 之术也
fragment Shi : '是';
fragment Of  : '之';
fragment Ye  : '也';
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
declareNumber
    : DeclareDigit ValueIs? n = number NameAs v = variable EndStatment?
    | DeclareDigitIs n = number NameAs v = variable EndStatment?;
// $antlr-format alignColons trailing;
DeclareDigit   : IHave Shu;
DeclareDigitIs : DeclareDigit ValueIs?; //吾有一数
fragment Shu   : '數' | '数';
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
declareBoolean
    : DeclareBoolean ValueIs? number NameAs v = variable EndStatment?
    | DeclareBooleanIs number NameAs v = variable EndStatment?;
// $antlr-format alignColons trailing;
DeclareBoolean   : IHave Bo;
DeclareBooleanIs : DeclareDigit ValueIs?; //吾有一爻
fragment Bo      : '爻';

Boolean : TRUE | FALSE;
TRUE    : '阳' | '陽';
FALSE   : '阴' | '陰';
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
number: Left3 n = digits Right3 | n = digits;
digits
    : IntegerDigit+   # NumberInteger
    | IntegerDigitCN+ # NumberIntegerCN
    | FloatDigit+     # NumberFloat
    | FloatDigitCN+   # NumberFloatCN;
// $antlr-format alignColons trailing;
IntegerDigit   : [0-9];
FloatDigit     : [.]| IntegerDigit;
IntegerDigitCN : [零一二三四五六七八九十百千万亿兆];
FloatDigitCN   : [点又有] | IntegerDigitCN;
/*====================================================================================================================*/
Equal   : '=' | Den Yu;
Unequal : '≠' | '!=' | Bu Den Yu;

fragment Bu  : '不';
fragment Den : '等';
fragment Yu   : '於' | '于';
/*====================================================================================================================*/
skipStatement : Identifier | Character;
Identifier    : ForbiddenHead Character*;
Character     : [\p{Latin}]| [\p{Han}] | [\p{Hiragana}] | [\p{Katakana}];
//[阴阳零一二三四五六七八九十百千万亿兆陰陽壹萬億]|
fragment ForbiddenHead:
    ~(
        [有曰吾若]
        | '\u0000' ..'\u2E7F' //Supplemental Punctuation 扇区
        | '\u3000' ..'\u303F' //CJK Symbols and Punctuation 扇区
        | '\uFF01' ..'\uFF11' //Halfwidth and Fullwidth Forms 扇区
    );
/*====================================================================================================================*/
LineComment                : CommentStart ~[\r\n]* -> channel(HIDDEN);
PartComment                : Comment .*? Comment -> channel(HIDDEN);
WhiteSpace                 : UnicodeWhiteSpace+ -> skip;
fragment CommentStart      : ('注' | '疏' | '批') Yue;
fragment Comment           : ('注' | '疏' | '批') '毕';
fragment UnicodeWhiteSpace : [\p{White_Space}]| Delimiter;
fragment Delimiter         : [。，！]| [.,!;?];
