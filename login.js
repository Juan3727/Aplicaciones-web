const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPass').value;

    const validEmail = 'anonimo@gmail.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
       
        window.location.href = "../private_page/processors.html"; 
    } else {
        alert("Email o Contraseña incorrectos"); 
    }
});

document.getElementById('logoutButton').addEventListener('click', function(event) 
{
    event.preventDefault(); 

    localStorage.removeItem('userToken'); 
    window.location.href = './login.html'; 
});
