function quest1() {
  //var answer = 5;
  var input1 = document.createElement("INPUT");
  input1.id = "answer1";
  input1.style.width = "30px";
  var input2 = document.createElement("INPUT");
  input2.id = "answer2";
  input2.style.width = "30px";
  var quest = document.createElement("P");
  quest.style.marginLeft = "140px";
  quest.style.marginRight = "130px";
  var btn = document.createElement("BUTTON");
  var line = document.createElement("HR");
  line.style.width = "40px";
  btn.innerHTML = "Submit";
  btn.style.marginTop = "10px";
  quest.innerHTML =
    "If there are total 10 pillar in this game and you have crossed 4 now, then how much part of the game have you completed in fraction?";
  quest.style.color = "white";
  quest.style.fontSize = "30px";
  quest.style.fontFamily = "gwibbleregular";
  document.getElementById("questionDiv").style.backgroundImage =
    "url('images/panel1.jpg')";
  document.getElementById("questionDiv").append(quest);
  /*for (i = 0; i < answer; i++) {
    var image = document.createElement("IMG");
    image.src = "images/flower.jpg";
    image.style.margin = "10px 20px";
    document.getElementById("questionDiv").append(image);
  }*/
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(input1);
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(line);
  // document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(input2);
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(btn);
  btn.onclick = function () {
    if (input1.value == 4 && input2.value == 10) {
      btn.disabled = true;
      document.getElementById("answer1").style.backgroundColor = "green";
      document.getElementById("answer2").style.backgroundColor = "green";
      setTimeout(function () {
        isStarted = true;
        start = 1;
        score += 2;
        document.getElementById("questionDiv").innerHTML = "";
        document.getElementById("questionDiv").style.backgroundImage = "";
        requestAnimationFrame(draw);
      }, 1000);
    } else {
      document.getElementById("answer1").style.backgroundColor = "red";
      document.getElementById("answer2").style.backgroundColor = "red";
    }
  };
}
function quest2() {
  //var answer = 5;
  var input1 = document.createElement("INPUT");
  input1.id = "answer1";
  input1.style.width = "40px";

  var quest = document.createElement("P");
  quest.style.marginLeft = "140px";
  quest.style.marginRight = "130px";
  var btn = document.createElement("BUTTON");
  var line = document.createElement("HR");
  line.style.width = "40px";
  btn.innerHTML = "Submit";
  btn.style.marginTop = "10px";
  quest.innerHTML =
    "What number should we multiply to your fraction in last question to convert it into percentage?";
  quest.style.color = "white";
  quest.style.fontSize = "30px";
  quest.style.fontFamily = "gwibbleregular";
  document.getElementById("questionDiv").style.backgroundImage =
    "url('images/panel1.jpg')";
  document.getElementById("questionDiv").append(quest);
  /*for (i = 0; i < answer; i++) {
      var image = document.createElement("IMG");
      image.src = "images/flower.jpg";
      image.style.margin = "10px 20px";
      document.getElementById("questionDiv").append(image);
    }*/
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
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(div);
  document.getElementById("frac").append(span);
  document.getElementById("frac").append(span1);
  document.getElementById("frac").append(span2);
  document.getElementById("questionDiv").append(span3);
  document.getElementById("questionDiv").append(input1);
  document.getElementById("questionDiv").append(document.createElement("BR"));
  document.getElementById("questionDiv").append(btn);
  btn.onclick = function () {
    if (input1.value == 100) {
      btn.disabled = true;
      document.getElementById("answer1").style.backgroundColor = "green";

      setTimeout(function () {
        isStarted = true;
        start = 1;
        score += 2;
        document.getElementById("questionDiv").innerHTML = "";
        document.getElementById("questionDiv").style.backgroundImage = "";
        requestAnimationFrame(draw);
      }, 1000);
    } else {
      document.getElementById("answer1").style.backgroundColor = "red";
    }
  };
}
function quest3() {
  //var answer = 5;
  var input1 = document.createElement("INPUT");
  input1.id = "answer1";
  input1.style.width = "40px";

  var quest = document.createElement("P");
  quest.style.marginLeft = "140px";
  quest.style.marginRight = "130px";
  var btn = document.createElement("BUTTON");
  var line = document.createElement("HR");
  line.style.width = "40px";
  btn.innerHTML = "Submit";
  btn.style.marginTop = "10px";
  quest.innerHTML =
    "What is the percentage of game you completed in first question?";
  quest.style.color = "white";
  quest.style.fontSize = "30px";
  quest.style.fontFamily = "gwibbleregular";
  document.getElementById("questionDiv").style.backgroundImage =
    "url('images/panel1.jpg')";
  document.getElementById("questionDiv").append(quest);
  /*for (i = 0; i < answer; i++) {
        var image = document.createElement("IMG");
        image.src = "images/flower.jpg";
        image.style.margin = "10px 20px";
        document.getElementById("questionDiv").append(image);
      }*/
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
  document.getElementById("questionDiv").append(document.createElement("BR"));
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
  btn.onclick = function () {
    if (input1.value == 40) {
      btn.disabled = true;
      document.getElementById("answer1").style.backgroundColor = "green";

      setTimeout(function () {
        isStarted = true;
        //start = 1;
        score += 2;
        document.getElementById("questionDiv").innerHTML =
          "<h1> You have completed 100% of the game!!</h1>";
        document.getElementById("questionDiv").style.backgroundImage = "";
        //alert("You won the game!!");
        requestAnimationFrame(draw);
        win.enabled = true;
      }, 1000);
    } else {
      document.getElementById("answer1").style.backgroundColor = "red";
    }
  };
}
