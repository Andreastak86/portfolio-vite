import React from "react";
import Intro from "./components/intro/Intro";
import Pitch from "./components/pitch/Pitch";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <div className='App'>
                <header></header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}
