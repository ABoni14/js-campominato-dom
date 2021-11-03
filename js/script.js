// Richiamo le variabili
const container = document.getElementById("container");
const button = document.getElementById("button");
const listNumbers = [];
let difficolta = document.getElementById("difficolta");
let bombs = [];

button.addEventListener("click",function(){
  console.log(difficolta.value);
  container.innerHTML = "";
  let boxNumber = 0;
  if(difficolta.value == "facile"){
    boxNumber = 100;
    console.log("prova facile", boxNumber);
  } else if(difficolta.value == "normale"){
    boxNumber = 81;
    console.log("prova normale", boxNumber);
  } else if (difficolta.value == "difficile"){
    boxNumber = 49;
    console.log("prova difficile", boxNumber);
  }; 
  
  bombs = generateBombs(bombs);
  console.log(bombs);


  init(boxNumber);

})

function createSquare(target){
  const sq = document.createElement('div');
  sq.classList.add("square");
  if(difficolta.value == "facile"){
    sq.classList.add("easy");
  } else if(difficolta.value == "normale"){
    sq.classList.add("normal");
  } else{
    sq.classList.add("hard");
  }

  sq.addEventListener("click", clickCell);


  target.append(sq);
  return sq;
}

function init(tot){
  for(let i = 0; i < tot; i++){
    const sq = createSquare(container);
    sq.innerHTML = i + 1;
  }
}     

function generateBombs(bombs) {
    bombs = [];
    while(bombs.length < 16) {
      const bomb = getRandomInt(1, numberCellBombs(difficolta));
      if(!bombs.includes(bomb)) bombs.push(bomb);
    }
  
    return bombs;
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function numberCellBombs(toCheck){
    let cellBombs = 0;
    if(toCheck.value == "facile"){
      cellBombs = 100;
    } else if(toCheck.value == "normale"){
      cellBombs = 81;
    } else {
      cellBombs = 49;
    }

    return cellBombs;
  }
  

  function clickCell(event){
    console.log(event.target.innerText);
    this.classList.add("clicked");
  }
  






 

