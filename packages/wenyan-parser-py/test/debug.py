from astunparse import dump

DEBUG = {
    "STATEMENT": False,
    "IMPORT": True,
    "FUNCTION": True,
}


def debug_print(head, string=None):
    if string is None:
        print(f"{head}")
    else:
        print("\033[36m" + head + ":\033[0m")
        print(f"{string}")


def ast_print(ast_tree):
    print(dump(ast_tree))
