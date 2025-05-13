import React from 'react';
import LanguageSwitcherComponent from './LanguageSwitcherComponent/LanguageSwitcherComponent'

export const Header = () => {

    return (
        <>
            <header className="bg-[#f8e9d7] text-[#885437] p-4 flex justify-between items-center">
                <div className="flex-grow text-center">
                    <h1 className="text-4xl text-[#885437] font-georgia">
                        RELATOS DE PAPEL
                    </h1>
                </div>
                <LanguageSwitcherComponent />
            </header>
        </>
    );
};
