function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('bmiValue').innerText = "⚠️ Invalid input";
        document.getElementById('bmiStatus').innerText = "";
        return;
    }

    // Apply BMI formula
    let bmi = weight / (height * height);
    document.getElementById('bmiValue').innerText = bmi.toFixed(2);

    let status;
    if (bmi < 18) {
        status = "Underweight";
        document.getElementById('bmiStatus').style.color = "#007bff";
    } else if (bmi >= 18 && bmi < 25) {
        status = "Normal";
        document.getElementById('bmiStatus').style.color = "#28a745";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
        document.getElementById('bmiStatus').style.color = "#ffc107";
    } else {
        status = "Obese";
        document.getElementById('bmiStatus').style.color = "#dc3545";
    }

    document.getElementById('bmiStatus').innerText = status;
}

function clearBMI() {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('bmiValue').innerText = "";
    document.getElementById('bmiStatus').innerText = "";
}
