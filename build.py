import os
import shutil
from pathlib import Path

# Пути
BUILD_DIR = Path("introduction-to-logic/_build/html")
DOCS_DIR = Path("docs")

# 1. Сборка книги
os.system("jupyter-book build introduction-to-logic")

# 2. Очистка docs
if DOCS_DIR.exists():
    shutil.rmtree(DOCS_DIR)
DOCS_DIR.mkdir()

# 3. Копирование ВСЕГО содержимого (включая скрытые файлы, например .nojekyll)
for item in BUILD_DIR.iterdir():
    dest = DOCS_DIR / item.name
    if item.is_dir():
        shutil.copytree(item, dest)
    else:
        shutil.copy2(item, dest)

print("✅ Книга собрана и скопирована в docs/")
