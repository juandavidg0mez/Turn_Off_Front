document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón de registro y los divs
    let registerBtn = document.getElementById('registerBtn');
    let loginLog = document.getElementById('login_Log');
    let extraInfo = document.getElementById('extraInfo');
    let closeDivRegister = document.getElementById('close_div_register');

    // Evento para mostrar el formulario de registro y ocultar el login
    registerBtn.addEventListener('click', function () {
        loginLog.style.display = 'none';
        extraInfo.style.display = 'block';
    });

    // Evento para ocultar el formulario de registro y volver a mostrar el login
    closeDivRegister.addEventListener('click', function () {
        extraInfo.style.display = 'none';
        loginLog.style.display = 'block';
    });


    // l4v3rd4dm3h4r4
    document.querySelector('#loginBtn').addEventListener('click', function (event) {
        event.preventDefault(); // Evita que se recargue la página

        // Obtén los valores de los campos
        const username = document.querySelector('#login_Log input[type="text"]').value;
        const password = document.querySelector('#login_Log input[type="password"]').value;

        const loginData = {
            username: username,
            password: password
        };

        // Enviar los datos al servidor
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Login successful:', data);
                // Suponiendo que el token se recibe como 'data.token' después de una respuesta exitosa del servidor
                sessionStorage.setItem('authToken', data.token);

                window.location.href = 'http://127.0.0.1:5500/Turn_Off_Front/page.html';
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
    });

    document.querySelector('#registerSubmitBtn').addEventListener('click', function (event) {
        event.preventDefault();

        const firstname = document.querySelector('#registerForm input[placeholder="First Name"]').value;
        const lastname = document.querySelector('#registerForm input[placeholder="Last Name"]').value;
        const username = document.querySelector('#registerForm input[placeholder="Username"]').value;
        const password = document.querySelector('#registerForm input[placeholder="Password"]').value;
        const country = document.querySelector('#registerForm input[placeholder="Country"]').value;

        const registerData = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
            country: country
        };

        fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Registration successful:', data);
            sessionStorage.setItem('authToken', data.token);
            window.location.href = 'http://127.0.0.1:5500/Turn_Off_Front/Login.html';
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
    });
});