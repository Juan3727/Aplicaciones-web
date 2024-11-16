const url = "http://127.0.0.1:5500";

const navElements = [
  {title: 'Navdar', link: '../index.html'},
  {title:'Rapigamer', link: '../public_page/home.html'},
  {title:'Ingresar', link: '../public_page/login.html'},
  {title: 'Icono', link: '../Elementos/computadora.png' },
  {title:'Registrarse', link: '../public_page/registro.html'},
  {title:'Procesadores', link: '../private_page/processors.html'},
  {title:'Memorias Ram', link: '../private_page/ram.html'},
  {title:'Tarjetas Gráficas', link: '../private_page/videocard.html'}
  ]

  const navBar = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        ${
          navElements.map(e => {
            return `
              <li class="nav-item">
                <a class="nav-link" href="${e.link}">${e.title}</a>
              </li>
              `
          }).join('')
        }
      </ul>
    </div>
  </div>
</nav>
`

let navContainer = document.querySelector('header');
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')

window.addEventListener('load', () => {
  navContainer.innerHTML = navBar
  title.textContent = `Bienvenido a ${pageName}`
  document.title = pageName
})