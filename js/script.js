// Richiamo le variabili
const container = document.getElementById("container");
const button = document.getElementById("button");
const listNumbers = [];
let difficolta = document.getElementById("difficolta");

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
  } else {
    boxNumber = 49;
    console.log("prova difficile", boxNumber);
  }; 
  
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
  target.append(sq);
  return sq;
}

function init(tot){
  for(let i = 0; i < tot; i++){
    const sq = createSquare(container);
    sq.innerHTML = i + 1;
  }
}   

