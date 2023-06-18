let turn = "X";
let gameOver = false;

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtext = document.querySelectorAll(".boxtext");
  let wins = [
    [0, 1, 2, 1, 5, 0],
    [3, 4, 5, 1, 15, 0],
    [6, 7, 8, 1, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerHTML + " Won";
        document.querySelector(".info").style.color = "red"
      gameOver = true;
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg`;
      document.querySelector(".line").style.width = "100%";
    }
  });
};


let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if(gameOver  ){
    return
    }
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();

      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

document.querySelector("#reset").addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = " ";
  });
  turn = "X";
  gameOver = false;
  document.querySelector(".line").style.width = "0vw";
  document.querySelector(".win").innerText = boxtext[0].innerHTML + " ";

  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
