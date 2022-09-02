const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let result = document.getElementById("result");
const choice = new Map([
  ["rock",1],
  ["paper",2],
  ["scissors",3]
]);


rock.addEventListener("click",()=>{
  player.value = choice.get("rock");
  player.innerHTML = "Player:rock";
  computerChoice();
  let check = checkWinner();
  if (check == 0) result.innerHTML = "Result:Draw";
  else if(check==1) result.innerHTML = "Result:Player Winn!!!!";
  else if(check==2) result.innerHTML = "Result:Player suckkkkkkss!!";
});


paper.addEventListener("click",()=>{
  player.value = choice.get("paper");
  player.innerHTML = "Player:paper";
  computerChoice();
  let check = checkWinner();
  if (check == 0) result.innerHTML = "Result:Draw";
  else if(check==1) result.innerHTML = "Result:Player Winn!!!!";
  else if(check==2) result.innerHTML = "Result:Player suckkkkkkss!!";
});


scissors.addEventListener("click",()=>{
  player.value = choice.get("scissors");
  player.innerHTML = "Player:scissors";
  computerChoice();
  let check = checkWinner();
  if (check == 0) result.innerHTML = "Result:Draw";
  else if(check==1) result.innerHTML = "Result:Player Winn!!!!";
  else if(check==2) result.innerHTML = "Result:Player suckkkkkkss!!";
});



function computerChoice(){
  computer.value = Math.floor(Math.random()*3)+1;
  if (computer.value==1){
    computer.innerHTML = "Computer:rock";
  }
  else if(computer.value==2){
    computer.innerHTML = "Computer:paper";
  }
  else if(computer.value==3){
    computer.innerHTML = "Computer:scissors";
  }
}

function checkWinner(){
  if (player.value == computer.value) return 0;
  else if(player.value==1 && computer.value==3) return 1;
  else if(player.value==1 && computer.value==2) return 2;
  else if(player.value==2 && computer.value==3) return 2;
  else if(player.value==2 && computer.value==1) return 1;
  else if(player.value==3 && computer.value==2) return 1;
  else if(player.value==3 && computer.value==1) return 2;  
}