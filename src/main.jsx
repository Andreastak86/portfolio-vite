import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Projects from "./routes/Projects.jsx";
import Contact from "./routes/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

// import Navbar from "./components/navbar/Navbar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "contact", element: <Contact /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <Navbar /> */}
        <RouterProvider router={router} />
        <Footer />
    </StrictMode>
);
