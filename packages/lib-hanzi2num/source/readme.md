




```mathematica
s = TemplateApply["'`1`':`2`n,", #]& /@ Transpose[{
	Characters@"十百千万亿兆京垓秭穰沟涧正载极",
	10^Range[15]
}];
m = TemplateApply["'`1`':`2`n,", #]& /@ Transpose[{
	Characters@"十百千万亿兆京垓秭穰沟涧正载极",
	10^Join[{1, 2, 3}, 4 * Range[12]]
}];
l = TemplateApply["'`1`':`2`n,", #]& /@ Transpose[{
	Characters@"十百千万亿兆京垓秭穰沟涧正载极",
	10^Join[{1, 2, 3}, 2^Range[2, 13]]
}]
StringRiffle[{
	"const UNIT_S={\n" <> StringRiffle[s, "\n"] <> "\n}",
	"const UNIT_M={\n" <> StringRiffle[m, "\n"] <> "\n}",
	"const UNIT_L={\n" <> StringRiffle[l, "\n"] <> "\n}"
}, "\n\n"] // CopyToClipboard
```
