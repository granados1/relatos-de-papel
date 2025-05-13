import React from "react";
import '../styles/FilterBy.css';

export const FilterBy = ({ onFilterBy }) => {
    const handleFilterChange = (event) => {
        const newValue = event.target.value;
        onFilterBy(newValue);
        console.log('Filter by:', newValue);
    };

    return (
        <div className="filter-by-container">
            <label htmlFor="filter-by">Filtrar por:</label>
            <select id="filter-by" onChange={handleFilterChange}>
                <option value="default">Predeterminado</option>
                <option value="author">Autor</option>
                <option value="year">Año</option>
                <option value="price">Precio</option>
            </select>
        </div>
    );
}