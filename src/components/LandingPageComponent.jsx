import React from "react";

const LandingPageComponent = () => {
    return (
        <>
            <div className="flex-grow relative p-8 bg-[#e0c3a4] flex flex-col items-center"> {/* Este div es el contenido central */}
                <h2 className="text-xl text-[#885437] mb-4">Bienvenido: Usuario@correo.com</h2>

                <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Título"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Autor"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Género"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Palabra Clave"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <button className="bg-[#885437] text-white p-2 rounded w-full hover:bg-[#aa7c5b]">
                        Buscar
                    </button>
                </div>

            </div>
        </>
    );
}

export default LandingPageComponent;