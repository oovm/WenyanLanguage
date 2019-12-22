from unittest import TestCase
from ..source.hanzi2num import hanzi_norm


class Hanzi2Number(TestCase):
    def test_norm(self):
        self.assertEqual(hanzi_norm('两百'), '二百')


if __name__ == '__main__':
    test_parser = Hanzi2Number()
    test_parser.test_norm()
