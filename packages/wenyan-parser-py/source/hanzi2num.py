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
    '溝': '沟',
    '澗': '涧',
    '載': '载',
    '極': '极',

    '两': '二',
    '廿': '二十',
    '卅': '三十',
    '卌': '四十',
    '皕': '二百',
}

digit_map_s = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
    '百': 12
}
digit_map_m = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
    '百': 12, '千': 13, '万': 14, '亿': 18,
}
digit_map_l = {
    '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
    '百': 12
}

NORM_PATTERN = re.compile("|".join([re.escape(k) for k in sorted(NORM, key=len, reverse=True)]), flags=re.DOTALL)


def hanzi_norm(string: str):
    return NORM_PATTERN.sub(lambda x: NORM[x.group(0)], string)


def parse_int_base(a, digit_map=None):
    if digit_map is None:
        digit_map = digit_map_m
    count = len(a) - 1
    result = 0
    tmp = 0
    while count >= 0:
        tmp_chr = a[count:count + 1]
        tmp_num = digit_map[tmp_chr]
        if tmp_num > 10:
            # 获取0的个数
            tmp = tmp_num - 10
        else:
            # 如果是个位数
            if tmp == 0:
                result += tmp_num
            else:
                result += pow(10, tmp) * tmp_num
            tmp = tmp + 1
        count = count - 1
    return result
