
document.getElementById('inptemp').addEventListener('input', convertTemperature);
document.querySelectorAll('.radio-group input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', convertTemperature);
});


function convertTemperature() {
    const inptemp = parseFloat(document.getElementById('inptemp').value);
    if (isNaN(inptemp)) {
        document.getElementById('outtemp').value = 'Invalid input';
        return;
    }

    const inputUnit = document.querySelector('input[name="inptempunit"]:checked').value;
    const outputUnit = document.querySelector('input[name="outtempunit"]:checked').value;

    let outputTemp;
    if (inputUnit === 'celsius') {
        if (outputUnit === 'celsius') {
            outputTemp = inptemp;
        } else if (outputUnit === 'fahrenheit') {
            outputTemp = (inptemp * 9 / 5) + 32;
        } else if (outputUnit === 'kelvin') {
            outputTemp = inptemp + 273.15;
        }
    } else if (inputUnit === 'fahrenheit') {
        if (outputUnit === 'celsius') {
            outputTemp = (inptemp - 32) * 5 / 9;
        } else if (outputUnit === 'fahrenheit') {
            outputTemp = inptemp;
        } else if (outputUnit === 'kelvin') {
            outputTemp = (inptemp - 32) * 5 / 9 + 273.15;
        }
    } else if (inputUnit === 'kelvin') {
        if (outputUnit === 'celsius') {
            outputTemp = inptemp - 273.15;
        } else if (outputUnit === 'fahrenheit') {
            outputTemp = (inptemp - 273.15) * 9 / 5 + 32;
        } else if (outputUnit === 'kelvin') {
            outputTemp = inptemp;
        }
    }

    document.getElementById('outtemp').value = outputTemp.toFixed(2); // Adjust decimal places as needed
}

convertTemperature();
