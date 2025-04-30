class ExerciseManager {
    constructor() {
        this.questions = [];
        this.answers = {};
        this.totalCorrect = 0;
        this.initialized = false;
    }

    init(statements) {
        if (this.initialized) return;
        
        this.questions = statements;
        this.answers = {};
        this.totalCorrect = 0;
        this.initialized = true;
    }

    checkAnswer(answer, clicked_btn, questionText) {
        const resultDiv = document.getElementById('result_' + questionText);
        const isCorrect = (clicked_btn ? answer === 'True' : answer === 'False');
        
        // Сохраняем ответ
        this.answers[questionText] = isCorrect;
        
        // Обновляем счетчик правильных ответов
        this.totalCorrect = Object.values(this.answers).filter(Boolean).length;
        document.getElementById('correct-count').textContent = this.totalCorrect;
        
        // Обновляем стиль кнопок
        const buttons = resultDiv.parentNode.querySelectorAll('.answer-button');
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === (clicked_btn ? 'Истина' : 'Ложь')) {
                if (isCorrect) {
                    button.classList.add('correct');
                } else {
                    button.classList.add('incorrect');
                }
            }
        });
        
        // Показываем результат
        if (isCorrect) {
            resultDiv.innerHTML = "<span style='color: green;'>✔️ Верно!</span>";
        } else {
            resultDiv.innerHTML = "<span style='color: red;'>❌ Неверно.</span>";
        }
    }

    showAnswers() {
        const buttons = document.querySelectorAll('.answer-button');
        buttons.forEach(button => {
            const questionText = button.closest('.question-block').querySelector('.question-text').textContent;
            const correctAnswer = this.questions.find(q => q[0] === questionText)[1];
            
            if (button.textContent === (correctAnswer ? 'Истина' : 'Ложь')) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });
    }

    reset() {
        // Сбрасываем ответы
        this.answers = {};
        this.totalCorrect = 0;
        document.getElementById('correct-count').textContent = '0';
        
        // Сбрасываем стили и состояние кнопок
        const buttons = document.querySelectorAll('.answer-button');
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'incorrect');
        });
        
        // Очищаем результаты
        const resultDivs = document.querySelectorAll('.result-text');
        resultDivs.forEach(div => {
            div.innerHTML = '';
        });
    }
}

// Создаем глобальный экземпляр менеджера упражнений
window.exerciseManager = new ExerciseManager();

// Инициализируем менеджер при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все вопросы со страницы
    const questions = Array.from(document.querySelectorAll('.question-block')).map(block => {
        const questionText = block.querySelector('.question-text').textContent;
        const correctAnswer = block.getAttribute('data-correct-answer') === 'true';
        return [questionText, correctAnswer];
    });

    // Инициализируем менеджер с вопросами
    if (questions.length > 0) {
        window.exerciseManager.init(questions);
    }
}); 