(function () {
    function buildQuiz() {
       
        const output = [];

    
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                
                const answers = [];

               
                for (letter in currentQuestion.answers) {

                    
                    answers.push(
                        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                    );
                }

                
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        
        const answerContainers = quizContainer.querySelectorAll('.answers');

        
        let numCorrect = 0;

       
        myQuestions.forEach((currentQuestion, questionNumber) => {

            
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            
            if (userAnswer === currentQuestion.correctAnswer) {
                
                numCorrect++;

                
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            
            else {
                
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        
        resultsContainer.innerHTML = `Your Score Is ${numCorrect} of ${myQuestions.length}  Questions`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "1)What is the day before Mardi Gras called?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Lundi Gras"
            },
            correctAnswer: "c"
        },
        {
            question: "2)What day comes after Mardi Gras?",
            answers: {
                a: "Sunday",
                b: "Friday",
                c: "Wednesday"
            },
            correctAnswer: "c"
        },
        {
            question: "3)Where was the first known carnival celebration?",
            answers: {
                a: "Ny, USA",
                b: "London, England",
                c: "Berlin, German",
                d: "Nice, France"
            },
            correctAnswer: "d"
        },
        {
            question: "4)What is the most popular food for Shrove Tuesday?",
            answers: {
                a: "Pancakes",
                b: "Hamburger",
                c: "Sausage",
                d: "Cake"
            },
            correctAnswer: "a"
        },
        {
            question: "5)What famous father and son were each crowned King Bacchus at New Orleans Mardi Gras?",
            answers: {
                a: "Elen Rom and Dave Gern",
                b: "Alan Thicke and Robin Thicke",
                c: "Jon Jones and Mike Dan",
                d: "Leny Pin and Sam Bol"
            },
            correctAnswer: "b"
        },
        {
            question: "6) When was the earliest known carnival celebration?",
            answers: {
                a: "1297",
                b: "1458",
                c: "1294",
                d: "1256"
            },
            correctAnswer: "c"
        },
        {
            question: "7)What is the signature Mardi Gras dessert?",
            answers: {
                a: "King cake",
                b: "king ball",
                c: "king sord",
                d: "Tree"
            },
            correctAnswer: "a"
        },
        {
            question: "8)Bacchus is the Roman god of what?",
            answers: {
                a: "Water",
                b: "Wine",
                c: "Beer",
                d: "Juce"
            },
            correctAnswer: "b"
        },
        {
            question: "9)How many king cakes are sold during an average carnival season?",
            answers: {
                a: "900,000",
                b: "700,000",
                c: "300,000",
                d: "500,000"
            },
            correctAnswer: "d"
        },
        {
            question: "10)What time does New Orleans law require masks to be removed on Mardi Gras?",
            answers: {
                a: "5 p.m.",
                b: "9 p.m.",
                c: "6 p.m.",
                d: "8 p.m."
            },
            correctAnswer: "c"
        }
    ];

    
    buildQuiz();

    
    submitButton.addEventListener('click', showResults);
})();