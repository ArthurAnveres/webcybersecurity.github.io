let storedUsername = "";
let storedPassword = "";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    storedUsername = username;
    storedPassword = password;

    simulatePhishing(username, password);
});

function simulatePhishing(username, password) {
    alert("Você inseriu suas informações de login em uma página de phishing. Lembre-se de verificar os detalhes da URL e do remetente antes de inserir suas credenciais em qualquer site.");
    alert(`Informações registradas:\nUsuário: ${storedUsername}\nSenha: ${storedPassword}`);
}
