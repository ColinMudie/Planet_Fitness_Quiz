// Global Variables
let secondsEl = document.querySelector("#seconds");
let totalSeconds = 60;
let secondsElapsed = 0;
let totalSecondsLeft = 60;


// Question List w/ Answer
let question = [{
    number: 1,
    title: "How many steps are there on a stair master?",
    a: "10",
    b: "9",
    c: "14",
    d: "8",
    answer: "8"
},
{
    number: 2,
    title: "How much weight does the leg press apply without any additional weights on it?",
    a: "35",
    b: "118",
    c: "50",
    d: "86",
    answer: "118"
},
{
    number: 3,
    title: "We all know our door code is 1091, what is the other code you can use?",
    a: "2014",
    b: "1092",
    c: "2008",
    d: "1234",
    answer: "2014"
},
{
    number: 4,
    title: "How many treadmills are there in the club?",
    a: "32",
    b: "28",
    c: "30",
    d: "36",
    answer: "30"
},
{
    number: 5,
    title: "How many purell sanitizer pumps are there at Mt. P. PF?",
    a: "10",
    b: "12",
    c: "9",
    d: "7",
    answer: "10"
},
{
    number: 6,
    title: "-Excluding the hidden one in the back-back,- How many TVs are there?",
    a: "10",
    b: "18",
    c: "14",
    d: "17",
    answer: "17"
},
{
    number: 7,
    title: "How many steps are there on a stair master?",
    a: "10",
    b: "9",
    c: "14",
    d: "8",
    answer: "8"
},
{
    number: 8,
    title: "How many PFs are in our franchise?",
    a: "40",
    b: "39",
    c: "33",
    d: "34",
    answer: "39"
},
{
    number: 9,
    title: "Who is our club manager?",
    a: "Jesse",
    b: "Taylor",
    c: "Will",
    d: "Brad",
    answer: "Taylor"
}
]

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
                // renderTime();
            }
        }, 100);
    }

}

$('.btn').on("click", function(){
    startTimer();
    $('.start-button').addClass("hide");
    $(".question-list").removeClass("hide")
});