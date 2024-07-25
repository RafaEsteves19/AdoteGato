import React, { useState } from 'react';
import './Gatos.css';

export default function GatoID({ imageUrl, name, description }) {
    const [showDescription, setShowDescription] = useState(false);

    const handleButtonClick = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="gato-card">
            <img className="gato-img" src={imageUrl} alt="Gato" />
            <div className="gato-details">
                <h5 className="gato-name">{name}</h5>
                {showDescription && <p className="gato-description">{description}</p>}
                <button onClick={handleButtonClick} className="description-btn">Conhecer</button>
            </div>
        </div>
    );
}
