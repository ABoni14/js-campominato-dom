// Richiamo le variabili
const container = document.getElementById("container");
const button = document.getElementById("button");
const listNumbers = [];
let difficolta = document.getElementById("difficolta");
let bombs = [];
let contatore = 0;
const tentativi = [];
const tentativiMax = numberCellBombs - 16;
console.log(tentativiMax);

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
    console.log(event);

    const cellValue = parseInt(event.target.innerText);
    if(bombs.includes(cellValue)){
      endGame();
    } else {
      if(!tentativi.includes(cellValue)){
        contatore++;
        tentativi.push(cellValue);
        this.classList.add("clicked");

        if(tentativi === tentativiMax){
          endGame();
        }
      }

      console.log(tentativi);
    }


    // let prova = parseInt(event.target.innerText);
    // if(bombs.includes(prova)){
    //   this.classList.add("wrong");
    //   return container.append("Hai perso, ritenta")
    // } else {
    //   this.classList.add("clicked");
    // }
  }

  function clickCellWrong(event){
    console.log(event.target.innerText);
    this.classList.add("wrong");
  }


  function endGame(){
    console.log("END");
    const cells = document.getElementsByClassName("square");
    console.log(cells);

    for (let i = 0; i < cells.length; i++){

      if(bombs.includes(i + 1)){
        cells[i].classList.add("wrong");
      }
      cells[i].removeEventListener("click", clickCell)
    }

    let msg = "";
    if(tentativi === tentativiMax){
      msg = "Complimenti! Hai vinto!"
    } else{
      msg = `Hai perso! Hai fatto ${contatore} tentativi`
    }


    const output = document.createElement("div");
    output.innerHTML = `<h4>${msg}</h4>`;
    document.querySelector(".ab-container").append(output);
  }
  






 

