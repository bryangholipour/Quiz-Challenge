var startBtn = document.querySelector("#save1")
var scoreBtn = document.querySelector("#save2")
var isPlaying = false;
var rightAnswer = document.querySelector("#correct");
var wrongAnswer = document.querySelector("#incorrect");
var rightAnswer2 = document.querySelector("#correct2");
var wrongAnswer2 = document.querySelector("#incorrect2");
var rightAnswer3 = document.querySelector("#correct3");
var wrongAnswer3 = document.querySelector("#incorrect3");
var rightAnswer4 = document.querySelector("#correct4");
var wrongAnswer4 = document.querySelector("#incorrect4");
var rightAnswer5 = document.querySelector("#correct5");
var wrongAnswer5 = document.querySelector("#incorrect5");
var secondsLeft = 56;
var timeEl = document.querySelector(".time");

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
          clearInterval(timerInterval);
          console.log("you lose!");
          timeEl.textContent = "YOU LOST :("
      }
  
    }, 1000);
  }

startBtn.addEventListener("click", function () {
    console.log("game started!");
    setTime();
    populate_questions();
    startBtn.style.display = 'none';
})

let question_number = 1
function populate_questions(){
let initial_page = document.getElementById("initial_page")
initial_page.setAttribute("class" , "show")
let current_question = document.getElementById(`question_${question_number}`)
current_question.setAttribute("class" , `card show`)
rightAnswer.addEventListener("click" , function(e){
    e.preventDefault()
    document.getElementById(`question_${question_number}`).setAttribute("class" , "card hide")
    question_number++
    populate_questions()
})
current_question.append(+1)

}
rightAnswer2.addEventListener("click" , function(e){
    e.preventDefault()
    document.getElementById(`question_${question_number}`).setAttribute("class" , "card hide")
    question_number++
    populate_questions()
})
rightAnswer3.addEventListener("click" , function(e){
    e.preventDefault()
    document.getElementById(`question_${question_number}`).setAttribute("class" , "card hide")
    question_number++
    populate_questions()
})
rightAnswer4.addEventListener("click" , function(e){
    e.preventDefault()
    document.getElementById(`question_${question_number}`).setAttribute("class" , "card hide")
    question_number++
    populate_questions()
})
rightAnswer5.addEventListener("click" , function(e){
    e.preventDefault()
    document.getElementById(`question_${question_number}`).setAttribute("class" , "card hide")
    question_number++
    populate_questions()
})

rightAnswer.addEventListener("click", function (){
    console.log("correct");
    secondsLeft = (secondsLeft + 5)
})
wrongAnswer.addEventListener("click", function(){
    console.log("incorrect");
    secondsLeft = (secondsLeft - 5)
})
rightAnswer2.addEventListener("click", function (){
    console.log("correct2");
    secondsLeft = (secondsLeft + 5)  
})
wrongAnswer2.addEventListener("click", function(){
    console.log("incorrect2");
    secondsLeft = (secondsLeft - 5)
})
rightAnswer3.addEventListener("click", function (){
    console.log("correct3");
    secondsLeft = (secondsLeft + 5) 
})
wrongAnswer3.addEventListener("click", function(){
    console.log("incorrect3");
    secondsLeft = (secondsLeft - 5)
})
rightAnswer4.addEventListener("click", function (){
    console.log("correct4");
    secondsLeft = (secondsLeft + 5) 
})
wrongAnswer4.addEventListener("click", function(){
    console.log("incorrect4");
    secondsLeft = (secondsLeft - 5)
})
rightAnswer5.addEventListener("click", function (){
    console.log("correct5");
    secondsLeft = (secondsLeft + 5)  
})
wrongAnswer5.addEventListener("click", function(){
    console.log("incorrect5");
    secondsLeft = (secondsLeft - 5)
})

if(rightAnswer === true){
    secondsLeft = (secondsLeft + 5)
}   else{
    secondsLeft = (secondsLeft - 5)
}
if(rightAnswer2 === true){
    secondsLeft = (secondsLeft + 5)
}   else{
    secondsLeft = (secondsLeft - 5)
}    
if(rightAnswer3 === true){
    secondsLeft = (secondsLeft + 5)
}   else{
    secondsLeft = (secondsLeft - 5)
}    
if(rightAnswer4 === true){
    secondsLeft = (secondsLeft + 5)
}   else{
    secondsLeft = (secondsLeft - 5)
}  
if(rightAnswer5 === true){
    secondsLeft = (secondsLeft + 5)
}   else{
    secondsLeft = (secondsLeft - 5)
}       
console.log(".time")