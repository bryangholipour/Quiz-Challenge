//NEED CLICK EVENT LISTENER THAT STARTS TIMER WHEN START BUTTON IS CLICKED
//NEED CLICK EVENT LISTENER THAT ADDS/ SUBTRACTS TIME WHEN RIGHT BUTTON IS CLICKED
//TIMER NEEDS TO BE IN TOP RIGHT CORNER
//CAN WE ENLARGE THE BUTTONS?
//HOW TO HIDE EVERYTHING EXCEPT FOR CURRENT QUESTION
//NEED OUTPUT MESSAGES AFTER EVERY QUESTION IS GIVEN A RESPONSE (BELOW CHOICES)
//NEED INITIALS/ SCORE PAGE MADE AFTER THE QUESTIONS HAVE BEEN ANSWERED
//
var startBtn = document.querySelector("#save1")
var scoreBtn = document.querySelector("#save2")
var isPlaying = false;
var rightAnswer = document.querySelector("#correct");
var wrongAnswer = document.querySelector("#incorrect");
var secondsLeft = 20;
let next_button =document.getElementById("next_Question")
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log("you lose!");
        // Stops execution of action at set interval
       
        // Calls function to create and append image
        
      }
  
    }, 1000);
  }

startBtn.addEventListener("click", function () {
    console.log("game started!");
    setTime();
    populate_questions();
})

let question_number = 1

function populate_questions(){
let initial_page = document.getElementById("initial_page")
initial_page.setAttribute("class" , "show")
let current_question = document.getElementById(`question_${question_number}`)
current_question.setAttribute("class" , `card show`)
// let button_div=document.createElement("button")
// button_div.innerHTML="next"
--rightAnswer.addEventListener("click" , function(e){
    e.preventDefault()
    console.log("next_button")
    console.log("question_number")
    document.getElementById(`question_${question_number}`).setAttribute("class" , "card hide")
    question_number++
    populate_questions()
})
current_question.append(button_div)
}
scoreBtn.addEventListener("click", function(){
    console.log("go to highscore page");
})



rightAnswer.addEventListener("click", function (){
    console.log("correct");
    secondsLeft = (secondsLeft + 10)
})

wrongAnswer.addEventListener("click", function(){
    console.log("incorrect");
    secondsLeft = (secondsLeft - 10)
})
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");





if(rightAnswer === true){
    secondsLeft = (secondsLeft + 10)
}   else{
    secondsLeft = (secondsLeft - 10)

   
}
    
  
// let questions = [{
//     question: "1. Lady Gaga starred in a 2020 biopic about this famous italian fashion house", 
//     choices: ["DIOR","PRADA","GUCCI","BALENCIAGA"],
//     answer: "GUCCI"
// },{
//     question: "2. Some of this director's projects include: Blue velvet, Dune (the 1980's one), Eraserhead, and Inland Empire", 
//     choices: ["DAVID LYNCH","CHRISTOPHER NOLAN","WES CRAVEN","WES ANDERSON"],
//     answer: "A DAVID LYNCH"
// },{
//     question: "3. Which award show hands out awards for BOTH movies and TV",
//     choices: ["THE GRAMMYS", "THE GOLDEN GLOBES", "THE ACADEMY AWARDS", "THE TONYS"],
//     answer: "THE GOLDEN GLOBES"
// },{
//     question: "4. This actor is famous for his 'method acting' in which he doesnt break character for the duration of filming",
//     choices: ["THE ROCK", "DANIEL DAY-LEWIS", "JEREMY RENNER", "TOM CRUISE"],
//     answer: "DANIEL DAY-LEWIS"
// },{
//     question: "5. Which network carries the shows Industry, Succession, Barry, and Westworld",
//     choices: ["HBO", "NETFLIX", "SHOWTIME", "LIFETIME"],
//     answer: "HBO"
// }]





