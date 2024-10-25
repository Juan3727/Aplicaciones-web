const url = "";

const navElements = [
  {title:'Rapigamer', link: `${url}home.html`},
  {title:'Ingresar', link: `${url}login.html`},
  {title:'Registrarse', link: `${url}registro.html`},
  {title:'Procesadores', link: `${url}processors.html`},
  {title:'Memorias Ram', link: `${url}ram.html`},
  {title:'Tarjetas Gráficas', link: `${url}videocard.html`}
  ]

  export const navBarComponent = `
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
            `;
          }).join('')
        }
      </ul>
    </div>
  </div>
</nav>
`;

let navContainer = document.querySelector('header');
let pageName = document.getElementById('pageName').value
let title = document.getElementById('title')
document.getElementById('navbar').innerHTML = navBarComponent;


window.addEventListener('load', () => {
  navContainer.innerHTML = navBar; 
  title.textContent = `Bienvenido a ${pageName}`
});