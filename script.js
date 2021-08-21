var HighEl = document.querySelector("#Highscore")
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
    QuizEl: "Commonly used data types DO NOT include",
    Button1: "Strings",
    Button2: "Booleans",
    Button3: "Alerts",
    Button4: "Numbers",
    correct: "Alerts"
},{
    QuizEl: "Arrays in Javascript can be used to store ____?",
    Button1: "Numbers and Strings",
    Button2: "other arrays",
    Button3: "Booleans",
    Button4: "All of the Above",
    correct: "All of the Above"
},{
    QuizEl: "The condition in an if/else statement is enclosed within ____?",
    Button1: "Parenthesis",
    Button2: "Quotes",
    Button3: "Curly Brackets",
    Button4: "Square Brackets",
    correct: "Parenthesis"
},{
    QuizEl: "String Values must be enclose within ____ when being assigned to variables.",
    Button1: "Commas",
    Button2: "Curly Brackets",
    Button3: "Quotes",
    Button4: "Parenthesis",
    correct: "Quotes"
},{
    QuizEl: "A Very useful tool during development and debugging for printing content to the dubugger is ____.",
    Button1: "Javascript",
    Button2: "For loops",
    Button3: "80's Music",
    Button4: "Console.log",
    correct: "Console.log"
}];

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var timeLeft = 60
var Quest = 0
var score = ""
var PlayWin = ""

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
            HideButton()
            clearInterval(timeInterval)
            CaseEl.style.order = "+1"
            StatusEl.style.color = "white"
            StatusEl.textContent = "Good Game!"
            Quest = 0
        }
        else{
            timeLeft = 0
            TimerEl.textContent = timeLeft
            StatusEl.style.color = "black";
            StatusEl.textContent = "You Lose!"
            clearInterval(timeInterval)
            HideButton()
            HideQuiz()
        };
    }, 1000);
};

StartEl.addEventListener("click", function(){
    StatusEl.textContent = ""
    CaseEl.style.order = "-1"
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

HighEl.addEventListener("click", function(){
    ViewWins()
    Highscore()
})

function Highscore(){
    document.getElementById("Score").style.visibility = "visible"
    HideQuiz()
    HideButton()
}

function SaveScore(){
    localStorage.setItem("timeLeft", timeLeft)
    score = localStorage.getItem("timeLeft")
    var Initials = prompt("Input Initials\n Max 4 Letters");
    
    if (Initials === ""){
        window.alert("Initials cannot be blank!")
        SaveScore()
    }
    else{
    var Input = Initials.substr(0, 4)
    PlayWin = (score + " - " + Input)
    }

    highscores.push(PlayWin)
    localStorage.setItem("highscores", JSON.stringify(highscores))
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
    }
}

Button1.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 15 sec";
    StatusEl.style.color = "green";
    timeLeft = timeLeft + 15;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 15 sec";
    timeLeft = timeLeft - 15;
    StatusEl.style.color = "red";
    console.log("Incorrect minus 15 seconds");
    Quest++
    firstQuest()   
    }
})

Button2.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
        StatusEl.textContent = "Correct + 15 sec";
        StatusEl.style.color = "green";
        timeLeft = timeLeft + 15;
        console.log("correct");
        Quest++
        firstQuest()   
      } else {
        StatusEl.textContent = "Incorrect - 15 sec";
        timeLeft = timeLeft - 15;
        StatusEl.style.color = "red";
        console.log("Incorrect minus 15 seconds");
        Quest++
        firstQuest()   
        }
})

Button3.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
        StatusEl.textContent = "Correct + 15 sec";
        StatusEl.style.color = "green";
        timeLeft = timeLeft + 15;
        console.log("correct");
        Quest++
        firstQuest()   
      } else {
        StatusEl.textContent = "Incorrect - 15 sec";
        timeLeft = timeLeft - 15;
        StatusEl.style.color = "red";
        console.log("Incorrect minus 15 seconds");
        Quest++
        firstQuest()   
        }
})

Button4.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
        StatusEl.textContent = "Correct + 15 sec";
        StatusEl.style.color = "green";
        timeLeft = timeLeft + 15;
        console.log("correct");
        Quest++
        firstQuest()   
      } else {
        StatusEl.textContent = "Incorrect - 15 sec";
        timeLeft = timeLeft - 15;
        StatusEl.style.color = "red";
        console.log("Incorrect minus 15 seconds");
        Quest++
        firstQuest()   
        }
})

function init(){
    var StoredWinners = JSON.parse(localStorage.getItem("highscores"))

    if (StoredWinners !== null) {
        highscores = StoredWinners
    }

    ViewWins()
}

function ViewWins(){
    ScoreEl.innerHTML = "";

    for (var i = 0; i < highscores.length; i++) {
        var highscore = highscores[i];
    
        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", i);

        ScoreEl.appendChild(li);
    }
}