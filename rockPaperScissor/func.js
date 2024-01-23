let userScore =0;
let compScore=0;

const display = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
console.log(choices);

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})


const showResult=(result)=>{
   if(result){
      display.innerText = "You win!";
      userScore++;
      user.innerText = userScore;
      display.style.backgroundColor = "green";
   }else{
    display.innerText = "You lose";
    compScore++;
    comp.innerText = compScore;
    display.style.backgroundColor="red";
   }
}

const showDraw =()=>{
    display.innerText = "Draw, play again";
    display.style.backgroundColor = "orange";
}
const judge=(userChoice, compChoice)=>{
    let result = true;  //user wins
    if(userChoice === compChoice){
        showDraw();
    }
    else{
          if(userChoice === "rock"){
            //paper, scissor
            result = (compChoice === "scissor") ? true : false;
            showResult(result);
          }else if(userChoice === "scissor"){
            //rock, paper
            result = (compChoice ==="paper")?true:false;
            showResult(result);
          }else{
            //scissor, rock
            result = (compChoice ==="rock")?true:false;
            showResult(result);
          }
    }
}
const playGame=(userChoice) =>{
    const options =["rock", "paper", "scissor"];
    const option = Math.floor(Math.random()*3);
    judge(userChoice, options[option]);
}

const reset = document.querySelector("#reset-btn");
reset.addEventListener("click", ()=>{
  user.innerText ="0";
  comp.innerText = "0";
})