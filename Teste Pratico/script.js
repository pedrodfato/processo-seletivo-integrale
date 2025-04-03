document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container");
    const flipContainer = document.querySelector(".flip");
    const formWrapper = document.querySelector(".form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
 
        flipContainer.classList.add("flipped"); 
        formWrapper.classList.add("flipped");  
    });
});