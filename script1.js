// Declaring an empty array called 'ans' and setting the index to 0
const ans = [];
index=0;

// Function that runs when the user submits their name
function required(){
    // Getting the necessary HTML elements
    let welcome = document.getElementById('welcome');
    let question = document.getElementById('question');
    let container = document.getElementById('container');

    // Getting the user's inputted name from the input element
    var inputElement = document.getElementById("myInput");
    var inputValue = inputElement.value;
    var storedValue = inputValue;
    console.log(storedValue);

    // Function to start the quiz once the user has entered their name
    function start(){
        // Hiding the welcome screen and showing the quiz screen and first question
        welcome.style.display = "none";
        container.style.display = "flex";
        question.style.display = "flex";
        loadQuestion();
        // Adding an event listener to each option input for when they are clicked
        const optioninput = document.getElementsByName('option');
        optioninput.forEach(option => {
            option.addEventListener('click', () => {
                ans[index]=option.value;
            });
        });
    }

    // Checking if the user has entered a name or not
    if (storedValue == ""){
        alert("Please enter a Name");
    }
    else {
        // Starting the quiz if the user has entered a name
        start();
        // Displaying a welcome message with the user's name
        let user = document.getElementById("user");
        let username = document.getElementById("username");
        user.style.display = "block";
        username.textContent = "HELLO " + storedValue;
    }
}

// Array of objects containing the quiz questions
const questions = [{q: "How satisfied are you with our products?"},
                {q: "How fair are the prices compared to similar retailers?"},
                {q: "How satisfied are you with the value for money of your purchase?"},
                {q: "On a scale of 1-10 how would you recommend us to your friends and family?"},
                {q: "What could we do to improve our service?"}];

// Getting the necessary HTML elements
let questionBox = document.getElementById("questionBox");
let optioninput = document.getElementsByName('option');

// Function to load each question and its options onto the screen
function loadQuestion() {
    // Getting the necessary HTML elements
    let optionfor4 = document.getElementById('optionfor4');
    let optionfor5 = document.getElementById('optionfor5');

    // Checking if the current question is the fourth question
    if (3 === index) {
        // Hiding the option inputs for the third question and showing the option inputs for the fourth question
        let container = document.getElementById('container');
        let optionfor1 = document.getElementById('optionfor1');
        optionfor1.style.display = "none";
        optionfor4.style.display = "flex";
        container.style.width = "55rem";
    }

    // Checking if the current question is the fifth question
    if (5 === index) {
        // Ending the quiz if the user has answered all five questions
        return quizEnd();
    }
    
    // Getting the current question object from the questions array
    const data = questions[index];
    // Setting the question text to the current question
    questionBox.innerHTML =  data.q;

    // Checking if the current question is the fourth question
    if (4 === index) {
        // Hiding the option inputs for the fourth question and showing the option inputs for the fifth question
        optionfor5.style.display = "flex";
        optionfor4.style.display = "none";
    }
}

const reset = () => {
    const optionInputs = document.querySelectorAll('input[type=radio][name=option]');
    optionInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

//This function is responsible for handling the "Next" button click event.
function next(){
    const optioninput = document.getElementsByName('option');
    optioninput.forEach(option => {
        option.addEventListener('click', () => {
            ans[index]=option.value;
            console.log("ans["+index+"]="+ans[index]);
        });
      });
    
    index++;
    loadQuestion();
    reset();
}
//This function is responsible for handling the "Previous" button click event.
function prev(){

    let optionfor1 = document.getElementById('optionfor1');
    let optionfor4 = document.getElementById('optionfor4');
    let optionfor5 = document.getElementById('optionfor5');
    
    if(index === 3){
        index--;
        optionfor1.style.display = "flex";
        optionfor4.style.display = "none";
        container.style.width = "35rem";
        loadQuestion();
    }else if(index === 4){ 
        index--;
        optionfor4.style.display = "flex";
        optionfor5.style.display = "none";
        loadQuestion();
    }else if(index!=0){  
        index--;
        loadQuestion();
    }
    
}

//This function is responsible for handling the final message on the screen.
function quizEnd(){

    container.style.display = "none";
    question.style.display = "none";

    var finalmessage = document.getElementById("final");
    finalmessage.style.display='inline';

    const output = document.getElementById('output');

    const ul = document.createElement('ul');
    i=0;
    ans.forEach(item => {
        const li = document.createElement('li');
        li.textContent = questions[i].q + " - " + item.toString();
        li.style.backgroundColor = "white";
        li.style.fontWeight = "700";
        li.style.fontSize = "25px";
        li.style.borderRadius = "10px";
        ul.appendChild(li);
        i++;
    });

    output.appendChild(ul);
}


