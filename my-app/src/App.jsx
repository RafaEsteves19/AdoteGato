import React, { useState } from 'react';
import './App.css';

import Header from './components/header/header';
import Login from './components/login/login';
import ImageSection from './components/login-image/ImageSection';
import SuccessMessage from './components/success-message/SuccessMessage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showNewComponents, setShowNewComponents] = useState(false);

    const handleLoginSuccess = () => {
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
            setShowNewComponents(true);
        }, 3000);
    };

    return (
        <div className="App">
            <Header />
            {!showNewComponents ? (
                <>
                    <Login onLoginSuccess={handleLoginSuccess} />
                    <ImageSection/>
                    <SuccessMessage show={showSuccessMessage} />
                </>
            ) : (
                <>
                    <Navbar />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;