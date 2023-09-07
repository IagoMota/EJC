var counter = 1;
const allOptions = document.querySelectorAll(".next");
const previousBtn = document.getElementById("previous");

const disciplines = {
  
};


const changeToNext = (e) => {
  if (counter != 7) {
    disciplines[e.target.firstElementChild.innerHTML]++
    const parent = e.target.parentNode;    
    const nextQuestion = document.getElementById(`question-${++counter}`);


    parent.classList.remove("showing");
    parent.classList.add("not-showing");

    nextQuestion.classList.remove("not-showing");
    nextQuestion.classList.add("showing");
    console.log(disciplines)
  }
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

for (option of allOptions) {
  option.onclick = changeToNext;
}

previousBtn.onclick = changeToPrevious;
