function questionElements(question) {
  var input1 = document.createElement("INPUT");
  input1.id = "answer1";
  input1.style.width = "40px";

  var quest = document.createElement("P");
  quest.style.marginLeft = "20%";
  quest.style.marginRight = "20%";
  quest.style.color = "white";
  quest.style.fontSize = "30px";
  quest.innerHTML = question;

  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Submit";
  btn.style.marginTop = "10px";

  var line = document.createElement("HR");
  line.style.width = "40px";

  var correct = document.createElement("IMG");
  correct.src = "images/correct.gif";
  correct.style.width = "50%";
  correct.style.height = "50%";

  var wrong = document.createElement("IMG");
  wrong.src = "images/wrong.gif";
  wrong.style.width = "50%";
  wrong.style.height = "50%";

  document.getElementById("questionDiv").style.backgroundImage =
    "url('images/panel1.jpg')";
  document.getElementById("questionDiv").style.backgroundRepeat = "no-repeat";
  document.getElementById("questionDiv").style.backgroundSize = "100%";
  document.getElementById("questionDiv").append(quest);
  document.getElementById("questionDiv").append(document.createElement("BR"));
}

function checkAnswer(checkValue, isEnd) {
  document.getElementById("questionDiv").append(document.createElement("BR"));
  if (input1.value == checkValue) {
    btn.disabled = true;
    document.getElementById("questionDiv").append(correct);

    setTimeout(function () {
      isStarted = true;
      if (!isEnd) start = 1;
      score += 2;
      document.getElementById("questionDiv").innerHTML = "";
      document.getElementById("questionDiv").style.backgroundImage = "";
      requestAnimationFrame(draw);
    }, 1000);
  } else {
    document.getElementById("questionDiv").append(wrong);
  }
}

function quest1() {
  questionElements(
    "If there are total 10 pillar in this game and you have crossed 4 now, then how much part of the game have you completed in fraction?"
  );
  var input2 = document.createElement("INPUT");
  input2.id = "answer2";
  input2.style.width = "30px";

  document.getElementById("questionDiv").append(input1);
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(line);
  // document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(input2);
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(btn);

  btn.onclick = function () {
    if (input2.value == 10) {
      checkAnswer(4, false);
    }
  };
}
function quest2() {
  questionElements(
    "What number should we multiply to your fraction in last question to convert it into percentage?"
  );

  var div = document.createElement("DIV");
  div.classList.add("frac");
  div.id = "frac";
  var span = document.createElement("SPAN");
  span.innerHTML = "4";
  var span1 = document.createElement("SPAN");
  span1.classList.add("symbol");
  span1.innerHTML = "/";
  var span2 = document.createElement("SPAN");
  span2.classList.add("bottom");
  span2.innerHTML = "10";
  var span3 = document.createElement("SPAN");
  span3.style.marginLeft = "10px";
  span3.style.marginRight = "10px";
  span3.innerHTML = "X";

  document.getElementById("questionDiv").append(div);
  document.getElementById("frac").append(span);
  document.getElementById("frac").append(span1);
  document.getElementById("frac").append(span2);
  document.getElementById("questionDiv").append(span3);
  document.getElementById("questionDiv").append(input1);
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(btn);

  btn.onclick = checkAnswer(100, false);
}
function quest3() {
  questionElements(
    "What is the percentage of game you completed in first question?"
  );

  var div = document.createElement("DIV");
  div.classList.add("frac");
  div.id = "frac";
  var span = document.createElement("SPAN");
  span.innerHTML = "4";
  var span1 = document.createElement("SPAN");
  span1.classList.add("symbol");
  span1.innerHTML = "/";
  var span2 = document.createElement("SPAN");
  span2.classList.add("bottom");
  span2.innerHTML = "10";
  var span3 = document.createElement("SPAN");
  span3.style.marginLeft = "10px";
  span3.style.marginRight = "10px";
  span3.innerHTML = "X";
  var span4 = document.createElement("SPAN");
  span4.innerHTML = "100";
  var span5 = document.createElement("SPAN");
  span5.innerHTML = " = ";
  var span6 = document.createElement("SPAN");
  span6.innerHTML = " % ";

  document.getElementById("questionDiv").append(div);
  document.getElementById("frac").append(span);
  document.getElementById("frac").append(span1);
  document.getElementById("frac").append(span2);
  document.getElementById("questionDiv").append(span3);
  document.getElementById("questionDiv").append(span4);
  document.getElementById("questionDiv").append(span5);
  document.getElementById("questionDiv").append(input1);
  document.getElementById("questionDiv").append(span6);
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(btn);

  btn.onclick = checkAnswer(40, true);
}
