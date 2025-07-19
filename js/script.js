function getChartTypes() {
    
    const uppercase = document.querySelector('#uppercase').checked;
    const lowercase = document.querySelector('#lowercase').checked;
    const numbers = document.querySelector('#numbers').checked;
    const symbols = document.querySelector('#symbols').checked;

    const charTypes = [];

    if (uppercase) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (numbers) {
        charTypes.push('0123456789');
    }

    if (symbols) {
        charTypes.push('!@#$%^&*()_+[]{}|;:,.<>?');
    }

    return charTypes;
}

document.querySelector('#generate-btn').addEventListener('click', function() {
    console.log(getChartTypes());
});