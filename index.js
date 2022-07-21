const userInputSubmitButtonHTMLElement = document.querySelector(".submit-input")
const userQuestionHTMLElement = document.querySelector(".user-question");
const returnedAnswerHTMLElement = document.querySelector(".api-response-field")

const main = (e) => {
    e.preventDefault();
    const userQuestionString = userQuestionHTMLElement.value;
    
    console.log(userQuestionString);
    
    fetch(`https://us-east4-glassy-signal-354012.cloudfunctions.net/get_answer/?message=${userQuestionString}`)
        .then(response => response.json())
        .then(data => returnedAnswerHTMLElement.innerHTML = data.answer + "<br><br>" + data.ref1);

    
};

userInputSubmitButtonHTMLElement.addEventListener("click", main);