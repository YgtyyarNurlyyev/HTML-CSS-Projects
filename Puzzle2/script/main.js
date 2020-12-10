// body 1 slideshow
const slideshow = document.querySelectorAll(".centeranimation .animations");
const nextDelay = 3500;
let wingame = document.getElementById("winnerdiv");
let cp = document.getElementById("chead");
let restartp = document.getElementById("restart");
let currentCounter = 0;
var i,j;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

slideshow[currentCounter].style.display = "block";

setInterval(nextSlide , nextDelay);

function nextSlide(){
    slideshow[currentCounter].style.opacity = 0;
    setTimeout(function(){
        slideshow[currentCounter].style.display = "none";
        currentCounter = (currentCounter + 1) % slideshow.length;
        slideshow[currentCounter].style.display = "block";
        slideshow[currentCounter].style.opacity = 1;
    } ,2900)   
}
// 
// body gecis
let startbutton = document.getElementById("startbutton");
let cbutton = document.getElementById("continuebutton");
let imgindex = 0 ;
boddy1 = document.getElementById("body1");
boddy2 = document.getElementById("body2");
boddy3 = document.getElementById("body3");
let surat = document.querySelectorAll("#imgg")
startbutton.addEventListener("click",boody2);
cbutton.addEventListener("click",boody3)

async function boody2(){
  boddy1.style.transition = "all .3s";
  boddy1.style.opacity = "0";
  startbutton.style.transition = "all .3s";
  startbutton.style.opacity = "0";
  boddy2.style.transition = "all .3s";
  await sleep(700);
  boddy1.style.display = "none";
  startbutton.style.display = "none";
  boddy2.style.display = "block";
  boddy2.style.opacity = "0";
  await sleep(90);
  boddy2.style.opacity = "1";  
}

async function boody3(){
  boddy2.style.transition = "all .3s";
  boddy2.style.opacity = "0";
  cbutton.style.transition = "all .3s";
  cbutton.style.opacity = "0";
  boddy3.style.transition = "all .3s";
  await sleep(700);
  boddy2.style.display = "none";
  startbutton.style.display = "none";
  boddy3.style.display = "block";
  boddy3.style.opacity = "0";
  await sleep(90);
  boddy3.style.opacity = "1";
    var imageurl = "url(img/img" + imgindex + ".jpg)";
    for (i = 1; i < 9; i++) {
        surat[i].style.backgroundImage = imageurl;
      }
}
//
// pick image
let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");

img1.addEventListener("click", pickimage1);
img2.addEventListener("click", pickimage2);
img3.addEventListener("click", pickimage3);

function pickimage1() {
    img2.style.border = "none";
    img3.style.border = "none";
    img2.style.boxShadow = "none";  
    img3.style.boxShadow = "none";
    img1.style.border = "10px solid white";
    img1.style.boxShadow = "5px 5px 5px 5px grey";
    cbutton.style.display = "inline-block";
    imgindex = 1;
}

function pickimage2() {
    img1.style.boxShadow = "none";  
    img3.style.boxShadow = "none";
    img1.style.border = "none";
    img3.style.border = "none"; 
    img2.style.border = "10px solid white";
    img2.style.boxShadow = "5px 5px 5px 5px grey";
    cbutton.style.display = "inline-block";
    imgindex = 2;
}

function pickimage3() {
    img1.style.boxShadow = "none";  
    img2.style.boxShadow = "none";
    img1.style.border = "none";
    img2.style.border = "none";  
    img3.style.border = "10px solid white";
    img3.style.boxShadow = "5px 5px 5px 5px grey";
    cbutton.style.display = "inline-block";
    imgindex = 3;
}
//
// game
let playbutton = document.getElementById("startgame");
let status = document.querySelector("#chooseid");
let selectp = document.querySelector("#selp");

status.addEventListener("change", function () {
  if (this.value == 3 || this.value == 30) {
    playbutton.style.display = "inline-block";
  }
});

const gameTiles = document.querySelectorAll('.img');
const gameBoard = document.querySelector('#game-board');

const gameState = [
  [gameTiles[0], gameTiles[1], gameTiles[2]],
  [gameTiles[3], gameTiles[4], gameTiles[5]],
  [gameTiles[6], gameTiles[7], gameTiles[8]],
];

const gameState2 = [
  [gameTiles[0], gameTiles[1], gameTiles[2]],
  [gameTiles[3], gameTiles[4], gameTiles[5]],
  [gameTiles[6], gameTiles[7], gameTiles[8]],
];

function viewgame(gameBoard, gameState) {
  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      column.style.top = `${rowIndex * 156}px`;
      column.style.left = `${columnIndex * 156}px`;

      column.style['background-position-y'] = `-${rowIndex * 156}px`;
      column.style['background-position-x'] = `-${columnIndex * 156}px`;

      gameBoard.appendChild(column);
    });
  });
}

function redborder() {
  for (var h1 = 0; h1 < 3; h1++) {
    for (var h2 = 0; h2 < 3; h2++) {
      if (gameState[h1][h2] !== gameState2[h1][h2]) { gameState[h1][h2].style.borderColor = "red"; } ;
      if (gameState[h1][h2] === gameState2[h1][h2]) { gameState[h1][h2].style.borderColor = "green"; } ;
   }
  }
}

function moveElement(element1, element2) {
  const tempTop = element1.style.top;
  const tempLeft = element1.style.left;

  element1.style.top = element2.style.top;
  element1.style.left = element2.style.left;

  element2.style.top = tempTop;
  element2.style.left = tempLeft;
}

viewgame(gameBoard, gameState);

playbutton.addEventListener('click',async function() {
status.style.display = "none";
playbutton.style.display = "none";
selectp.style.display = "none";
let sufflerandom;
let suffletarget;
let memoryrandom;
var moves = status.value;
let x, y;
var j = 0;

while(j<moves) {
sufflerandom = Math.floor(Math.random() * 9);

if (memoryrandom != sufflerandom) {
  suffletarget = gameTiles[sufflerandom];
  
  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === suffletarget) {
        x = rowIndex;
        y = columnIndex;
      }
    });
  });
  
  let emptyX, emptyY;
  
  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.innerText === '') {
        emptyX = rowIndex;
        emptyY = columnIndex;
      }
    });
  });
  
  if (
    (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
    (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))
  ) {
    moveElement(gameState[x][y], gameState[emptyX][emptyY]);
    j++;
    memoryrandom = sufflerandom;
    const temp = gameState[x][y];
    gameState[x][y] = gameState[emptyX][emptyY];
    gameState[emptyX][emptyY] = temp;
    if (moves == 3) { await sleep(800); }
    if (moves == 30) { await sleep(400); }
  }

  redborder();

}

}

let solvenow = document.getElementById("selp2");
solvenow.style.display = "block";


gameBoard.addEventListener('click', (event) => {
  const target = event.target;

  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === target) {
        x = rowIndex;
        y = columnIndex;
      }
    });
  });

  let emptyX, emptyY;

  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.innerText === '') {
        emptyX = rowIndex;
        emptyY = columnIndex;
      }
    });
  });

  if (
    (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
    (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))
  ) {
    moveElement(gameState[x][y], gameState[emptyX][emptyY]);

    const temp = gameState[x][y];
    gameState[x][y] = gameState[emptyX][emptyY];
    gameState[emptyX][emptyY] = temp;
  }

let k = 0;

redborder();

  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (gameState[i][j] !== gameState2[i][j]) { k++ } ;
    }
  }

  if (k == 0) {
      wingame.style.display = "block";
      
      async function winp1() {
        cp.style.display = "block";
        await sleep(100);
        cp.style.transform = "translateY(0px)";
        cp.style.fontSize = "120px";
        await sleep(700);
        cp.style.fontSize = "90px";
      }

      async function winp2() {
        restartp.style.display = "block";
        await sleep(100);
        restartp.style.transform = "translateY(0px)";
      }
      winp1();
      winp2();
  }

  document.addEventListener("keydown", event => {
    if (event.keyCode === 115) {
      wingame.style.display = "none";
      status.style.display = "inline-block";
      playbutton.style.display = "inline-block";
      selectp.style.display = "block";
      solvenow.style.display = "none";

    }
  });

});

} );