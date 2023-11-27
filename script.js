document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const validateButton = document.getElementById("validateButton");
    const message = document.getElementById("message");

    validateButton.addEventListener("click", function() {
        const password = passwordInput.value;
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

        let errors = [];

        if (password.length < 8) {
            errors.push("Pelo menos 8 caracteres");
        }

        if (!/[a-z]/.test(password)) {
            errors.push("Pelo menos uma letra minúscula");
        }

        if (!/[A-Z]/.test(password)) {
            errors.push("Pelo menos uma letra maiúscula");
        }

        if (!/[!@#$%^&*?]/.test(password)) {
            errors.push("Pelo menos um caractere especial (!@#$%^&*?)");
        }

        if (!/\d/.test(password)) {
            errors.push("Pelo menos um número");
        }

        if (strongPasswordRegex.test(password)) {
            message.textContent = "Senha segura!";
            message.style.color = "green";
        } else {
            message.textContent = "A senha não atende aos seguintes critérios:";
            for (let error of errors) {
                message.textContent += "\n- " + error;
            }
            message.style.color = "red";
        }
    });
});
