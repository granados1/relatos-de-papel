import React, {useState} from 'react';
import '../styles/General.css';
import { Header } from '../components/Header.jsx';
import {Footer} from "../components/Footer.jsx";
import { SearchBar } from '../components/SearchBar.jsx';
import { libros } from '../data/libros.jsx';
import { ProductList } from '../components/ProductList.jsx';

export const General = () => {
    const [searchQuery, setQuery] = useState('');
    
    const handleSearch = (query) => {
        console.log('Search query General:', query);
        setQuery(query);
    };

    return (
        <div>
            <Header carrito="true"/>
            <SearchBar onSearch={handleSearch} />
            <ProductList libros={libros} search={searchQuery}/>
            <Footer />
        </div>
    );
};