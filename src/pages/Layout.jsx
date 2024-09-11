import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <h2 className="text-center font-mono text-5xl text-purple-700">
                    Numismatica NICO
                </h2>
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    );
};

export default Layout;
