import os
import shutil

os.system("jupyter-book build introduction-to-logic")
shutil.rmtree("introduction-to-logic/docs", ignore_errors=True)
shutil.copytree("introduction-to-logic/_build/html", "docs")
print("Книга собрана и скопирована в docs/")