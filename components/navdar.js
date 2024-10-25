const navElements = [
    {title:'Rapigamer', link: `${url}home.html`},
    {title:'Ingresar', link: `${url}login.html`},
    {title:'Registrarse', link: `${url}registro.html`},
    {title:'Procesadores', link: `${url}processors.html`},
    {title:'Memorias Ram', link: `${url}ram.html`},
    {title:'Tarjetas Gráficas', link: `${url}videocard.html`}
    ]

    export const navBarElement = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${
                navLinks.map(e=>{
                    if(e.subLinks.length == 0){
                        return `
                        <li class="nav-item">
                            <a class="nav-link" href=${e.link}>${e.title}</a>
                        </li>
                        `
                    }else{
                        return `
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ${e.title}
                                </a>
                                <ul class="dropdown-menu">
                                    ${e.subLinks.map(i =>{
                                        return `
                                            <li><a class="dropdown-item" href=${i.link}>${i.title}</a></li>
                                        `
                                    }).join('')}
                                </ul>
                            </li>
                        `
                    }
                   
                }).join('')
            }
          </ul>
        </div>
        <button class="btn btn-warning" id="btnChangeTheme">Cambiar tema</button>
      </div>
    </nav>
    `