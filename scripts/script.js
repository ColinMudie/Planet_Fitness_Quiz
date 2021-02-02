
// Global Variables
let secondsEl = document.querySelector("#seconds");
let totalSeconds = 120;
let secondsElapsed = 0;
let totalSecondsLeft = 120;
let currentQuestionNumber = 0;
let score = 0;
let allUsers = JSON.parse(localStorage.getItem('all Users'));
let gameOverCheck = 0
let count = 0;
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
    title: "Which of the following is NOT an exclusive travel perk offered to our Black Card Members?",
    a: "200$ credit, to be used for food and lodging",
    b: "60% off hotel rates",
    c: "deals on airline tickets and car rentals",
    d: "low priced, weeklong vacations at resorts worldwide",
    answer: "A. 200$ credit, to be used for food and lodging"
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
    title: "How many purell sanitizer stations are there at Mt. P. PF?",
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
},
{
    number: 10,
    title: "What is the other name for the Total Body Enhancement?",
    a: "Life Amplification",
    b: "Pink Light Augmenter",
    c: "Beauty Angel",
    d: "Not Beauty Angel",
    answer: "C. Beauty Angel"
},
{
    number: 11,
    title: "Which Country is there currently NOT a planet fitness in?",
    a: "Domican Republic",
    b: "Canada",
    c: "Panama",
    d: "Costa Rica",
    answer: "D. Costa Rica"
},
{
    number: 12,
    title: "When transferring a member, Which of the following do you NOT require to complete a transfer",
    a: "Name",
    b: "Zip Code",
    c: "Keytag Number",
    d: "Email Address",
    answer: "A. Name"
},
{
    number: 13,
    title: "On what day of the month is a members overdue balances swept into the club account?",
    a: "Tuesday",
    b: "3rd",
    c: "26th",
    d: "11th",
    answer: "D. 11th"
},
{
    number: 14,
    title: "What is the address for our Gym here in Mount Pleasant?",
    a: "2135 S. Mission St.",
    b: "2315 S. Mission St.",
    c: "3512 N. Mission St.",
    d: "2153 N. Mission St.",
    answer: "A. 2135 S. Mission St."
},
{
    number: 15,
    title: "Black Card Members can recieve 20% off from this brands online store?",
    a: "Nike",
    b: "Reebok",
    c: "Skechers",
    d: "New Balance",
    answer: "B. Reebok"
},
{
    number: 16,
    title: "How many purple bars make up the crowd meter?",
    a: "25",
    b: "18",
    c: "20",
    d: "22",
    answer: "C. 20"
},
{
    number: 17,
    title: "Which of the following are NOT required to sign up for a free day pass online?",
    a: "Name",
    b: "Email",
    c: "Date of Birth",
    d: "Phone Number",
    answer: "D. Phone Number"
},
{
    number: 18,
    title: "How Many PFs are there currently in the Upper Peninsula of Michigan?",
    a: "2",
    b: "1",
    c: "0",
    d: "3",
    answer: "C. 0"
},
{
    number: 19,
    title: "What is the name of the white used by all PFs?",
    a: "Radiant White",
    b: "Titanium White",
    c: "Zinc White",
    d: "Flake White",
    answer: "B. Titanium White"
},
{
    number: 20,
    title: "Excluding the one in the back back, how many fire extinguishers are at our PF?",
    a: "4",
    b: "6",
    c: "3",
    d: "2",
    answer: "A. 4"
},
{
    number: 21,
    title: "When was Planet Fitness Founded?",
    a: "1992",
    b: "1995",
    c: "1993",
    d: "1998",
    answer: "A. 1992"
},
{
    number: 22,
    title: "What is the 1st song on the album \"NOW That's What I Call A Workout 2020\"?",
    a: "\"Blinding Lights\", by The Weeknd",
    b: "\"ily (i love you baby)\"[feat. Emilee][ARTY Remix]",
    c: '"Bang!", by AJR',
    d: "\"Heart On My Sleeve\", by GATTUSO & Laidback Luke [feat. Sarah Reeves]",
    answer: 'C. "Bang!", by AJR'
},
{
    number: 23,
    title: "Who is the CEO of Planet Fitness?",
    a: "Brad Falls",
    b: "Chuck Runyon",
    c: "Michael Grondahl",
    d: "Chris Rondeau",
    answer: "D. Chris Rondeau"
},
{
    number: 24,
    title: "Who is the nascar driver that is sponsered by PF?",
    a: "Joey Logano",
    b: "Ryan Blaney",
    c: "Corey Lajoie",
    d: "Daniel Suarez",
    answer: "A. Joey Logano"
},
{
    number: 25,
    title: 'Who is the trainer (that appeared on "The Biggest Loser") that customers can workout alongside on the PF app?',
    a: "Kim Lyons",
    b: "Jillian Michaels",
    c: "Erica Lugo",
    d: "Steve Cook",
    answer: "C. Erica Lugo"
},
];

let currentUser = [{
    name: "",
    score: ""
}]

//Shuffle Function (Fisher-Yates Shuffle)
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
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
    totalSecondsLeft = 120;
    totalSeconds = 120;
    secondsElapsed = 0
    if (totalSecondsLeft > 0) {
        let interval = setInterval(function () {
            secondsElapsed++;
            renderTimer();
            if (totalSecondsLeft <= 0) {
                clearInterval(interval);
                if (gameOverCheck === 0) {
                    lastQuestion();
                }
            }
        }, 1000);
    }
}

function addScore(amount) {
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
    count = 0;
}

function lastQuestion() {
    count = 0;
    gameOverCheck++;
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
            <li class="scoreboard-list"><span style="font-weight:500">${allUsers[index].name + ":     "}</span>${allUsers[index].score}</li>
                `)
        $('.scoreboard').append(scoreList);
    }
}

function gameOver() {
    $('.question-list').addClass("hide");
    $('.start-button').addClass("hide");
    $('.final-question').addClass("hide");
    $("#total-score").addClass("hide");
    $("#seconds").addClass("hide");
    totalSeconds = 0;
    $('#seconds').text("Time Left: 0");
    currentUser[0].score = score
    console.log(currentUser[0]);
    localStorage.setItem("userHighScore", JSON.stringify(currentUser[0]));
    if (allUsers.includes(currentUser[0]) === false) {
        allUsers.push(currentUser[0]);
        console.log(allUsers.includes(currentUser[0]))
    }
    localStorage.setItem("all Users", JSON.stringify(allUsers));
    printLocalStorage();
    $(".scoreboard").removeClass("hide");
}

function accuracy (input1, last){
    let answerValidationTime = 4;
    let answerSecondsElapsed = 0;
    let answerTotalTime = 4;
    if (answerValidationTime > 0) {
        let interval = setInterval(function () {
            answerSecondsElapsed++;
            answerValidationTime = answerTotalTime - answerSecondsElapsed;
            if (answerValidationTime <= 0) {
                input1.removeClass("correct");
                input1.removeClass("incorrect");
                if (currentQuestionNumber < question.length) {
                    renderQuestion(question, currentQuestionNumber);
                }
                else {
                    last();
                }
                clearInterval(interval);
            }
        }, 100);
    }
}



$('.start-btn').on("click", function () {
    currentUser[0].name = $('.name').val();
    if (currentUser[0].name === "") {
        alert("let's try entering a name in the input first.")
    } else {
        shuffle(question);
        $('#seconds').text("Time Left: 120");
        $("#total-score").text("Total Score: 0");
        startTimer();
        $('.start-button').addClass("hide");
        $(".question-list").removeClass("hide");
        renderQuestion(question, currentQuestionNumber);
        console.log(question);
    }
});

$('.answer').on("click", function () {
    let thisAnswer = $(this).text()
    if (count === 0){
        if (thisAnswer === question[(currentQuestionNumber - 1)].answer) {
            addScore(10);
            $(this).addClass('correct');
            accuracy($(this), lastQuestion);
            count++;
        }
        else {
            $(this).addClass('incorrect');
            totalSeconds = totalSeconds - 5;
            accuracy($(this), lastQuestion);
            count++;
        }
    }
})

$('.final-btn').on("click", function () {
    let coreValues = ["Excellence", "Trust", "Passion", "Growth", "Balance"];
    let value1 = $(".value1").val();
    let value2 = $(".value2").val();
    let value3 = $(".value3").val();
    let value4 = $(".value4").val();
    let value5 = $(".value5").val();

    (coreValues.includes(value1)) ? $('.value1').addClass('correct') : $('.value1').addClass('incorrect');
    (coreValues.includes(value2)) ? $('.value2').addClass('correct') : $('.value2').addClass('incorrect');
    (coreValues.includes(value3)) ? $('.value3').addClass('correct') : $('.value3').addClass('incorrect');
    (coreValues.includes(value4)) ? $('.value4').addClass('correct') : $('.value4').addClass('incorrect');
    (coreValues.includes(value5)) ? $('.value5').addClass('correct') : $('.value5').addClass('incorrect');

    if (count === 0){
        if (coreValues.includes(value1) && coreValues.includes(value2) && coreValues.includes(value3) && coreValues.includes(value4) && coreValues.includes(value5) && totalSecondsLeft > 0) {
            addScore(100);
        } else if (coreValues.includes(value1) && coreValues.includes(value2) && coreValues.includes(value3) && coreValues.includes(value4) && coreValues.includes(value5)) {
            addScore(50);
        }
        count++;
        accuracy($('.form-control'), gameOver);
    }
})

$(".scoreboard-btn").on("click", function () {
    printLocalStorage();
    $('.question-list').addClass("hide");
    $('.start-button').addClass("hide");
    $('.final-question').addClass("hide");
    $('.rules-text').addClass("hide");
    $(".scoreboard").removeClass("hide");
    $("#total-score").addClass("hide");
    $("#seconds").addClass("hide");
    printLocalStorage();
})

$(".home-btn").on("click", function () {
    location.reload();
})

$(".okay-btn").on("click", function () {
    $(".rules-text").addClass("hide");
    $(".start-button").removeClass("hide");
})

$('.name').keypress(function (e) {
    var key = e.which;
    if (key == 13)  // the enter key code
    {
        console.log("good");
        $('.start-btn').click();
        return false;
    }
}); 
