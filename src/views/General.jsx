import React, { useState } from 'react';
import '../styles/General.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header.jsx';
import { Footer } from "../components/Footer.jsx";
import { libros } from '../data/libros.jsx';
import { ProductList } from '../components/ProductList.jsx';
import NavBarComponent from '../components/NavbarComponent.jsx';
import LandingPageComponent from '../components/LandingPageComponent.jsx';

/*
Para agregar nuevas rutas, agreguen dentro del tag Routes el siguiente tag:
<Route path='/rutadelcomponente' element={<NombreDelComopnente />} />

- El componente debe estar importado en la parte de arriba.
- La ruta puede ser cualquier String mientras sea unica.
- Recuerden modificar el NavbarComponent si agregan nuevas rutas.
*/

export const General = () => {
    const [searchQuery, setQuery] = useState('');
    const [orderBy, setOrderBy] = useState('default');

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow">
                <NavBarComponent />
                <div className="flex-grow flex flex-col">
                    <Routes>
                        <Route path='/' element={<LandingPageComponent />} />
                        <Route path='/productlist' element={<ProductList libros={libros} search={searchQuery}/>} />
                        {/* <Route path='/support' element={<SoporteComponent />} /> */}
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
};