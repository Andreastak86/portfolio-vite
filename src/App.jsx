import { Outlet } from "react-router-dom";

import "./index.css";

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
