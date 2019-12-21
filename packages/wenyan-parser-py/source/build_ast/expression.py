from ast import Expr


class Expression:
    @staticmethod
    def build(value):
        return Expr(value=value)
