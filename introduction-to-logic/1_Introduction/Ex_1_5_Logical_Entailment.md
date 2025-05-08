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

# Упражнение 1.5

Рассмотрим следующие посылки о состоянии нашего мира:

<div class="centered-text-container">
<p>
Гале нравится Вика.<br>
Ане <b>не</b> нравится Галя.<br>
Гале <b>не</b> нравится Аня.<br>
Бэлле нравится либо Вика, либо Галя.<br>
Ане нравятся все, кто нравится Бэлле.<br>
Вике нравятся все, кто нравится ей.<br>
Никто не нравится сам себе.
</p>
</div>

Существует всего четыре состояния мира, которые удовлетворяют этим утверждениям. Они показаны ниже.

<div class="table-container-lecture">
  <div class="table-wrapper">
    <table>
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
          <td></td>
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
          <td></td>
          <td>✔️</td>
          <td></td>
      </tbody>
    </table>
  </div>

  <div class="table-wrapper">
    <table>
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
          <td></td>
          <td>✔️</td>
          <td></td>
      </tbody>
    </table>
  </div>
</div>

<div class="table-container-lecture">
  <div class="table-wrapper">
    <table>
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
          <td></td>
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
      </tbody>
    </table>
  </div>

  <div class="table-wrapper">
    <table>
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
      </tbody>
    </table>
  </div>
</div>

Для каждого из следующих предложений укажите, вытекает ли оно логически из приведённых выше посылок.

```{code-cell} python3
:tags: [remove-input]
from IPython.display import display, HTML

# Утверждения и правильные ответы
statements = [
    ("Ане нравится Бэлла или Бэлле нравится Аня.", False),
    ("Кто-то нравится самой себе.", False),
    ("Каждому кто-то нравится.", True),
]

# Создаём HTML с кнопками и проверками
def create_interactive_question(text, correct):
    return f"""
    <div class="question-block" data-correct-answer="{str(correct).lower()}">
        <p class="question-text">{text}</p>
        <div class="buttons">
            <button class="answer-button" onclick="exerciseManager.checkAnswer('{correct}', true, '{text}')">Истина</button>
            <button class="answer-button" onclick="exerciseManager.checkAnswer('{correct}', false, '{text}')">Ложь</button>
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
