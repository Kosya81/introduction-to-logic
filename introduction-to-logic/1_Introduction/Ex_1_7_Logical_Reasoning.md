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

# Упражнение 1.7

Скажите, является ли каждый из следующих выводов логически корректным.

```{code-cell} python3
:tags: [remove-input]
from IPython.display import display, HTML

# Утверждения и правильные ответы
statements = [
    ("Все x являются z.<br>Все y являются z.<br>Следовательно, некоторые x являются y.", False),
    ("Некоторые x являются y.<br>Все y являются z.<br>Следовательно, некоторые x являются z.", True),
    ("Все x являются y.<br>Некоторые y являются z.<br>Следовательно, некоторые x являются z.", False)
]

def get_diagram(text):
    if "Все x являются z" in text and "Все y являются z" in text:
        return """
        <svg width="300" height="200" viewBox="0 0 300 200">
            <!-- z - самое большое множество -->
            <circle cx="150" cy="100" r="80" fill="rgba(0,0,255,0.1)" stroke="blue" stroke-width="2"/>
            <!-- x и y - непересекающиеся подмножества z -->
            <circle cx="100" cy="100" r="30" fill="rgba(255,0,0,0.2)" stroke="red" stroke-width="2"/>
            <circle cx="200" cy="100" r="30" fill="rgba(0,255,0,0.2)" stroke="green" stroke-width="2"/>
            <text x="100" y="100" text-anchor="middle" fill="red">x</text>
            <text x="200" y="100" text-anchor="middle" fill="green">y</text>
            <text x="150" y="50" text-anchor="middle" fill="blue">z</text>
        </svg>
        """
    elif "Некоторые x являются y" in text and "Все y являются z" in text:
        return """
        <svg width="300" height="200" viewBox="0 0 300 200">
            <!-- z - самое большое множество -->
            <circle cx="150" cy="100" r="80" fill="rgba(0,0,255,0.1)" stroke="blue" stroke-width="2"/>
            <!-- y полностью внутри z -->
            <circle cx="150" cy="100" r="50" fill="rgba(0,255,0,0.2)" stroke="green" stroke-width="2"/>
            <!-- x пересекается с y -->
            <circle cx="120" cy="100" r="40" fill="rgba(255,0,0,0.2)" stroke="red" stroke-width="2"/>
            <text x="120" y="100" text-anchor="middle" fill="red">x</text>
            <text x="150" y="100" text-anchor="middle" fill="green">y</text>
            <text x="150" y="50" text-anchor="middle" fill="blue">z</text>
        </svg>
        """
    else:  # "Все x являются y" и "Некоторые y являются z"
        return """
        <svg width="300" height="200" viewBox="0 0 300 200">
            <!-- y - среднее множество -->
            <circle cx="150" cy="100" r="70" fill="rgba(0,255,0,0.1)" stroke="green" stroke-width="2"/>
            <!-- x полностью внутри y -->
            <circle cx="120" cy="100" r="30" fill="rgba(255,0,0,0.2)" stroke="red" stroke-width="2"/>
            <!-- z пересекается с y, но не с x -->
            <circle cx="200" cy="100" r="40" fill="rgba(0,0,255,0.2)" stroke="blue" stroke-width="2"/>
            <text x="120" y="100" text-anchor="middle" fill="red">x</text>
            <text x="150" y="50" text-anchor="middle" fill="green">y</text>
            <text x="200" y="100" text-anchor="middle" fill="blue">z</text>
        </svg>
        """

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
        <div class="explanation-container">
            <button class="explanation-toggle" onclick="toggleExplanation(this)">Показать объяснение</button>
            <div class="explanation-content">
                <div class="euler-diagram">
                    {get_diagram(text)}
                </div>
                <div class="explanation-text">
                    {get_explanation(text, correct)}
                </div>
            </div>
        </div>
    </div>
    """

def get_explanation(text, correct):
    if "Все x являются z" in text and "Все y являются z" in text:
        return """
        <p>Это рассуждение <b>неправильное</b>. Рассмотрим контрпример:</p>
        <ul>
            <li>Пусть x = {1, 2}, y = {3, 4}, z = {1, 2, 3, 4}</li>
            <li>Тогда все x являются z и все y являются z</li>
            <li>Но x и y не имеют общих элементов</li>
        </ul>
        <p>На диаграмме видно, что множества x и y могут быть непересекающимися подмножествами z.</p>
        """
    elif "Некоторые x являются y" in text and "Все y являются z" in text:
        return """
        <p>Это рассуждение <b>правильное</b>. Докажем:</p>
        <ul>
            <li>Если некоторые x являются y, то существует элемент, который принадлежит и x, и y</li>
            <li>Если все y являются z, то этот элемент также принадлежит z</li>
            <li>Следовательно, этот элемент принадлежит и x, и z</li>
        </ul>
        <p>На диаграмме видно, что пересечение x и y обязательно является подмножеством z.</p>
        """
    else:
        return """
        <p>Это рассуждение <b>неправильное</b>. Рассмотрим контрпример:</p>
        <ul>
            <li>Пусть x = {1, 2}, y = {1, 2, 3, 4}, z = {4, 5}</li>
            <li>Тогда все x являются y и некоторые y являются z</li>
            <li>Но x и z не имеют общих элементов</li>
        </ul>
        <p>На диаграмме видно, что множество x может быть подмножеством y, а пересечение y и z может не пересекаться с x.</p>
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

.euler-diagram {
    margin: 1rem 0;
    text-align: center;
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
        button.textContent = "Показать объяснение";
    } else {
        content.style.display = "block";
        button.textContent = "Скрыть объяснение";
    }
}
</script>
"""

# Инициализируем менеджер упражнений
init_script = f"""
<script>
    exerciseManager.init({statements});
</script>
"""

# Отображаем вопросы
display(HTML(questions_html + styles_and_scripts + init_script))
```
