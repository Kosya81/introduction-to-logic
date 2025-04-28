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

# Упражнение 1.1

Это упражнение посвящено межличностным отношениям в небольшом женском клубе. В клубе всего четыре участницы — Аня, Бэлла, Вика и Галя; и существует только один тип бинарного отношения — «нравится». В таблице ниже показано, кто кому нравится. Галочка в ячейке таблицы означает, что девушка, имя которой указано в начале строки, испытывает симпатию к девушке, имя которой указано в заголовке столбца; отсутствие галочки означает, что симпатии нет.

<div class="table-container">
  <div style="text-align: center;">
    <div style="display: inline-block;">
      <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
        <thead>
          <tr>
            <th></th>
            <th>Аня</th>
            <th>Бэлла</th>
            <th>Вика</th>
            <th>Галя</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Аня</td>
            <td></td>
            <td>✔️</td>
            <td>✔️</td>
            <td></td>
          </tr>
          <tr>
            <td>Бэлла</td>
            <td></td>
            <td></td>
            <td>✔️</td>
            <td></td>
          </tr>
          <tr>
            <td>Вика</td>
            <td>✔️</td>
            <td>✔️</td>
            <td></td>
            <td>✔️</td>
          </tr>
          <tr>
            <td>Галя</td>
            <td></td>
            <td>✔️</td>
            <td>✔️</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

Предложения ниже описывают некоторые отношения между девочками, с указанием того, являются ли они истинными или ложными в мире, изображённом в первой таблице. Для каждого из предложений укажите, истинно оно или ложно в описанном выше мире.

```{code-cell} python3
:tags: [remove-input]
from IPython.display import display, HTML

# Утверждения и правильные ответы
statements = [
    ("Ане нравится Галя.", False),
    ("Гале не нравится Аня.", True),
    ("Ане нравится Вика или Галя.", True),
    ("Ане нравится Вика и Галя.", False),
    ("Ане не нравится ни Вика, ни Галя.", False),
]

# Создаём HTML с кнопками и проверками
def create_interactive_question(text, correct):
    return f"""
    <div class="question-block" data-correct-answer="{str(correct).lower()}">
        <p class="question-text">{text}</p>
        <div class="buttons">
            <button class="answer-button" onclick="exerciseManager.checkAnswer('{correct}', '{text}')">Истина</button>
            <button class="answer-button" onclick="exerciseManager.checkAnswer('{not correct}', '{text}')">Ложь</button>
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
    <div class="stats-text">Правильных ответов: <span id="correct-count">0</span> из 5</div>
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
