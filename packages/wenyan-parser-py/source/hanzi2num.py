# 小写：〇、一、二、三、四、五、六、七、八、九、十、百、千、万、亿、兆、京、垓、秭、穰、沟、涧、正、载、极
# 大写：零、壹、贰、叁、肆、伍、陆、柒、捌、玖、拾、佰、仟、万、亿、兆、京、垓、秭、穰、沟、涧、正、载、极
# 正體：〇、壹、二、三、四、五、六、七、八、九、十、百、千、萬、億、兆、京、垓、秭、穰、溝、澗、正、載、極
# 简体: 分、厘、毫、丝、忽、微、纤、沙、尘、埃、渺、漠
# 正體: 分、釐、毫、絲、忽、微、纖、沙、塵、埃、渺、漠
import re

NORM = {
    '〇': '零',
    '壹': '一',
    '贰': '二',
    '叁': '三',
    '肆': '四',
    '伍': '五',
    '陆': '六',
    '柒': '七',
    '捌': '八',
    '玖': '九',
    '拾': '十',
    '佰': '百',
    '仟': '千',
    '萬': '万',
    '億': '亿',
    '穣': '穰',
    '溝': '沟',
    '澗': '涧',
    '載': '载',
    '極': '极',

    '两': '二',
    '廿': '二十',
    '卅': '三十',
    '卌': '四十',
    '皕': '二百',

    '又': '点',
    '有': '点',

    '釐': '厘',
    '絲': '丝',
    '纖': '纤',
    '塵': '尘',
}

DIGIT_MAP_S = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9,
    '十': 11, '百': 12, '千': 13, '万': 14, '亿': 15, '兆': 16, '京': 17, '垓': 18, '秭': 19, '穰': 20,
    '沟': 21, '涧': 22, '正': 23, '载': 24, '极': 25
}
DIGIT_MAP_M = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9,
    '十': 11, '百': 12, '千': 13, '万': 14, '亿': 18, '兆': 22, '京': 26, '垓': 30,
    '秭': 34, '穰': 38, '沟': 42, '涧': 46, '正': 50, '载': 54, '极': 56
}
DIGIT_MAP_L = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9,
    '十': 11, '百': 12, '千': 13, '万': 14, '亿': 18, '兆': 26, '京': 42, '垓': 74,
    '秭': 138, '穰': 266, '沟': 522,
    '涧': 1034, '正': 2058, '载': 4106, '极': 8202
}

NORM_PATTERN = re.compile("|".join([re.escape(k) for k in sorted(NORM, key=len, reverse=True)]), flags=re.DOTALL)


def hanzi_norm(string: str) -> str:
    return NORM_PATTERN.sub(lambda x: NORM[x.group(0)], string)


def integer_fix(a: str) -> str:
    # remove char not in digit_map
    b = a

    if not b.startswith(tuple("零一二三四五六七八九")):
        # 十万 -> 一十万
        c = "一" + b
    else:
        c = a

    # 一千三 -> 一千三百
    d = c
    return d


def parse_int_base(a: str, digit_map=None):
    if digit_map is None:
        digit_map = DIGIT_MAP_M
    switch = False
    multiply = 0
    value = 0
    for i in a[::-1]:
        n = digit_map[i]
        if n > 10 and switch:
            # 如果这次是倍数, 之前也是倍数
            multiply += n - 10
            switch = True
        elif n > 10:
            # 如果这次是倍数, 但上次不是倍数
            multiply = n - 10
            switch = True
        else:
            # 如果是个位数
            value += pow(10, multiply) * n
            multiply += 1
            switch = False
    return value


def parse_int_s(digit: str) -> int:
    n = hanzi_norm(digit)
    r = parse_int_base(integer_fix(n), digit_map=DIGIT_MAP_S)
    return -r if n.startswith('负') else r


def parse_int_m(digit: str) -> int:
    n = hanzi_norm(digit)
    r = parse_int_base(integer_fix(n), digit_map=DIGIT_MAP_M)
    return -r if n.startswith('负') else r


def parse_int_l(digit: str) -> int:
    n = hanzi_norm(digit)
    r = parse_int_base(integer_fix(n), digit_map=DIGIT_MAP_L)
    return -r if n.startswith('负') else r
