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

# Упражнение 1.1. Оценка

Это упражнение посвящено межличностным отношениям в небольшом женском клубе. В клубе всего четыре участницы — Аня, Бэлла, Вика и Галя; и существует только один тип бинарного отношения — «нравится». В таблице ниже показано, кто кому нравится. Галочка в ячейке таблицы означает, что девушка, имя которой указано в начале строки, испытывает симпатию к девушке, имя которой указано в заголовке столбца; отсутствие галочки означает, что симпатии нет.

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

Предложения в таблице ниже описывают некоторые отношения между девочками, с указанием того, являются ли они истинными или ложными в мире, изображённом в первой таблице. Для каждого из предложений укажите, истинно оно или ложно в описанном выше мире.

```{code-cell} python3
:tags: [remove-input]
from IPython.display import display, HTML, Javascript

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
    <p>{text}</p>
    <button class="answer-button" onclick="checkAnswer('{correct}', '{text}')">Истина</button>
    <button class="answer-button" onclick="checkAnswer('{not correct}', '{text}')">Ложь</button>
    <div id="result_{text}" style="margin-top: 10px;"></div>

    <style>
    .answer-button {{
        background-color: #f0f0f0;
        color: #333;
        border: 1px solid #ccc;
        padding: 8px 16px;
        margin: 5px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 14px;
        transition: background-color 0.3s;
        height: 35px;
    }}
    
    .answer-button:hover {{
        background-color: #e0e0e0;
    }}
    </style>

    <script>
    function checkAnswer(answer, questionText) {{
        var resultDiv = document.getElementById('result_' + questionText);
        var answerDiv = document.getElementById('answer_' + questionText);
        if (answer === 'True') {{
            resultDiv.innerHTML = "<span style='color: green;'>✔️ Верно!</span>";
        }} else {{
            resultDiv.innerHTML = "<span style='color: red;'>❌ Неверно.</span>";
        }}
    }}
    </script>
    <hr>
    """

# Составляем HTML для всех утверждений
questions_html = ""
for text, correct in statements:
    questions_html += create_interactive_question(text, correct)

# Отображаем вопросы
display(HTML(questions_html))
```
