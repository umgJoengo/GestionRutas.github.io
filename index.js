document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'password') {
        alert('Login exitoso');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});
