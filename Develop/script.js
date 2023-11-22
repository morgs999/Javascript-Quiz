var data = [
    questionOne, {
        q: "What is Javascript?",
        a1: "A programming language",
        a2: "A markup language",
        a3: "A styling language",
        a4: "A romance language"
    },
    questionTwo, {
        q: "Which method is used to 'click' a button?",
        a1: ".addButton",
        a2: ".addEventListener",
        a3: ".addClickPoint",
        a4: ".ClickMe"
    },
    questionThree, {
        q: "Which of the following is NOT a primitive type?",
        a1: "Number",
        a2: "BigInt",
        a3: "Float",
        a4: "String"
    },
    questionFour, {
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

start.addEventListener("click", function () {
    qBlock.setAttribute("style", "display: block");

    generateQuestion()

})

function generateQuestion() {

}