from unittest import TestCase
from ..source.hanzi2num import hanzi_norm, parse_int_m


class Hanzi2Number(TestCase):
    def test_norm(self):
        self.assertEqual(hanzi_norm('两百'), '二百')

    # FIXME
    def test_int(self):
        # self.assertEqual(parse_int_m('负一'), 0)
        self.assertEqual(parse_int_m('〇'), 0)
        self.assertEqual(parse_int_m('十一'), 11)
        self.assertEqual(parse_int_m('一十一'), 11)
        self.assertEqual(parse_int_m('廿肆'), 24)
        self.assertEqual(parse_int_m('两百'), 200)
        self.assertEqual(parse_int_m('零零七'), 7)  # not feature
        # self.assertEqual(parse_int_m('二百五'), 250)
        self.assertEqual(parse_int_m('二百五十'), 250)
        self.assertEqual(parse_int_m('一千零一'), 1001)
        self.assertEqual(parse_int_m('一零九九'), 1099)
        self.assertEqual(parse_int_m('一千零九十九'), 1099)
        self.assertEqual(parse_int_m('四万零九百九十三'), 40993)
        self.assertEqual(parse_int_m('五百萬'), 5000000)
        self.assertEqual(parse_int_m('一萬萬'), 100000000)  # not feature
        # self.assertEqual(parse_int_m('十三亿'), 1300000000)
        self.assertEqual(parse_int_m('四万亿'), 4000000000000)
        self.assertEqual(parse_int_m('十万亿'), 10000000000000)


if __name__ == '__main__':
    test_parser = Hanzi2Number()
    test_parser.test_norm()
    test_parser.test_int()
