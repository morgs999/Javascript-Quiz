// ALL QUESTIONS AND ANSWERS CONTAINED HERE //
var data = [
    {
        q: "What is Javascript?",
        a1: "A programming language",
        a2: "A markup language",
        a3: "A styling language",
        a4: "A romance language",
        correct: "a1"
    },
    {
        q: "Which method is used to 'click' a button?",
        a1: ".addButton",
        a2: ".addEventListener",
        a3: ".addClickPoint",
        a4: ".ClickMe",
        correct: "a2"
    },
    {
        q: "Which of the following is NOT a primitive type?",
        a1: "Number",
        a2: "BigInt",
        a3: "Float",
        a4: "String",
        correct: "a3"
    },
    {
        q: "What is a 'for' loop used for?",
        a1: "Scope",
        a2: "Conditional",
        a3: "Arrays",
        a4: "Iteration",
        correct: "a4"
    },
    {
        q: "Which is not a variable?",
        a1: "var",
        a2: "let",
        a3: "type",
        a4: "const",
        correct: "a3"
    },
    {
        q: "Where does 'console.log' show up?",
        a1: "In a flexbox",
        a2: "Under an HTML Element",
        a3: "On top of a button",
        a4: "In the console of Dev Tools",
        correct: "a4"
    },
    {
        q: "What follows function?",
        a1: "()",
        a2: "[]",
        a3: "{}",
        a4: "<>",
        correct: "a1"
    },
    {
        q: "What will help with finding even numbers?",
        a1: "if num.iseven()",
        a2: "if num % 2 == 0",
        a3: "Find.everyother(num)",
        a4: "Math.floor()",
        correct: "a2"
    },
    {
        q: "Which item does .pop remove?",
        a1: "The first one",
        a2: "The middle one",
        a3: "The last one",
        a4: "The chosen one AKA Anakin Skywalker",
        correct: "a3"
    },
    {
        q: "What's the scariest Git Procedure'?",
        a1: "Merge a Pull Request",
        a2: "Fetch HEAD Branch",
        a3: "Git Config Rebase",
        a4: "Everyting on Git is scary",
        correct: "a4"
    }
]

// ELEMENTS TO INTERACT WITH //
let start = document.querySelector("#start-button")
let qBlock = document.querySelector(".question-block");
let question = document.querySelector("#question");
let button = document.querySelector(".button");
let ans1 = document.querySelector("#answer-one");
let ans2 = document.querySelector("#answer-two");
let ans3 = document.querySelector("#answer-three");
let ans4 = document.querySelector("#answer-four");
let timer = document.querySelector(".timer")


// START BUTTON BEGINS GAME //
start.addEventListener("click", function () {
    start.disabled = true;
    qBlock.setAttribute("style", "display: block");
    generateQuestion()
    startTimer()
    // setScore()
})

// GENERATE A RANDOM QUESTION FROM THE data ARRAY //
function generateQuestion() {
    let index = data[Math.floor(Math.random() * data.length)]
    question.textContent = index.q
    ans1.textContent = index.a1
    ans2.textContent = index.a2
    ans3.textContent = index.a3
    ans4.textContent = index.a4
    correctAnswer = index.correct
    let choice = button.addEventListener("click", function () {
        return document.getElementById(button)
    })
    console.log(choice)

}

// BEGIN THE TIMER COUNTDOWN //
function startTimer() {
    timer.setAttribute("style", "display: inline-block");
    let count = 100;
    var timeInterval = setInterval(function () {
        if (count >= 1) {
            timer.textContent = count + ' seconds remaining';
            count--;
        } else {
            timer.textContent = 'TIME UP!!!';
            clearInterval(timeInterval);
            // scoreInput();
        }
    }, 1000);
}
