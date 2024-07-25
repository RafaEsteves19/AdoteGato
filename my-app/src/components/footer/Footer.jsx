import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-icons">
                <a href="https://www.instagram.com/rafa.esteves.dev/?igsh=emxldXZlOXh1bHVk" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/rafael-leandro-esteves/" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="mailto:rafaeldev019@gmail.com" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faSolidEnvelope} /></a>
            </div>
            <p>&copy; 2024 - Rafael Leandro Esteves</p>
            <p>Todos os Direitos Reservados</p>
        </div>
    );
};

export default Footer;
