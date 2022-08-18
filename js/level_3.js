
let healthElement = document.getElementById("health")
let submitButton = document.getElementById("submitButton");
const userInput = document.getElementById("answer");
submitButton.addEventListener("click", form);

num1 = randNumGenerator()
num2 = randNumGenerator()
let answer = num1 + num2;
let score = 0;
let health = 5;

function form(event) {
    event.preventDefault();
    if (userInput.value == ""){
        alert("Invalid Reponse")
    }
    
    else {
    if (userInput.value == answer) {    
        console.log(answer)
        score++;
        document.getElementById("incre").innerHTML = "Score: "+ score;
        
    } else {
        console.log("Wrong!");
        console.log(answer)
        health --;
        healthElement.innerHTML = "Health: " + health;
    }
    }
    if (score >= 10){
        console.log("You win")
        window.location.href = "/levels/you_win.html"
        }
    if (health <= 0){
            console.log("Lol u lost, get GUDDER")
            window.location.href = "/levels/lose.html"
            }
    document.getElementById("answer").value = "";
    
    document.getElementById("firstnum").innerHTML = num1 + " + " + num2 + " =";
    answer = num1+num2
    num1 = randNumGenerator();
    
    num2 = randNumGenerator();
    
}


function randNumGenerator() {

    let randNumber = Math.random() * 101;
    // return 0 - (num1-1)
    let wholeNum = Math.floor(randNumber);
    return wholeNum;
}
document.getElementById("firstnum").innerHTML = num1 + " + " + num2 + " =";
num1 = randNumGenerator();

num2 = randNumGenerator();

document.getElementById("incre").innerHTML = "Score: " + score;
document.getElementById("health").innerHTML = "Health: " + health;



