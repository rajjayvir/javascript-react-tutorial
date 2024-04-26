// Function to add the class 'active' to the selected input element
function addActiveClass(event) {
    event.target.classList.add('active');
}

// Function to remove the class 'active' from non-selected input elements
function removeActiveClass(event) {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input !== event.target) {
            input.classList.remove('active');
        }
    });
}

// Variables to store HTML elements for styling
const inputs = document.querySelectorAll('input');

// Add event listeners to input elements
inputs.forEach(input => {
    input.addEventListener('focus', addActiveClass, false);
    input.addEventListener('blur', removeActiveClass, false);
});

// Function to validate form
function validate(event) {
    event.preventDefault(); // Prevent form submission

    // Regular expressions for validation
    const firstNameRegex = /^[a-zA-Z]+$/;
    const lastNameRegex = /^[a-zA-Z'-]+$/; // Allows apostrophes and hyphens
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    // Get input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Test input values against regular expressions
    const firstNameValid = firstNameRegex.test(firstName);
    const lastNameValid = lastNameRegex.test(lastName);
    const emailValid = emailRegex.test(email);
    const passwordValid = passwordRegex.test(password);

    // Check if all fields are valid
    if (firstNameValid && lastNameValid && emailValid && passwordValid) {
        alert('The form is successfully submitted');
    } else {
        alert('There are some errors in your form submission, please check them again to match the requirements');
    }
}

// Add submit event listener to form
document.getElementById('register').addEventListener('submit', validate);