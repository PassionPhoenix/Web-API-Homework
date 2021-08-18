var TimerEl = document.querySelector("#timer")
var BoxEl = document.querySelector("#Question")
var StartEl = document.querySelector("#Start")
var StatusEl = document.querySelector("#Prompt")
var QuizEl = document.querySelector("#Quiz")
var ButtonEl = document.querySelector(".button")
var Button1 = document.querySelector("#Button-1")
var Button2 = document.querySelector("#Button-2")
var Button3 = document.querySelector("#Button-3")
var Button4 = document.querySelector("#Button-4")
var CaseEl = document.querySelector("#Box")

var timeLeft = 60
var correctness = "incorrect"
var Quest = 1
var score = 0

function ButtonDisplay(){
    document.getElementById("Start").style.visibility = "hidden"
}

function HideButton(){
    document.getElementById("Start").style.visibility = "visible"
}

function Countdown(){
    timeLeft = 60
    var timeInterval = setInterval(function (){
        if (timeLeft > 0){
            TimerEl.textContent = timeLeft
            timeLeft--;
        }
        else{
            timeLeft = 0
            TimerEl.textContent = timeLeft
            StatusEl.textContent = "Good Game!"
            clearInterval(timeInterval)
            HideButton()
            HideQuiz()
            Quest = 1
        };
    }, 1000);
};

StartEl.addEventListener("click", function(){
    StatusEl.textContent = ""
    Countdown();
    ButtonDisplay();
    ShowQuiz();
    Game();
})

ButtonEl.addEventListener("click", function() {
    Game();
})

function Question1(){
    QuizEl.textContent = "1."
    Button1.textContent = "A."
    Button2.textContent = "B."
    Button3.textContent = "C."
    Button4.textContent = "D."
}

function Question2(){
    QuizEl.textContent = "2."
    Button1.textContent = "A."
    Button2.textContent = "B."
    Button3.textContent = "C."
    Button4.textContent = "D."
}

function Question3(){
    QuizEl.textContent = "3."
    Button1.textContent = "A."
    Button2.textContent = "B."
    Button3.textContent = "C."
    Button4.textContent = "D."
}

function Question4(){
    QuizEl.textContent = "4."
    Button1.textContent = "A."
    Button2.textContent = "B."
    Button3.textContent = "C."
    Button4.textContent = "D."
}

function Question5(){
    QuizEl.textContent = "5."
    Button1.textContent = "A."
    Button2.textContent = "B."
    Button3.textContent = "C."
    Button4.textContent = "D."
}

function ShowQuiz(){
    document.getElementById("Box").style.visibility = "visible"
}

function HideQuiz(){
    document.getElementById("Box").style.visibility = "hidden"
}

function GetScore(){
    score = localStorage.getItem("TimeScore")
    StatusEl.textContent = score
}

function SaveScore(){
    localStorage.getItem("TimeScore", timeLeft)
}

function Game(){
    if (Quest === 1) {
        Question1();
        Quest++;
    }
    else if (Quest === 2) {
        Question2();
        Quest++;
    }
    else if (Quest === 3) {
        Question3();
        Quest++;
    }
    else if (Quest === 4) {
        Question4();
        Quest++;
    }
    else if (Quest === 5) {
        Question5();
        Quest++;
    }
    else{
        SaveScore();
        Quest = 1;
        HideQuiz();
        GetScore();
        timeLeft = 0;
    }
}