// function to get character types based on user selection
function getCharTypes() {
    
    const uppercase = document.querySelector('#uppercase').checked;
    const lowercase = document.querySelector('#lowercase').checked;
    const numbers = document.querySelector('#numbers').checked;
    const symbols = document.querySelector('#symbols').checked;

    const charOptions = [];

    if (uppercase) {
        charOptions.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (lowercase) {
        charOptions.push('abcdefghijklmnopqrstuvwxyz');
    }

    if (numbers) {
        charOptions.push('0123456789');
    }

    if (symbols) {
        charOptions.push('!@#$%^&*()_+[]{}|;:,.<>?');
    }

    return charOptions;
}

// function to validate input based on selected character types
function validateInput(charOptions) {
    const randomIndex = Math.floor(Math.random() * charOptions.length);
    return charOptions[randomIndex][Math.floor(Math.random() * charOptions[randomIndex].length)];
}

//function to get the size of the password from user input
function getSize() {
    const sizeInput = document.querySelector('#length').value;

    if (sizeInput < 4 || sizeInput > 64 || isNaN(sizeInput)) {
        alert('Please enter a valid number between 4 and 64.');
    }

    return sizeInput;
}

// Event listener for the generate button
document.querySelector('#generate-btn').addEventListener('click', function() {
    console.log(validateInput(getSize()));
});