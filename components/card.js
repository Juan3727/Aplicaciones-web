import React, { useState } from 'react';

export const CardElement = ({ titulo, descripcion, imagen, precio }) => {
    const [cantidad, setCantidad] = useState(1);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="card">
            <div className="header">
                <h3>{titulo}</h3>
            </div>
            <div className="contenedor">
                <div className="texto">
                    <h3>{descripcion}</h3>
                </div>
                <img 
                    src={imagen} 
                    alt={descripcion} 
                    height="200" 
                    width="200" 
                />
                <div className="texto">
                    <p>Precio: {precio}$</p>
                </div>
                <div className="cantidad">
                    <button onClick={disminuirCantidad}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={aumentarCantidad}>+</button>
                </div>
            </div>
        </div>
    );
};