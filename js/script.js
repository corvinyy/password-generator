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
        message("Please enter a valid password length between 4 and 64.", "linear-gradient(to right, #3c2c47ff, #3d264bff)");
        return null;
    }

    return sizeInput;
}

// function to generate the password based on size and character options
function generatePassword(sizeInput, charOptions) {
    let genPassword = '';

    while (genPassword.length < sizeInput) {
        genPassword += validateInput(charOptions);

    }

    return genPassword;
}

function message(text, background) {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: background,
            boxShadow: "none"
        }
    }).showToast();
}

// Event listener for the generate button
document.querySelector('#generate-btn').addEventListener('click', function() {
    const sizeInput = getSize();
    if (!sizeInput) 
        return;

    const charOptions = getCharTypes();

    if (!charOptions.length) {
        message("Please select at least one character type.", "linear-gradient(to right, #3c2c47ff, #3d264bff)");
        return null;
    }
    const genPassword = generatePassword(sizeInput, charOptions);

    document.querySelector('#password').textContent = genPassword;
});

// Event listener for the copy button
document.querySelector('#copy-btn').addEventListener('click', function() {
    navigator.clipboard.writeText(document.querySelector('#password').textContent);
    message("Password copied to clipboard!", "linear-gradient(to right, #3c2c47ff, #3d264bff)");
});