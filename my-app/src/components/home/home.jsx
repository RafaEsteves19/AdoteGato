import React, { useState, useEffect, useCallback } from "react";
import "./home.css";

import imagem1 from "../../images/eu-quero.jpg";
import imagem2 from "../../images/tem-moeda.jpg";
import imagem3 from "../../images/fome.jpg";

const Home = () => {
    const images = [imagem1, imagem2, imagem3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [nextImage]);

    return (
        <div className="home-display">
            <div className="home">
                <h2>Quem Somos?</h2>
                <h5 className="home-text">Somos a Equipe de Proteção Animal, Gatos Amigos.</h5>
                <h5 className="home-text">Uma equipe sem fins lucrativos.</h5>
                <h5 className="home-text">Nosso maior objetivo é ajudar esses bichinhos que tanto amamos!</h5>
                <h5 className="home-text">CHAVE PIX 19 99657-5275 (Cláudia Beatriz)</h5>
                <h5 className="home-text">Acompanhe nosso trabalho nas redes sociais!</h5>
                <h4>
                    <a href="https://www.instagram.com/rafa.esteves.dev/?igsh=emxldXZlOXh1bHVk" target='_blank' rel="noreferrer">Instagram</a> <a href="https://www.facebook.com/story.php?story_fbid=338453785959744&substory_index=2179946019027424&id=100093853748437&mibextid=oFDknk&rdid=lIj6buA31e596dhm" target='_blank' rel="noreferrer">Facebook</a>
                </h4>
            </div>
            <div className="home-img">
                <img
                    src={images[currentImageIndex]}
                    alt={`Imagem ${currentImageIndex + 1}`}
                    className="slideshow-image"
                />
            </div>
        </div>
    );
};

export default Home;
