// Get the value from the buttons and put it the input field
let answerInput = document.getElementById("answer");
let fillValue = (id) => {
  const userInput = document.getElementById(id).innerHTML;
  answerInput.value += userInput;
};

// act as backspace
function removeLastItem() {
  let textContains = document.getElementById("answer").value;
  answerInput.value = textContains.slice(0, -1);
}

// shuffle the string
function shuffleLetters(s) {
    let arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
  }

// const correctAnswer = 'TWEETER';

function populateButtons(answer = "TWEETER") {
  let textButton = document.getElementById("text-buttons");
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (answer.length == 16){
      console.log("okay report");
    }else{
        // need to extract letters, add with random letters to make it 16
        for(let i=answer.length; i<16; i++){
            answer += alphabets[i];
        }
    }

  const randomLetters = shuffleLetters(answer);
  for (let letter in randomLetters) {
    textButton.innerHTML += `<button onclick="fillValue(id='${randomLetters[letter]}')">${randomLetters[letter]}</button>`;
  }
}
// Button function call
populateButtons();

// compare the answer
function checkAnswer(){
    let submitTextChange = document.getElementById("submit");
    // console.log(submitTextChange);
    if(answerInput.value=="TWEETER"){
        submitTextChange.innerText = "MATCHED";
        submitTextChange.style.backgroundColor = "#3CBC8D";
    }else{
        submitTextChange.innerText = "TRY AGAIN";
        submitTextChange.style.backgroundColor = "#b44141";
        submitTextChange.style.color = "white";
    }
}