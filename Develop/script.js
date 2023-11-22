var data = [
    {
        q: "What is Javascript?",
        a1: "A programming language",
        a2: "A markup language",
        a3: "A styling language",
        a4: "A romance language"
    },
    {
        q: "Which method is used to 'click' a button?",
        a1: ".addButton",
        a2: ".addEventListener",
        a3: ".addClickPoint",
        a4: ".ClickMe"
    },
    {
        q: "Which of the following is NOT a primitive type?",
        a1: "Number",
        a2: "BigInt",
        a3: "Float",
        a4: "String"
    },
    {
        q: "What is a 'for' loop used for?",
        a1: "Scope",
        a2: "Conditional",
        a3: "Arrays",
        a4: "Iteration"
    }
]
timerCount = 60
currentScore = 0
let start = document.querySelector("#start-button")
let qBlock = document.querySelector(".question-block");
let question = document.querySelector("#question");
let ans1 = document.querySelector("#answer-one");
let ans2 = document.querySelector("#answer-two");
let ans3 = document.querySelector("#answer-three");
let ans4 = document.querySelector("#answer-four");

start.addEventListener("click", function () {
    qBlock.setAttribute("style", "display: block");
    generateQuestion()
    // startTimer()
    // setScore()
})

function generateQuestion() {
    question.textContent = data[Math.floor(Math.random() * data.length)].q
    ans1.textContent = data[Math.floor(Math.random() * data.length)].a1
    ans2.textContent = data[Math.floor(Math.random() * data.length)].a2
    ans3.textContent = data[Math.floor(Math.random() * data.length)].a3
    ans4.textContent = data[Math.floor(Math.random() * data.length)].a4
}