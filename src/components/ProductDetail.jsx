import React from "react";
import '../styles/ProductDetail.css';

export const ProductDetail = ({ libro }) => {
    return (
        
            <div className="product-detail">
                <h2 className='product-detail-name'>{libro.title}</h2>
                <div className="product-detail-top">
                    <div className="product-detail-image-container">
                        <img src={libro.image} alt={libro.title} className="product-detail-image" />
                    </div>
                    <div className="product-detail-description">
                        <p>{libro.description}</p>
                    </div>
                </div>
                <div className="product-detail-bottom">
                    <p>Autor: {libro.author}</p>
                    <p>Año: {libro.year}</p>
                    <p>Precio: ${libro.price}</p>
                    <div className="buttons-container-detail">
                        <button className="add-to-cart-button-detail">Agregar al carrito</button>
                        <button className="comprar-button-detail">Comprar</button>
                    </div>
                </div>
            </div>
        
    );
}