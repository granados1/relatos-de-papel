import React from 'react';

const NavBarComponent = () => {
  return (
    // Los href deben apuntar a los paths que definieron en Routes en General.jsx para que funcionen
    <nav className="bg-[#ba9c82] w-1/4 flex flex-col p-4 space-y-4 overflow-y-auto">
      <a href="/" className="text-[#1b1f25] text-lg hover:bg-[#e0c3a4] p-2 rounded">
        Comprar
      </a>
      <a href="/productlist" className="text-[#1b1f25] text-lg hover:bg-[#e0c3a4] p-2 rounded">
        Lista de productos
      </a>
      <a href="/support" className="text-[#1b1f25] text-lg hover:bg-[#e0c3a4] p-2 rounded">
        Soporte
      </a>
      <a href="/myorders" className="text-[#1b1f25] text-lg hover:bg-[#e0c3a4] p-2 rounded">
        Mis Pedidos
      </a>
    </nav>
  );
};

export default NavBarComponent;