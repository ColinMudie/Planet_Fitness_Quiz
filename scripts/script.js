
// Global Variables
let secondsEl = document.querySelector("#seconds");
let totalSeconds = 30;
let secondsElapsed = 0;
let totalSecondsLeft = 30;
let currentQuestionNumber = 0;
let score = 0;
let allUsers = JSON.parse(localStorage.getItem('all Users'));
if (allUsers === null) {
    allUsers = [];
}
// Question List w/ Answer
let question = [{
    number: 1,
    title: "How many steps are there on a StairMaster?",
    a: "10",
    b: "9",
    c: "14",
    d: "8",
    answer: "D. 8"
},
{
    number: 2,
    title: "How much weight does the leg press apply without any additional weights on it?",
    a: "35lb",
    b: "118lb",
    c: "50lb",
    d: "86lb",
    answer: "B. 118lb"
},
{
    number: 3,
    title: "We all know the normal code to all our doors, what is the other code you can use?",
    a: "2014",
    b: "1092",
    c: "2008",
    d: "1234",
    answer: "A. 2014"
},
{
    number: 4,
    title: "How many treadmills are there in the club?",
    a: "32",
    b: "28",
    c: "30",
    d: "36",
    answer: "C. 30"
},
{
    number: 5,
    title: "How many purell sanitizer pumps are there at Mt. P. PF?",
    a: "10",
    b: "12",
    c: "9",
    d: "7",
    answer: "A. 10"
},
{
    number: 6,
    title: "Excluding the hidden one in the back-back, How many TVs are there?",
    a: "10",
    b: "18",
    c: "14",
    d: "17",
    answer: "D. 17"
},
{
    number: 7,
    title: "What brand is our PF Purple Dry Erase Markers?",
    a: "Expo",
    b: "Crayola",
    c: "Volcanics",
    d: "U Brands",
    answer: "C. Volcanics"
},
{
    number: 8,
    title: "How many PFs are in our franchise?",
    a: "40",
    b: "39",
    c: "33",
    d: "34",
    answer: "B. 39"
},
{
    number: 9,
    title: "Who is our club manager?",
    a: "Jesse",
    b: "Taylor",
    c: "Will",
    d: "Brad",
    answer: "B. Taylor"
}];

let currentUser = [{
    name: "",
    score: ""
}]

//Shuffle Function (Fisher-Yates Shuffle)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
// display the timer
function renderTimer() {
    totalSecondsLeft = totalSeconds - secondsElapsed;
    secondsEl.textContent = "Time Left: " + totalSecondsLeft;
}

// timer
function startTimer() {
    if (totalSecondsLeft > 0) {
        var interval = setInterval(function () {
            secondsElapsed++;
            renderTimer();
            if (totalSecondsLeft <= 0) {
                clearInterval(interval);
                lastQuestion()
            }
        }, 1000);
    }
}

function addScore(amount){
    score = score + amount;
    $("#total-score").text("Total Score: " + score);
}

function renderQuestion(object, index) {
    $(".question-number").text("Question no. " + (index + 1));
    $(".question-text").text(object[index].title);
    $(".answer-1").text("A. " + object[index].a);
    $(".answer-1").attr("question-no", object[index].number);
    $(".answer-2").text("B. " + object[index].b);
    $(".answer-2").attr("question-no", object[index].number);
    $(".answer-3").text("C. " + object[index].c);
    $(".answer-3").attr("question-no", object[index].number);
    $(".answer-4").text("D. " + object[index].d);
    $(".answer-4").attr("question-no", object[index].number);
    currentQuestionNumber++;
}

function lastQuestion(){
    $('.question-list').addClass("hide");
    $(".final-question").removeClass("hide");
}

// Write Local Storage to Page
function printLocalStorage() {
    $('.scoreboard').empty();
    let savedEntries = JSON.parse(localStorage.getItem("all Users"))
    if (savedEntries === null) {
        savedEntries = [];
    }
    console.log(allUsers)
    allUsers.sort((a, b,) => (a.score < b.score) ? 1 : -1)
    console.log(allUsers);
    for (let index = 0; index < savedEntries.length; index++) {
        let scoreList = $(`
            <li class="scoreboard-list">Name: ${allUsers[index].name} Score: ${allUsers[index].score}</li>
                `)
        $('.scoreboard').append(scoreList);
    } 
}

function  gameOver(){
    $('.question-list').addClass("hide");
    $('.start-button').addClass("hide");
    $('.final-question').addClass("hide");
    totalSeconds = 0;
    currentUser[0].score = score
    console.log(currentUser[0]);
    localStorage.setItem("userHighScore", JSON.stringify(currentUser[0]));
    if (allUsers.includes(currentUser[0]) === false){
        allUsers.push(currentUser[0]);
        console.log(allUsers.includes(currentUser[0]))
    }
    localStorage.setItem("all Users", JSON.stringify(allUsers));
    printLocalStorage();
    $(".scoreboard").removeClass("hide");
}

$('.start-btn').on("click", function () {
    shuffle(question);
    startTimer();
    currentUser[0].name = $('.name').val();
    $('.start-button').addClass("hide");
    $(".question-list").removeClass("hide");
    renderQuestion(question, currentQuestionNumber);
    console.log(question);
});

$('.answer').on("click", function () {
    let thisAnswer = $(this).text()
    if (thisAnswer === question[(currentQuestionNumber - 1)].answer) {
        addScore(10);
    }
    else {
        totalSeconds = totalSeconds - 5;
    }
    if (currentQuestionNumber < question.length){
        console.log("currenQuestionNumber: " + currentQuestionNumber);
        console.log("question.length: " + question.length);
    renderQuestion(question, currentQuestionNumber);
    }
    else {
        lastQuestion();
    }
})

$('.final-btn').on("click", function(){
    let coreValues = ["Excellence", "Trust", "Passion", "Growth", "Balance"];
    let value1 = $(".value1").val();
    let value2 = $(".value2").val();
    let value3 = $(".value3").val();
    let value4 = $(".value4").val();
    let value5 = $(".value5").val();
    if (coreValues.includes(value1) && coreValues.includes(value2) && coreValues.includes(value3) && coreValues.includes(value4) && coreValues.includes(value5) && totalSecondsLeft > 0){
        addScore(100);
    } else if (coreValues.includes(value1) && coreValues.includes(value2) && coreValues.includes(value3) && coreValues.includes(value4) && coreValues.includes(value5)){
        addScore(50);
    }
    gameOver();
})

$(".scoreboard-btn").on("click", function(){
    printLocalStorage();
    $('.question-list').addClass("hide");
    $('.start-button').addClass("hide");
    $('.final-question').addClass("hide");
    $(".scoreboard").removeClass("hide");
    printLocalStorage();
})

$(".home-btn").on("click", function(){
    $('.question-list').addClass("hide");
    $('.final-question').addClass("hide");
    $(".scoreboard").addClass("hide");
    $('.start-button').removeClass("hide");
})