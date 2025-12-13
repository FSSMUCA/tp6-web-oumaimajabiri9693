const form = document.getElementById("calculator-form");
const errorMessage = document.getElementById("error-message");
const resultDisplay = document.getElementById("result-display");
const historyList = document.getElementById("history-list");

let history = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const numberA = parseFloat(document.getElementById("numberA").value);
    const numberB = parseFloat(document.getElementById("numberB").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(numberA) || isNaN(numberB)) {
        errorMessage.textContent = "Veuillez entrer des nombres valides.";
        return;
    }

    if (operation === "/" && numberB === 0) {
        errorMessage.textContent = "Division par zéro impossible.";
        return;
    }

    errorMessage.textContent = "";

    let result;
    switch (operation) {
        case "+":
            result = numberA + numberB;
            break;
        case "-":
            result = numberA - numberB;
            break;
        case "*":
            result = numberA * numberB;
            break;
        case "/":
            result = numberA / numberB;
            break;
    }

    resultDisplay.textContent = `Résultat : ${result}`;

    const operationText = `${numberA} ${operation} ${numberB} = ${result}`;
    history.push(operationText);

    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = ""; 
    history.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}