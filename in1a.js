let message = ""; //global variabel
// Uppgift 1a1:

function buttonAction1() {
  let time = new Date();
  alert(
    "hello friend " +
      "current time is " +
      time.getHours() +
      ": " +
      time.getMinutes()
  );
}
// Uppgift 1a2 här:
function buttonAction2() {
  message = prompt("write a word here");
  alert(message.toUpperCase());
} // Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  let result = document.getElementById("result3");
  result.innerText = message;
}
function buttonAction4() {
  let start = new Date();

  function timer() {
    let stop = new Date();
    let result = stop - start;
    console.log(result);
    alert("tiden blev tagen på: " + result / 1000 + " sekunder, Bra jobbat!");
    document.getElementsByName("button4")[0].onclick = buttonAction4;
  }
  document.getElementsByName("button4")[0].onclick = timer;
}

function buttonAction5() {
  let number1 = document.querySelector("#number1").value;
  let number2 = document.querySelector("#number2").value;
  let result = document.querySelector("#result5");

  if (!number1 && !number2) {
    result.innerText = "ERROR!please fill out a number between 1 - 1000";
  } else {
    if (!isNaN(number1, number2)) {
      if (number1 > 0 && number1 < 1000 && number2 > 0 && number2 < 1000) {
        let sum = number1 * number2;
        result.innerText = sum;
      } else {
        result.innerText = "ERROR!please fill out a number between 1 - 1000";
      }
    }
  }
}

function buttonAction6() {
  let textInput = document.getElementById("textInput").value;
  let wordCount = document.getElementById("wordCount");
  let devideArray = textInput.split(" ");
  const result = devideArray.filter((e) => e);
  wordCount.innerText = result.length;
}

// Uppgift 1a7 här:
function buttonAction7() {
  let message = prompt("say something");
  let newString = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < message.length; j++) {
      newString += message[j];
    }
    newString += ", ";
  }
  alert(newString);
}

// Uppgift 1a8 här:
function buttonAction8() {
  let btn = document.getElementById("hiddenButton").style;
  if (btn.visibility !== "visible") {
    btn.visibility = "visible";
  } else {
    btn.visibility = "hidden";
  }
} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  let text = document.getElementById("arrayInput").value;
  let devideArray = text.split(",");
  const arr = devideArray.filter((e) => e);
  let con = document.getElementById("containerTable");
  let table = document.createElement("table");
  con.appendChild(table);
  for (let i = 0; i < arr.length / 7; i++) {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    for (let j = 0; j < 7; j++) {
      let val = i * 7 + j;
      let newArr = arr[val];
      if (newArr !== undefined) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = newArr + "|";
      }
    }
  }

  //Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

  /*
   * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
   * för alla knappar med de funktioner som ni har till uppgift att göra
   * NI SKALL INTE RÖRA NÅGOT HÄR:
   */
}

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;
  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
}
/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
