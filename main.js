"use strict";

const btnSubmit = document.querySelector(".button");
const inputEl = document.querySelector("#email");
const errorMessage = document.querySelector(".error");
const successWrapper = document.querySelector(".success-wrapper");
const form = document.querySelector("form");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    
    const email = inputEl.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation pattern

    if (email === "") {
        errorMessage.textContent = "Email address required";
        errorMessage.style.display = "block"; // Show error message
        inputEl.style.border = "2px solid hsl(4, 100%, 67%)"; // Red border
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = "Enter a valid email address";
        errorMessage.style.display = "block"; // Show error message
        inputEl.style.border = "2px solid hsl(4, 100%, 67%)"; // Red border
    } else {
        errorMessage.textContent = ""; // Clear error message
        errorMessage.style.display = "none";
        inputEl.style.border = "1px solid var(--clr-grey-placeholder)"; // Reset border

        // Show success message and hide form
        document.querySelector(".newsletter-cta").classList.add("hide");
        successWrapper.classList.remove("hide");
    }
});

// Dismiss success message and show form again
document.querySelector(".success__button").addEventListener("click", () => {
    successWrapper.classList.add("hide");
    document.querySelector(".newsletter-cta").classList.remove("hide");
    inputEl.value = ""; // Clear input field
});
