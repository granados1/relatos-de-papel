import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css';
import { SearchBar } from './SearchBar';
import { OrderBy } from './OrderBy.jsx';
import { FilterBy } from './FilterBy.jsx';

export const ProductList = ({ libros, search: initialSearch, order: strDefault }) => {
    const [searchQuery, setQuery] = useState(initialSearch || '');
    const [orderBy, setOrderBy] = useState(strDefault || 'default');
    const [filteredLibros, setFilteredLibros] = useState(libros);

    const handleSearch = (query) => {
        console.log('Search query en ProductList:', query);
        setQuery(query);
    };

    const handleOrder = (valueOrder) => {
        setOrderBy(valueOrder);
        console.log('OrderBy en ProductList:', valueOrder);
    };

    useEffect(() => {
        const newFilteredLibros = [...(searchQuery
            ? libros.filter((libro) => libro.title.toLowerCase().includes(searchQuery.toLowerCase())
                || libro.author.toLowerCase().includes(searchQuery.toLowerCase())
                || libro.description.toLowerCase().includes(searchQuery.toLowerCase()))
            : libros)];
        switch (orderBy) {
            case 'price-asc':
                newFilteredLibros.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                newFilteredLibros.sort((a, b) => b.price - a.price);
                break;
            case 'year-asc':
                newFilteredLibros.sort((a, b) => Number(a.year) - Number(b.year));
                break;
            case 'year-desc':
                newFilteredLibros.sort((a, b) => Number(b.year) - Number(a.year));
                break;
            default:
                break;
        }
        setFilteredLibros(newFilteredLibros);
    }, [libros, searchQuery, orderBy]);

    return (
        <>
            <div className="search-order-container">
                <SearchBar onSearch={handleSearch} />
                <OrderBy onOrderBy={handleOrder}/>
                <FilterBy />
            </div>
            <div className="product-list-container">
                <div className="product-list">
                    {filteredLibros.map((libro) => (
                        <div key={libro.id} className="product-card">
                            <img src={libro.image} alt={libro.title} className="product-image" />
                            <h2 className='product-name'>{libro.title}</h2>
                            <p>Autor: {libro.author}</p>
                            <p>Año: {libro.year}</p>
                            <p>{libro.description}</p>
                            <p>Precio: ${libro.price}</p>
                            <div className="buttons-container">
                                <button className="add-to-cart-button">Agregar al carrito</button>
                                <button className="view-details">Ver detalles</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};