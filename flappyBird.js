var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
/*onmousemove = function (evt) {
  console.log(evt.clientX, evt.clientY);
};*/

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var startbtn = new Image();
var gameOver = new Image();
var retry = new Image();
var panel = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";
startbtn.src = "images/start.png";
startbtn.enabled = true;
gameOver.src = "images/over.png";
gameOver.enabled = false;
retry.src = "images/retry.jpg";
retry.enabled = false;
panel.src = "images/panel.jpg";
panel.enabled = false;
// some variables
var isStarted = true;
var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

var start = 0;
var restart = 0;

const startBtn = {
  x: 100,
  y: 135,
  w: 100,
  h: 30,
};

// audio files

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// on key down

//document.addEventListener("keydown",moveUp);
document.body.addEventListener("keydown", function (event) {
  const key = event.key;
  switch (key) {
    case "ArrowUp":
      moveUp();
      //document.body.addEventListener("keypress", moveUp);
      break;
    case "ArrowDown":
      moveDown();
      //document.body.addEventListener("keypress", moveDown);
      break;
  }
});
function moveUp() {
  bY -= 25;
  fly.play();
}
function moveDown() {
  bY += 25;
  fly.play();
}

//Clicking start button
cvs.addEventListener("click", function (evt) {
  //let rect = cvs.getBoundingClientRect();
  let clickX = evt.clientX;
  let clickY = evt.clientY;

  // CHECK IF WE CLICK ON THE START BUTTON
  if (
    clickX >= startBtn.x + 20 &&
    clickX <= startBtn.x + startBtn.w + 20 &&
    clickY >= startBtn.y + 30 &&
    clickY <= startBtn.y + startBtn.h + 30
  ) {
    startbtn.enabled = false;
    if (restart == 1) location.reload(); // reload the page
    start = 1;
  }
});

// pipe coordinates

var pipe = [];

pipe[0] = {
  x: 280,
  y: 0,
};

// draw images
function draw() {
  ctx.drawImage(bg, 0, 0);

  for (var i = 0; i < pipe.length; i++) {
    constant = pipeNorth.height + gap;
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
    if (start == 1) {
      pipe[i].x--;
    }
    if (pipe[i].x == 125) {
      pipe.push({
        x: 280,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height,
      });
    }

    // detect collision

    if (
      (bX + bird.width >= pipe[i].x &&
        bX <= pipe[i].x + pipeNorth.width &&
        (bY <= pipe[i].y + pipeNorth.height ||
          bY + bird.height >= pipe[i].y + constant)) ||
      bY + bird.height >= cvs.height - fg.height
    ) {
      gameOver.enabled = true;
      retry.enabled = true;
      start = 0;
      restart = 1;
    }

    if (pipe[i].x == 5 && start == 1) {
      score++;
      scor.play();
    }
  }
  if (score % 3 == 0 && score != 0) {
    isStarted = false;

    start = 0;
    //panel.enabled = true;
    var answer = 5;
    var input = document.createElement("INPUT");
    var quest = document.createElement("P");
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Submit";
    quest.innerHTML = "How many flowers do you <br>see below?</p>";
    quest.style.color = "white";
    quest.style.fontSize = "40px";
    quest.style.fontFamily = "gwibbleregular";
    document.getElementById("questionDiv").style.backgroundImage =
      "url('images/panel1.jpg')";
    document.getElementById("questionDiv").append(quest);
    for (i = 0; i < answer; i++) {
      var image = document.createElement("IMG");
      image.src = "images/flower.jpg";
      image.style.margin = "10px 20px";
      document.getElementById("questionDiv").append(image);
    }
    document.getElementById("questionDiv").append(document.createElement("BR"));
    document.getElementById("questionDiv").append(input);
    document.getElementById("questionDiv").append(document.createElement("BR"));
    document.getElementById("questionDiv").append(btn);
    btn.onclick = function () {
      if (input.value == answer) {
        isStarted = true;
        start = 1;
        score += 5;
        document.getElementById("questionDiv").innerHTML = "";
        document.getElementById("questionDiv").style.backgroundImage = "";
        requestAnimationFrame(draw);
      }
    };
  }
  ctx.drawImage(fg, 0, cvs.height - fg.height);

  ctx.drawImage(bird, bX, bY);

  if (startbtn.enabled) ctx.drawImage(startbtn, startBtn.x, startBtn.y);
  if (retry.enabled) ctx.drawImage(retry, startBtn.x, startBtn.y);
  if (gameOver.enabled) ctx.drawImage(gameOver, 50, 200);
  if (panel.enabled) ctx.drawImage(panel, 288, 0);
  //bY += gravity;
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : " + score, 10, cvs.height - 20);

  if (isStarted) requestAnimationFrame(draw);
}

draw();
