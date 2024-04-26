function submitForm() {
    // Accessing values from input elements
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const country = document.getElementById('country').value;

    //Used for testing

    // Displaying values in the console
    // console.log('First Name:', firstName);
    // console.log('Last Name:', lastName);
    // console.log('Gender:', gender);
    // console.log('Country:', country);

    const resultParagraph = document.createElement('p');
    resultParagraph.innerHTML = `Submitted: ${firstName} ${lastName}, ${gender}, ${country}`;
    document.body.appendChild(resultParagraph);
}

//What is the use of preventDefault ( )?
/**
 * preventDefault() is a method in JavaScript that is typically used in the context of handling events, especially in web development. 
 * When an event occurs (e.g., a click on a link or a form submission), the browser's default behavior may be to perform some action, such as navigating to a new page or submitting a form. 
 * preventDefault() is used to stop this default behavior from happening.
 */


//What changes require in code to keep previous data on the page? (Write the code line that requires to modify ?
/**
 * Modify the form submission code to store data in local storage:
 * localStorage.setItem('username', username);
 * 
 * Update the code to retrieve and populate form data on page load:
 * const storedUsername = localStorage.getItem('username');
 * 
 * Populate the form field if stored data exists:
 * if (storedUsername) document.querySelector('input[name="username"]').value = storedUsername;
 */
