from unittest import TestCase
from ..source.hanzi2num import hanzi_norm, parse_int_m


class Hanzi2Number(TestCase):
    def test_norm(self):
        self.assertEqual(hanzi_norm('两百'), '二百')

    def test_int(self):
        self.assertEqual(parse_int_m('两百'), 200)
        self.assertEqual(parse_int_m('零零七'), 7)  # not feature
        self.assertEqual(parse_int_m('二百五十一'), 251)
        # self.assertEqual(parse_int_m('五百萬'), 5000000)
        # self.assertEqual(parse_int_m('十三亿'), 1300000000)
        # self.assertEqual(parse_int_m('四万亿'), 400000000)


if __name__ == '__main__':
    test_parser = Hanzi2Number()
    test_parser.test_norm()
    test_parser.test_int()
