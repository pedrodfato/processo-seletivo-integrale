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
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Atualiza os elementos visuais com os valores digitados
        displayName.textContent = nameValue;
        displayEmail.textContent = emailValue;
        displayPassword.textContent = passwordValue;

        // Cria o objeto de dados para enviar ao webhook
        const formData = {
            name: nameValue,
            email: emailValue,
            password: passwordValue
        };

        try {
            const response = await fetch("https://primary-production-16af.up.railway.app/webhook-test/4aa7f555-013c-4499-9146-df1564ad3068", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Dados enviados com sucesso!");
            } else {
                alert("Erro ao enviar os dados.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao enviar os dados.");
        }

        flipContainer.classList.add("flipped");
        formWrapper.classList.add("flipped");

        form.reset();
    });
});
