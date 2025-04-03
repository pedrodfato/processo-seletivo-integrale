document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-container");
    const flipContainer = document.querySelector(".flip");
    const formWrapper = document.querySelector(".form");

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const displayName = document.querySelector("#display-name");
    const displayEmail = document.querySelector("#display-email");
    const displayPassword = document.querySelector("#display-password");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 


        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

     
        if (nameValue === "" || emailValue === "" || passwordValue === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

     
        displayName.textContent = nameValue;
        displayEmail.textContent = emailValue;
        displayPassword.textContent = passwordValue;

    
        flipContainer.classList.add("flipped");
        formWrapper.classList.add("flipped");

    
        form.reset();
    });
});
