import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css';
import { SearchBar } from './SearchBar';

export const ProductList = ({ libros, search: initialSearch }) => {
  const [searchQuery, setQuery] = useState(initialSearch || '');
  const [filteredLibros, setFilteredLibros] = useState(libros);

  const handleSearch = (query) => {
    console.log('Search query en ProductList:', query);
    setQuery(query);
  };

  useEffect(() => {
    const newFilteredLibros = searchQuery
      ? libros.filter((libro) =>
          libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : libros;
    setFilteredLibros(newFilteredLibros);
  }, [libros, searchQuery]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
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
    </>
  );
};