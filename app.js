const gameSection = document.querySelector("#game-section");
const questionArea = document.getElementById("questionArea");
let titleGame = document.getElementById("title-game");

var questions = {
  q1: "Hay un muchacho y una muchacha en la clase de matemáticas.",
  q2: "El maestro dice que los estudiantes necesitan un lápiz.",
  q3: "Camila no tiene papel y Mateo tiene papel.",
  q4: "Camila no tiene un libro de matemáticas y necesita un libro.",
  q5:
    "Mateo no tiene un lápiz, no tiene una hoja de papel, y no tiene un libro.",
  q6: "El maestro está furioso.",
};
const goodResponses = ["q1", "q2", "q3", "q4", "q5", "q6"];
var reponses = [];

//display game
initGame();

function initGame() {
  titleGame.innerText = "Normal questions";
  displayGame(questions);
  satrtShuffleGame();
}

gameSection.addEventListener("click", (e) => {
  let check = e.target;
  if (check.getAttribute("class") == "checkbox checkbox-question-item") {
    if (check.checked && !reponses.includes(check.id)) {
      reponses.push(check.id);
    } else {
      reponses = reponses.filter((ele) => {
        return ele !== check.id;
      });
    }
    console.log(reponses);

    var is_same =
      goodResponses.length == reponses.length &&
      goodResponses.every(function (element, index) {
        return element === reponses[index];
      });
    if (is_same) {
      alert("is_same");
    }
  }
});

function displayGame(questions) {
  const answers = [];
  Object.keys(questions).map((ele) => {
    answers.push(`<div class="p-2 w-full text-sm"> 
                    <span class="p-1 px-2 mr-3 rounded text-white bg-blue-600 font-bold">${ele} </span>
                        <input type="checkbox" class="checkbox checkbox-question-item" id="${ele}">
                        <label>${questions[ele]}</label>
                    </div>`);
  });

  questionArea.innerHTML = answers.join("");
}
function satrtShuffleGame() {
  shuffleQuestions(questions);
}

function shuffleQuestions(questions) {
  let mkeys = Object.keys(questions);
  let infos = {};
  shuffle(mkeys).map((val) => {
    infos[val] = questions[val];
  });

  displayGame(infos);
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

///nex question
function nextQuestion(params) {}
