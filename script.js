var TimerEl = document.querySelector("#timer")
var BoxEl = document.querySelector("#Question")
var StartEl = document.querySelector("#Start")
var StatusEl = document.querySelector("#Prompt")
var ScoreEl = document.querySelector("#Score")
var QuizEl = document.querySelector("#Quiz")
var ButtonEl = document.querySelector(".button")
var Button1 = document.querySelector("#Button-1")
var Button2 = document.querySelector("#Button-2")
var Button3 = document.querySelector("#Button-3")
var Button4 = document.querySelector("#Button-4")
var CaseEl = document.querySelector("#Box")


var Quiz = [{
    QuizEl: "1",
    Button1: "A",
    Button2: "B",
    Button3: "C",
    Button4: "D",
    correct: "A"
},{
    QuizEl: "2",
    Button1: "A",
    Button2: "B",
    Button3: "C",
    Button4: "D",
    correct: "B"
},{
    QuizEl: "3",
    Button1: "A",
    Button2: "B",
    Button3: "C",
    Button4: "D",
    correct: "D"
},{
    QuizEl: "4",
    Button1: "A",
    Button2: "B",
    Button3: "C",
    Button4: "D",
    correct: "A"
},{
    QuizEl: "5",
    Button1: "A",
    Button2: "B",
    Button3: "C",
    Button4: "D",
    correct: "C"
}];

var highscores = []
var timeLeft = 60
var Quest = 0
var score = ""

function ButtonDisplay(){
    document.getElementById("Start").style.visibility = "hidden"
}

function HideButton(){
    document.getElementById("Start").style.visibility = "visible"
}

function Countdown(){
    timeLeft = 60
    var timeInterval = setInterval(function (){
        if (timeLeft > 0 && Quest < 5){
            TimerEl.textContent = timeLeft
            timeLeft--;
        }
        else if(timeLeft > 0 && Quest === 5){
            SaveScore()
            Highscore()
            clearInterval(timeInterval)
        }
        else{
            timeLeft = 0
            TimerEl.textContent = timeLeft
            StatusEl.textContent = "Good Game!"
            StatusEl.setAttribute = ("style", "color: cornsilk")
            clearInterval(timeInterval)
            HideButton()
            HideQuiz()
        };
    }, 1000);
};

StartEl.addEventListener("click", function(){
    StatusEl.textContent = ""
    Quest = 0
    document.getElementById("Score").style.visibility = "hidden"
    Countdown();
    ButtonDisplay();
    ShowQuiz();
    firstQuest();
})

function ShowQuiz(){
    document.getElementById("Box").style.visibility = "visible"
}

function HideQuiz(){
    document.getElementById("Box").style.visibility = "hidden"
}

function Highscore(){
    GetScore();
    var Initials = prompt("Input Initials\n Max 4");
    ScoreEl.textContent = Initials + " - " + score
    document.getElementById("Score").style.visibility = "visible"
}

function GetScore(){
    score = localStorage.getItem("timeLeft")
}

function SaveScore(){
    localStorage.getItem("timeLeft", timeLeft)
}

function firstQuest() {
    if(Quest < 5){
    var Solve = Quiz[Quest];
    QuizEl.textContent = Solve.QuizEl;
    Button1.textContent = Solve.Button1;
    Button2.textContent = Solve.Button2;
    Button3.textContent = Solve.Button3;
    Button4.textContent = Solve.Button4;
    }
    else{
        HideQuiz()
        StatusEl.textContent = "Good Game!"
        StatusEl.setAttribute = ("style", "color: cornsilk")
    }
}

Button1.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 5 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 5;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 5 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 5;
    console.log("Incorrect minus 5 seconds");
    Quest++
    firstQuest()   
    }
})

Button2.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 5 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 5;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 5 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 5;
    console.log("Incorrect minus 5 seconds");
    Quest++
    firstQuest()   
    }
})

Button3.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 5 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 5;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 5 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 5;
    console.log("Incorrect minus 5 seconds");
    Quest++
    firstQuest()   
    }
})

Button4.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 5 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 5;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 5 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 5;
    console.log("Incorrect minus 5 seconds");
    Quest++
    firstQuest()   
    }
})