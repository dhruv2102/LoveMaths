document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") == "submit"){
               checkAnswer();
            }
            else{
                let gameType = this.getAttribute("data-type")
                runGame(gameType)
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            checkAnswer();
        }
    })

    runGame("addition")
})

function runGame(gameType){
    // Generate random numbers

    document.getElementById("answer-box").value = ""
    document.getElementById("answer-box").focus();    

    let num1 = Math.ceil(Math.random()*25);
    let num2 = Math.ceil(Math.random()*25);


    if (gameType === "addition"){
        displayAddition(num1,num2);
    }
    else if(gameType === "subtract"){
        displaySubtraction(num1,num2);
    }
    else if(gameType === "multiply"){
        displayMultiply(num1,num2);
    }
    else if(gameType === "division"){
        displayDivide(num1,num2);
    }
    else{
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, abort!!`
    }
}

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateAnswer();
    // calculatedAnswer[0] = Math.round(calculatedAnswer[0])
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect){
        alert("Hey!! You got it right! :D")
        incrementScore()
    }
    else{
        alert(`Awww!! you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer()
    }
    
    runGame(calculatedAnswer[1])


}

function calculateAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === '+'){
        return [operand1 + operand2, "addition"]
    }
    else if(operator === '-'){
        return [operand1 - operand2, "subtract"]
    }
    else if(operator === 'x'){
        return [operand1 * operand2, "multiply"]
    }
    else if(operator === '/'){
        return [operand1 / operand2, "division"]
    }
    else{
        alert(`Unimplemented function ${operator}`)
        throw `Unimplemented function ${operator}`
    }
}

function incrementScore(){
    (document.getElementById("score").innerText)++;

}

function incrementWrongAnswer(){
    (document.getElementById("incorrect").innerText)++;
}

function displayAddition(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtraction(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiply(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivide(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 * operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '/';
}

    

