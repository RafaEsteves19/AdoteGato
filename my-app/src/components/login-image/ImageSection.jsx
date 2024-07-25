import React from 'react';
import './ImageSection.css';
import ImgLogin from "../../images/gatologin.png"

const ImageSection = () => {
    return (
        <div className="image-section">
            <img src= {ImgLogin} alt="Imagem de um gato" className="main-image" />
        </div>
    );
};

export default ImageSection;