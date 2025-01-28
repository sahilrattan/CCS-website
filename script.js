document.addEventListener("DOMContentLoaded", () => {
    // Get the login and signup form elements
    const loginForm = document.querySelector("#login-page form");
    const signupForm = document.querySelector("#signup-page form");

    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Your data is entered. Thank you for contacting us.");
    }

    // Attach the form submission handler
    if (loginForm) {
        loginForm.addEventListener("submit", handleFormSubmission);
    }

    if (signupForm) {
        signupForm.addEventListener("submit", handleFormSubmission);
    }
});
