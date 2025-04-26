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

# Упражнение 1.2

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
          <td></td>
          <td>✔️</td>
        </tr>
        <tr>
          <td>Бэлла</td>
          <td>✔️</td>
          <td></td>
          <td>✔️</td>
          <td></td>
        </tr>
        <tr>
          <td>Вика</td>
          <td></td>
          <td>✔️</td>
          <td></td>
          <td>✔️</td>
        </tr>
        <tr>
          <td>Галя</td>
          <td>✔️</td>
          <td></td>
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
from IPython.display import display, HTML

# Утверждения и правильные ответы
statements = [
    ("Ане нравится Галя.", True),
    ("Гале не нравится Аня.", False),
    ("Ане нравится Вика или Галя.", True),
    ("Ане нравится Вика и Галя.", False),
    ("Ане не нравится ни Вика, ни Галя.", False),
]

# Создаём HTML с кнопками и проверками
def create_interactive_question(text, correct):
    return f"""
    <div class="question-block">
        <p class="question-text">{text}</p>
        <div class="buttons">
            <button class="answer-button" onclick="checkAnswer('{correct}', '{text}')">Истина</button>
            <button class="answer-button" onclick="checkAnswer('{not correct}', '{text}')">Ложь</button>
        </div>
        <div id="result_{text}" class="result-text"></div>
    </div>
    """

# Составляем HTML для всех утверждений
questions_html = """
<style>
.questions-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Отступ между блоками */
}

.question-block {
    flex: 1 1 45%; /* Две колонки */
    min-width: 300px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fdfdfd;
}

.question-text {
    font-size: 16px;
    margin-bottom: 8px;
}

.buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
}

.answer-button {
    background-color: #f9f9f9;
    color: #333;
    border: 1px solid #bbb;
    padding: 4px 10px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 13px;
    width: 80px;
    height: 32px;
    text-align: center;
    transition: background-color 0.3s, border-color 0.3s;
    box-sizing: border-box;
}

.answer-button:hover {
    background-color: #efefef;
    border-color: #999;
}

.result-text {
    font-size: 14px;
    min-height: 20px;
}
</style>

<script>
function checkAnswer(answer, questionText) {
    var resultDiv = document.getElementById('result_' + questionText);
    if (answer === 'True') {
        resultDiv.innerHTML = "<span style='color: green;'>✔️ Верно!</span>";
    } else {
        resultDiv.innerHTML = "<span style='color: red;'>❌ Неверно.</span>";
    }
}
</script>

<div class="questions-container">
"""

for text, correct in statements:
    questions_html += create_interactive_question(text, correct)

questions_html += "</div>"

# Отображаем вопросы
display(HTML(questions_html))
```
