function calculate(operation) {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let result = "";

    if (isNaN(n1) || isNaN(n2)) {
        result = "⚠️ Please enter valid numbers.";
    } else {
        switch (operation) {
            case '+': result = n1 + n2; break;
            case '-': result = n1 - n2; break;
            case '*': result = n1 * n2; break;
            case '/': 
                result = n2 !== 0 ? (n1 / n2) : "❌ Cannot divide by 0";
                break;
        }
    }
    document.getElementById('result').innerText = result;
}

function clearResult() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').innerText = "";
}
