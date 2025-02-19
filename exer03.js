// Name: Angeline S. Cubelo
// Section: U4L
// Date: 02-19-2025
// Description: Implement a javascript program that will simulate a password validation

function validatePassword(pass1, pass2) {
    // Check if the two passwords match
    if (pass1 !== pass2) {
        return false; 
    }


    // Check if if the password has at least 8 characters
    if (pass1.length < 8) {
        return false;
    }

    // Check if the password has at leats 1 number, 1 uppercase char, and 1 lowercase char
    let upper = false, lower = false, number = false;

    for (let i = 0; i < pass1.length; i++) {
        let char = pass1[i];
        // for uppercase char
        if (char >= 'A' && char <= 'Z') {
            upper = true;
        }
        // for lowercase char
        if (char >= 'a' && char <= 'z') {
            lower = true;
        }
        // for number
        if (char >= '0' && char <= '9') {
            number = true;
        }
    }
    return upper && lower && number;
}

// function to reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Function to store password in an object
function storePassword(name, pass1, pass2) {
    let newPassword;

    if (validatePassword(pass1, pass2) === true) {
        newPassword = reverseString(pass1);
    } else {
        newPassword = pass1;
    }

    const user = {
        name: name,
        password: pass1,
        newpassword: newPassword
    }


    return { name: user.name, newpassword: user.newpassword };

}



// Sample test
console.log(validatePassword("helloworld", "hello")); // returns false
console.log(validatePassword("hello", "hello")); // returns falsee
console.log(validatePassword("hello1234", "hello1234")) // returns false
console.log(validatePassword("Hello1234", "Hello1234")) // returns true
console.log(validatePassword("HELLO1234", "HELLO1234")) // returns false

console.log(storePassword("John", "Pass1234", "Pass1234"))// returns {name:"John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")) // returns {name:"John", newpassword:"Pass123"}