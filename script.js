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
            StatusEl.setAttribute = ("style", "color: cornsilk")
            StatusEl.textContent = "Good Game!"
            Quest = 0
        }
        else{
            timeLeft = 0
            TimerEl.textContent = timeLeft
            StatusEl.setAttribute = ("style", "color: cornsilk")
            StatusEl.textContent = "You Lose!"
            clearInterval(timeInterval)
            HideButton()
            HideQuiz()
        };
    }, 1000);
};

StartEl.addEventListener("click", function(){
    StatusEl.textContent = ""
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

function DisplayScores(){

}

HighEl.addEventListener("click", function(){
    ViewWins()
    Highscore()
})

function Highscore(){
    document.getElementById("Score").style.visibility = "visible"
    HideQuiz()
    HideButton()
    ScoreEl.textContent = PlayWin
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
    StoreWins()
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
    StatusEl.textContent = "Correct + 15 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 15;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 15 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 15;
    console.log("Incorrect minus 15 seconds");
    Quest++
    firstQuest()   
    }
})

Button2.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 15 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 15;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 15 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 15;
    console.log("Incorrect minus 15 seconds");
    Quest++
    firstQuest()   
    }
})

Button3.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 15 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 15;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 15 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 15;
    console.log("Incorrect minus 15 seconds");
    Quest++
    firstQuest()   
    }
})

Button4.addEventListener("click", function (event) {
    if (event.currentTarget.innerText === Quiz[Quest].correct){
    StatusEl.textContent = "Correct + 15 sec";
    StatusEl.setAttribute("style", "color: Green");
    timeLeft = timeLeft + 15;
    console.log("correct");
    Quest++
    firstQuest()   
  } else {
    StatusEl.textContent = "Incorrect - 15 sec";
    StatusEl.setAttribute("style", "color: red");
    timeLeft = timeLeft - 15;
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

function StoreWins(){
    localStorage.setItem("highscores", JSON.stringify(highscores))
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