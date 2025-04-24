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

Аня нравится Гале.  
Гале не нравится Аня.  
Аня нравится Вике или Гале.  
Аня нравится Вике и Гале.  
Ане не нравится ни Вика, ни Галя. 

```{code-cell} ipython3
import ipywidgets as widgets
from IPython.display import display, HTML, clear_output

# Утверждения и правильные ответы
statements = [
    ("Аня нравится Гале.", False),
    ("Гале не нравится Аня.", True),
    ("Аня нравится Вике или Гале.", True),
    ("Аня нравится Вике и Гале.", False),
    ("Ане не нравится ни Вика, ни Галя.", False),
]

# Сохраняем элементы, чтобы потом обновить
question_widgets = []

# Функция для создания одного блока
def create_interactive_question(text, correct):
    label = widgets.HTML(value=f"<b>{text}</b>")
    buttons = widgets.ToggleButtons(
        options=["Истина", "Ложь"],
        description="Ваш ответ:",
        button_style=''
    )
    feedback = widgets.Output()
    answer_output = widgets.Output()  # Здесь появится правильный ответ

    def check_answer(change):
        with feedback:
            clear_output()
            user_answer = change['new'] == "Истина"
            if user_answer == correct:
                display(HTML("<span style='color: green;'>✔️ Верно!</span>"))
            else:
                display(HTML("<span style='color: red;'>❌ Неверно.</span>"))

    buttons.observe(check_answer, names='value')
    
    container = widgets.VBox([label, buttons, feedback, answer_output])
    question_widgets.append((correct, answer_output))
    display(container)
    display(HTML("<hr>"))

# Кнопка для показа правильных ответов
def show_answers(btn):
    for correct, output in question_widgets:
        with output:
            clear_output()
            display(HTML(f"<i>Правильный ответ: {'Истина' if correct else 'Ложь'}</i>"))

show_button = widgets.Button(
    description="Показать правильные ответы",
    button_style="info"
)
show_button.on_click(show_answers)


# Генерация вопросов
for text, correct in statements:
    create_interactive_question(text, correct)

# Отображение кнопки
display(show_button)
```


Удачи!

