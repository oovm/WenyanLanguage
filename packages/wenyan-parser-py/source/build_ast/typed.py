from ast import Name, Load, List


class Type:
    @staticmethod
    def symbol_type(name: str):
        return Name(id=name, ctx=Load())

    @staticmethod
    def array_type(expr):
        return List(elts=[expr], ctx=Load())
