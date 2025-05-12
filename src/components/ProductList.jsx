import React from 'react';
import '../styles/ProductList.css';

export const ProductList = ({ libros, search }) => {

    const filteredLibros = search
        ? libros.filter((libro) =>
            libro.title.toLowerCase().includes(search.toLowerCase())
        )
        : libros;

    return (
        <div className="product-list">
            {filteredLibros.map((libro) => (
                <div key={libro.id} className="product-card">
                    <img src={libro.image} alt={libro.title} className="product-image" />
                    <h2 className='product-name'>{libro.title}</h2>
                    <p>Autor: {libro.author}</p>
                    <p>Año: {libro.year}</p>
                    <p>{libro.description}</p>
                    <p>Precio: ${libro.price}</p>
                    <button className="add-to-cart-button">Agregar al carrito</button>
                    <button className="view-details">Ver detalles</button>
                </div>
            ))}
        </div>
    );
}