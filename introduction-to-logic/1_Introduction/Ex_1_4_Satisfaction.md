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

# Упражнение 1.4

Это упражнение посвящено межличностным отношениям в небольшом женском клубе. В клубе всего четыре участницы — Аня, Бэлла, Вика и Галя; и существует только один тип бинарного отношения — «нравится». В таблице ниже показано, кто кому нравится. Галочка в ячейке таблицы означает, что девушка, имя которой указано в начале строки, испытывает симпатию к девушке, имя которой указано в заголовке столбца; отсутствие галочки означает, что симпатии нет.  
Вы можете добавить отношение, щёлкнув по пустой ячейке таблицы; вы можете удалить отношение, щёлкнув по ячейке с галочкой.

<div class="table-container">
  <div style="text-align: center;">
    <div style="display: inline-block;">
      <table id="likes-table" border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
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
            <td class="cell" data-row="Аня" data-col="Аня"></td>
            <td class="cell" data-row="Аня" data-col="Бэлла">✔️</td>
            <td class="cell" data-row="Аня" data-col="Вика"></td>
            <td class="cell" data-row="Аня" data-col="Галя">✔️</td>
          </tr>
          <tr>
            <td>Бэлла</td>
            <td class="cell" data-row="Бэлла" data-col="Аня">✔️</td>
            <td class="cell" data-row="Бэлла" data-col="Бэлла"></td>
            <td class="cell" data-row="Бэлла" data-col="Вика">✔️</td>
            <td class="cell" data-row="Бэлла" data-col="Галя"></td>
          </tr>
          <tr>
            <td>Вика</td>
            <td class="cell" data-row="Вика" data-col="Аня"></td>
            <td class="cell" data-row="Вика" data-col="Бэлла">✔️</td>
            <td class="cell" data-row="Вика" data-col="Вика"></td>
            <td class="cell" data-row="Вика" data-col="Галя">✔️</td>
          </tr>
          <tr>
            <td>Галя</td>
            <td class="cell" data-row="Галя" data-col="Аня">✔️</td>
            <td class="cell" data-row="Галя" data-col="Бэлла"></td>
            <td class="cell" data-row="Галя" data-col="Вика">✔️</td>
            <td class="cell" data-row="Галя" data-col="Галя"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

Предложения в таблице ниже описывают некоторые отношения между девушками, с указанием того, являются ли они истинными или ложными в мире, изображённом в первой таблице. По мере изменения этого мира значения истинности предложений пересчитываются и отображаются в этой таблице.  
Попробуйте сделать так, чтобы все предложения стали истинными. Обратите внимание, что этого можно добиться несколькими способами.

<div class="statements-table">
<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
    <thead>
        <tr>
            <th>Утверждение</th>
            <th>Статус</th>
        </tr>
    </thead>
    <tbody>
        <tr data-rule="rule1">
            <td>Гале нравится Вика</td>
            <td class="result">⏳</td>
        </tr>
        <tr data-rule="rule2">
            <td>Ане не нравится Галя</td>
            <td class="result">⏳</td>
        </tr>
        <tr data-rule="rule3">
            <td>Бэлле нравится Вика или Галя</td>
            <td class="result">⏳</td>
        </tr>
        <tr data-rule="rule4">
            <td>Ане нравятся те же, кто и Бэлле</td>
            <td class="result">⏳</td>
        </tr>
        <tr data-rule="rule5">
            <td>Вике нравятся те же, кому и она сама</td>
            <td class="result">⏳</td>
        </tr>
        <tr data-rule="rule6">
            <td>Никто не нравится сам себе</td>
            <td class="result">⏳</td>
        </tr>
    </tbody>
</table>
</div>

```{code-cell} python3
:tags: [remove-input]
from IPython.display import display, HTML

# Создаём HTML с JavaScript для обработки кликов и проверки правил
interactive_script = """
<script>
document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('likes-table');
    const statements = document.querySelectorAll('.statements-table tr[data-rule]');
    
    // Функция для проверки правил
    function checkRules() {
        // Правило 1: Гале нравится Вика
        const rule1 = table.querySelector('[data-row="Галя"][data-col="Вика"]').textContent === '✔️';
        
        // Правило 2: Ане не нравится Галя
        const rule2 = table.querySelector('[data-row="Аня"][data-col="Галя"]').textContent !== '✔️';
        
        // Правило 3: Бэлле нравится Вика или Галя
        const rule3 = table.querySelector('[data-row="Бэлла"][data-col="Вика"]').textContent === '✔️' || 
                     table.querySelector('[data-row="Бэлла"][data-col="Галя"]').textContent === '✔️';
        
        // Правило 4: Ане нравятся те же, кто и Бэлле
        const rule4 = Array.from(table.querySelectorAll('[data-row="Аня"].cell')).every((cell, index) => {
            const bellaCell = table.querySelectorAll('[data-row="Бэлла"].cell')[index];
            return cell.textContent === bellaCell.textContent;
        });
        
        // Правило 5: Вике нравятся те же, кому и она сама
        const rule5 = Array.from(table.querySelectorAll('[data-row="Вика"].cell')).every((cell, index) => {
            const colName = cell.getAttribute('data-col');
            const otherCell = table.querySelector(`[data-row="${colName}"][data-col="Вика"]`);
            return cell.textContent === otherCell.textContent;
        });
        
        // Правило 6: Никто не нравится сам себе
        const rule6 = Array.from(table.querySelectorAll('.cell')).every(cell => {
            const row = cell.getAttribute('data-row');
            const col = cell.getAttribute('data-col');
            return row !== col || cell.textContent !== '✔️';
        });
        
        // Обновляем статусы
        const rules = [rule1, rule2, rule3, rule4, rule5, rule6];
        statements.forEach((statement, index) => {
            const resultCell = statement.querySelector('.result');
            resultCell.textContent = rules[index] ? '✅' : '❌';
        });
    }
    
    // Обработчик кликов по ячейкам
    table.addEventListener('click', function(event) {
        const cell = event.target.closest('.cell');
        if (!cell) return;
        
        // Переключаем галочку
        cell.textContent = cell.textContent === '✔️' ? '' : '✔️';
        
        // Проверяем правила
        checkRules();
    });
    
    // Начальная проверка правил
    checkRules();
});
</script>
"""

# Отображаем скрипт
display(HTML(interactive_script))