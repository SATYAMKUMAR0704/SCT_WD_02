let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        return; // Prevents consecutive operators
    }
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard Input Handling
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (!isNaN(key) || key === ".") {
        appendNumber(key);
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        appendOperator(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});