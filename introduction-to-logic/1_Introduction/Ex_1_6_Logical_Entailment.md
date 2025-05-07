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

# Упражнение 1.6

Рассмотрим приведённые ниже высказывания:

<p style="align: center; padding-left: 25%;">
<i>
Каждому кто-то нравится.<br>
Бэлле нравятся все, кто нравится Ане.<br>
Бэлле не нравится Галя.<br>
Никто не нравится сам себе.
</i>
</p>

Укажите, следует ли каждое из следующих утверждений логически из этих предложений.

```{code-cell} python3
:tags: [remove-input]
from IPython.display import display, HTML

# Утверждения и правильные ответы
statements = [
    ("Ане нравится Вика.", True),
    ("Бэлле нравится Аня.", False),
    ("Бэлле не нравится Аня.", False),
    ("Нет никого, кому  нравятся все.", True),
]

# Создаём HTML с кнопками и проверками
def create_interactive_question(text, correct):
    return f"""
    <div class="question-block" data-correct-answer="{str(correct).lower()}">
        <p class="question-text">{text}</p>
        <div class="buttons">
            <button class="answer-button" onclick="exerciseManager.checkAnswer('{correct}', true, '{text}')">Следует</button>
            <button class="answer-button" onclick="exerciseManager.checkAnswer('{correct}', false, '{text}')">Не следует</button>
        </div>
        <div id="result_{text}" class="result-text"></div>
    </div>
    """

# Составляем HTML для всех утверждений
questions_html = """
<div class="questions-container">
"""

for text, correct in statements:
    questions_html += create_interactive_question(text, correct)

questions_html += """
</div>
<div class="exercise-stats">
    <div class="stats-text">Правильных ответов: <span id="correct-count">0</span> из 3</div>
    <div class="buttons-container">
        <button class="show-answers-button" onclick="exerciseManager.showAnswers()">Показать ответы</button>
        <button class="reset-button" onclick="exerciseManager.reset()">Сбросить ответы</button>
    </div>
</div>
"""

# Инициализируем менеджер упражнений
init_script = f"""
<script>
    exerciseManager.init({statements});
</script>
"""

# Отображаем вопросы
display(HTML(questions_html + init_script))
```
