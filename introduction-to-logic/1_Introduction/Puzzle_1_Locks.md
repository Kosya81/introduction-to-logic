---
jupytext:
  text_representation:
    format_name: myst
    format_version: '0.13'
    jupytext_version: 1.14.4
kernelspec:
  name: python3
  display_name: Python 3
  language: python
---

# Замки

Гонериль хочет передать золотой браслет Риган. Поскольку они находятся на расстоянии, им приходится воспользоваться посланцем. Чтобы посланец не украл золото, мешочек с браслетом необходимо запереть на замок. У обеих женщин есть свои замки с ключами, но ни у одной нет ключа от замков другой. Тем не менее, можно безопасно передать браслет так, чтобы Риган смогла его открыть. Объясните, как это сделать.

```{code-cell} python3
:tags: [remove-input]
from IPython.display import display, HTML

# Добавляем стили и скрипт для раскрывающихся блоков
styles_and_scripts = """
<style>
.explanation-container {
    margin-top: 1rem;
}

.explanation-toggle {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    text-align: left;
}

.explanation-toggle:hover {
    background-color: #e0e0e0;
}

.explanation-content {
    display: none;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 0.5rem;
    background-color: #f9f9f9;
}

.explanation-text {
    margin-top: 1rem;
}

.explanation-text ul {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>

<script>
function toggleExplanation(button) {
    const content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "Показать подсказку";
    } else {
        content.style.display = "block";
        button.textContent = "Скрыть подсказку";
    }
}
</script>
"""

# Добавляем блок с подсказкой
hint_html = """
<div class="explanation-container">
    <button class="explanation-toggle" onclick="toggleExplanation(this)">Показать подсказку</button>
    <div class="explanation-content">
        <div class="explanation-text">
            <p>Пошаговое решение задачи:</p>
            <ol>
                <li>Гонериль кладет браслет в мешочек и запирает его своим замком.</li>
                <li>Гонериль отправляет запертый мешочек Риган.</li>
                <li>Риган получает мешочек и добавляет свой замок, не снимая замок Гонериль.</li>
                <li>Риган отправляет мешочек обратно Гонериль.</li>
                <li>Гонериль снимает свой замок и отправляет мешочек обратно Риган.</li>
                <li>Теперь на мешочке остался только замок Риган, и она может его открыть своим ключом.</li>
            </ol>
        </div>
    </div>
</div>
"""

# Отображаем подсказку
display(HTML(styles_and_scripts + hint_html))
```

