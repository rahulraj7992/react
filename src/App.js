// src/App.js
import React from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Weather />
            <Footer />
        </div>
    );
}

export default App;
