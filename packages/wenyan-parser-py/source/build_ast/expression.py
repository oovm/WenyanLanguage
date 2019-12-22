from ast import Expr, Assign


class Expression:
    @staticmethod
    def build(value):
        return Expr(value=value)

    @staticmethod
    def assign_data(var, data):
        return Assign(targets=[var], value=data)
