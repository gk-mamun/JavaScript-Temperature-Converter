// Listen for submit
document.getElementById('temp-form').addEventListener('submit', function(e){
    // Hide result
    document.getElementById('results').style.display = 'none';

    // Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(tempCalculation, 2000);

    e.preventDefault();
});


// Temperature Calculation
function tempCalculation() {
    console.log('Converting...');
    // UI variables
    const tempAmount = document.querySelector('#temp-amount');
    const tempType = document.querySelector('#temp-type');
    const newTemp1 = document.querySelector('#new-temp');
    const newTempType1 = document.querySelector('#new-temp-type');
    const newTemp2 = document.querySelector('#new-temp-2');
    const newTempType2 = document.querySelector('#new-temp-type-2');


    if(tempType.value == '1') {
        newTemp1.value = tempAmount.value * (9 / 5) + 32;
        newTempType1.value = 'Fahrenheit';
        newTemp2.value = Number(tempAmount.value) + 273.15;
        newTempType2.value = 'Kelvin';

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide the loader
        document.getElementById('loading').style.display = 'none';

    } else if(tempType.value == '2') {
        newTemp1.value = (tempAmount.value - 32) * (5 / 9);
        newTempType1.value = 'Celcius';
        newTemp2.value = (Number(tempAmount.value) + 459.67) * (5 / 9);
        newTempType2.value = 'Kelvin';

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide the loader
        document.getElementById('loading').style.display = 'none';

    } else if(tempType.value == '3'){
        newTemp1.value = (tempAmount.value - 273.15);
        newTempType1.value = 'Celcius';
        newTemp2.value = tempAmount.value * (9 /5) - 459.67;
        newTempType2.value = 'Fahrenheit';

        // Show results
        document.getElementById('results').style.display = 'block';

        // Hide the loader
        document.getElementById('loading').style.display = 'none';

    } else {
        showError('Please check you input');
    }

}
