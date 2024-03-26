
// Check if localStorage is supported
if (typeof (Storage) !== "undefined") {
    // If the counter is not set in localStorage, initialize it to 0
    if (!localStorage.profileViews) {
        localStorage.profileViews = 234;
    }

    // Increment the counter and update localStorage
    localStorage.profileViews = parseInt(localStorage.profileViews) + 1;

    // Update the counter display
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("counter").innerText = localStorage.profileViews;
    });
} else {
    // If localStorage is not supported, show an error message
    document.getElementById("counter").innerText = "LocalStorage is not supported!";
}
