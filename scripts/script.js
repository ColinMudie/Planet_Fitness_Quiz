// Global Variables
let secondsEl = document.querySelector("#seconds");
let totalSeconds = 30;
let secondsElapsed = 0;
let totalSecondsLeft = 30;
let currentQuestionNumber = 0;
let score = 0;
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
    title: "How many steps are there on a stair master?",
    a: "10",
    b: "9",
    c: "14",
    d: "8",
    answer: "D. 8"
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

let currentUser = {
    name: "",
    score: ""
}

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
                // Put prompt for core values here.
            }
        }, 1000);
    }
}

function addScore(){
    score = score + 10;
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

$('.btn').on("click", function () {
    shuffle(question);
    startTimer();
    currentUser.name = $('.name').val();
    $('.start-button').addClass("hide");
    $(".question-list").removeClass("hide")
    renderQuestion(question, currentQuestionNumber);

});

$('.answer').on("click", function () {
    let thisAnswer = $(this).text()
    // console.log(question);
    // console.log(thisAnswer);
    // console.log(thisQuestion);
    // console.log(question[(currentQuestionNumber - 1)].answer)
    if (thisAnswer === question[(currentQuestionNumber - 1)].answer) {
        console.log("you got it rite");
        addScore();
    }
    else {
        totalSeconds = totalSeconds - 5;
    }
    renderQuestion(question, currentQuestionNumber);
})


