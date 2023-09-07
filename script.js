var counter = 1;
const allOptions = document.querySelectorAll(".next");
const previousBtn = document.getElementById("previous");


const changeToNext = (e) => {
  const currentQuestion = e.target.parentNode;
  if (counter < 8) {
    currentQuestion.classList.remove("showing");
    currentQuestion.classList.add("not-showing");

    const nextQuestion = (function () {
      if (counter < 8) return document.getElementById(`question-${++counter}`);
    })();
    nextQuestion.classList.remove("not-showing");
    nextQuestion.classList.add("showing");
  }
  answers[currentQuestion.id] = e.target.firstElementChild.innerHTML;
  console.log(answers);
};
const changeToPrevious = (e) => {
  if (counter >= 2) {
    const currentQuestion = document.getElementById(`question-${counter--}`);
    const previousQuestion = document.getElementById(`question-${counter}`);

    console.log(previousQuestion);
    currentQuestion.classList.remove("showing");
    currentQuestion.classList.add("not-showing");

    previousQuestion.classList.remove("not-showing");
    previousQuestion.classList.add("showing");
  }
};

const answers = {
  "question-1": "",
  "question-2": "",
  "question-3": "",
  "question-4": "",
  "question-5": "",
  "question-6": "",
  "question-7": "",
  "question-8": "",
};
for (option of allOptions) {
  option.onclick = changeToNext;
}

previousBtn.onclick = changeToPrevious;
