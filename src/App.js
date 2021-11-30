import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// pages
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Item from "./pages/item";

// components
import Header from "./components/header";
import HeaderFixed from "./components/headerFixed";
import Footer from './commons/footer';

function App() {

    let [lightBool, setLightBool] = useState(localStorage.getItem("lightMode") === "sun" ? true : false);

    if (!localStorage.getItem("lightMode")) {
        localStorage.setItem("lightMode", "sun");
    }

    const handleDarkModeChange = () => {
        if (lightBool) {
            localStorage.setItem("lightMode", "moon");
        }
        else {
            localStorage.setItem("lightMode", "sun");
        }
        setLightBool(!lightBool);
    }

    return (
        <div className="App">
            <Header handleDarkModeChange={handleDarkModeChange} lightIcon={lightBool} />
            <HeaderFixed />
            <main>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={AboutUs} />
                <Route path="/contact" exact component={ContactUs} />
                <Route path="/item" exact component={Item} />
            </main>
            <Footer />
        </div>
    );
}

export default App;