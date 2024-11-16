const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPass').value;

    fetch('../data/users.json').then(res => res.json()).then(users => {
        const user = users.find(e => e.email === email && e.pass === password)
        
        if (user) {
            sessionStorage.setItem('userData', JSON.stringify(user))
            console.log(user);
            window.location.href = 'http://127.0.0.1:5500/public_page/home.html';
        } else {
            document.getElementById('lblError').textContent = "Error al ingresar los datos";
        }
    })

    
const form = document.getElementById('login');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userEmail = document.getElementById('email').value
    let userPass = document.getElementById('pass').value

    fetch('../data/users.json').then(res => res.json()).then(users => {
        const user = users.find(e => e.email === userEmail && e.pass === userPass)

        if (user) {
            sessionStorage.setItem('userData', JSON.stringify(user))
            console.log(user);
            window.location.href = 'http://127.0.0.1:5500/public_page/login.html';
        } else {
            document.getElementById('lblError').textContent = "Error al ingresar los datos";
        }
    });
});

})

