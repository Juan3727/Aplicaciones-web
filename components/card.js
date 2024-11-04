export const cardElement = (titulo, imagen, descripcion, precio) => {
    return `
       <div class="card col-md-4">
            <div class="card-header">
                <div class="card-title">
                    ${titulo}
                </div>
            </div>
            <div class="card-body">
                <img src="${imagen}" alt="${titulo}" height="200" width="200"/>
                <p>${descripcion}</p>
            </div>
            <div class="card-price">
                Precio: $${precio}
            </div>
        </div>
        <div class="card-button">
                <button class="btn-rest">-</button>
                <input type="number" value="1" min="1" class="quantity-input" />
                <button class="btn-sum">+</button>
            </div>
            <button class="btn-add">Añadir al carrito</button>
        </div>
    `;
}

const productos = [
    {
        titulo: "Intel Core i7 14th Gen",
        imagen: "../Elementos/Intelcorei714thgen.webp",
        precio: 850000,
        descripcion: "Procesador de Gama Media"
    },
    {
        titulo: "Intel Core i9 12th Gen",
        imagen: "../Elementos/Intelcorei912thgen.webp",
        precio: 580000,
        descripcion: "Procesador de Gama Alta"
    },
    {
        titulo: "Memoria ram hyperx 8gb ddr4",
        imagen: "../Elementos/Ramhyperx8gb.webp",
        precio: 35000,
        descripcion: "Memoria Ram"
    },
    {
        titulo: "Memoria ram hyperx 16gb ddr4",
        imagen: "../Elementos/Ramhyperx16gb.jpg",
        precio: 57000,
        descripcion: "Memoria Ram"
    },
    {
        titulo: "Tarjeta grafica ASUS GEFORCE RTX 4070",
        imagen: "../Elementos/AsusGeForceRTX4070.webp",
        precio: 1100000,
        descripcion: "Tarjeta Gráfica de Última Generación"
    },
    {
        titulo: "Tarjeta grafica NVIDIA GEFORCE GTX 1050ti",
        imagen: "../Elementos/NvidiaGeForce1050ti.jpg",
        precio: 360000,
        descripcion: "Tarjeta Gráfica Económica"
    }
];

const cardsHTML = productos.map((product, index) => 
    cardElement(product.titulo, product.imagen, product.descripcion, product.precio)
).join('');

document.getElementById('cards-container').innerHTML = cardsHTML;


