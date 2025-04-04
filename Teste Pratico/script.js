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

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (nameValue === "" || emailValue === "" || passwordValue === "") {
            return;
        }

        displayName.textContent = nameValue;
        displayEmail.textContent = emailValue;
        displayPassword.textContent = passwordValue;

        const formData = {
            name: nameValue,
            email: emailValue,
            password: passwordValue
        };

        try {
            const response = await fetch("https://primary-production-16af.up.railway.app/webhook/4aa7f555-013c-4499-9146-df1564ad3068", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.error("Erro:", error);
        }

        flipContainer.classList.add("flipped");
        formWrapper.classList.add("flipped");

        form.reset();
    });
});