const boxes = Array.from(document.getElementsByClassName("box"));
const playtext = document.getElementById('playText');
const restartBtn = document.getElementById('restartbtn');
alert("Turn on Desktop mode if you are on a Phone")
console.log(boxes);
const spaces = [];
const O_TEXT = 'O';
const X_Text = 'X';
let currentPlayer;
const drawBoard = ()=> {
 boxes.forEach((box,index)=>{
   let styleString = '';
   if(index<3){
    styleString += `border-bottom:3px solid var(--purple);`;
   }
   if(index%3===0){
    styleString += `border-right:3px solid var(--purple);`;
   }
   if(index%3===2){
    styleString += `border-left:3px solid var(--purple);`;
   }
   if(index>5){
    styleString += `border-top:3px solid var(--purple);`;
   }
   box.style = styleString;
   box.addEventListener('click',boxClicked);
 });
}
const boxClicked = (e)=>{
 console.log("Box was Clicked")
 const id = e.target.id;
 if(!spaces[id]){
  spaces[id] = currentPlayer;
  e.target.innerText = currentPlayer;
  if(playerHasWon()){
   playtext.innerText = `${currentPlayer} Wins`;
   return;
  }
  currentPlayer = currentPlayer===O_TEXT?X_Text:O_TEXT;
 }
};
const playerHasWon = () => {
 if(spaces[0]===currentPlayer){
  if(spaces[1]===currentPlayer&&spaces[2]===currentPlayer){
   console.log(`${currentPlayer} Wins top`);
   return true;
  }
  if(spaces[3]===currentPlayer&&spaces[6]===currentPlayer){
   console.log(`${currentPlayer} Wins Left`);
   return true;
  }
  if(spaces[4]===currentPlayer&&spaces[8]===currentPlayer){
   console.log(`${currentPlayer} Wins Diagonaly`);
   return true;
  }
 }
 if(spaces[8]===currentPlayer){
  if(spaces[2]===currentPlayer&&spaces[5]===currentPlayer){
   console.log(`${currentPlayer} Wins Right`);
   return true;
  }
  if(spaces[7]===currentPlayer&&spaces[6]===currentPlayer){
   console.log(`${currentPlayer} Wins Bottom`);
   return true;
  }
 }
 if(spaces[4]===currentPlayer){
  if(spaces[1]===currentPlayer&&spaces[7]===currentPlayer){
   console.log(`${currentPlayer} Wins Center`);
   return true;
  }
  if(spaces[3]===currentPlayer&&spaces[5]===currentPlayer){
   console.log(`${currentPlayer} Wins Center`);
   return true;
  }
 }
};

const restart  = ()=>{
 spaces.forEach((space,index)=>{
  spaces[index]=null;
 });
 boxes.forEach((box)=>{
  box.innerText = '';
 });
 playtext.innerText = `XOXO Play!`
 currentPlayer = O_TEXT;
}
restartBtn.addEventListener('click',restart); 
restart();
drawBoard();
