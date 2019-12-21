from ast import arg, Name, Load, arguments


class Define:
    @staticmethod
    def from_arg(symbol: str, typed=None):
        return arg(
            arg=symbol,
            annotation=typed
        )

    @staticmethod
    def arg_list(*args):
        return arguments(
            args=args,
            vararg=None,
            kwonlyargs=[],
            kw_defaults=[],
            kwarg=None,
            defaults=[]
        )
