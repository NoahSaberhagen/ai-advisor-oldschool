const userInputForm = document.querySelector(".user-input-form")
const userQuestionHTMLElement = document.querySelector(".user-question");
const apiResponseField = document.querySelector(".api-response-field")

const main = async (e) => {
    e.preventDefault();
    const userQuestionString = userQuestionHTMLElement.value;
    console.log(userQuestionString);
    const response = await fetch(`https://us-east4-glassy-signal-354012.cloudfunctions.net/get_answer/?message=${userQuestionString}`, {mode: 'cors'})
    apiResponseField.innerHTML(response.json());
};

userInputForm.addEventListener("click", main);