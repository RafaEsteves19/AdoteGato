import React from 'react';
import './Perdidos.css';

const PerdidosID = ({ imageSrc, perdidostitle, textContent, contacts, contactsdono }) => {
  function adicionarNegrito(texto) {
    if (texto.includes('Nosso numero de contato:')) {
      return texto.replace('Nosso numero de contato:', '<strong>Nosso numero de contato:</strong>');
    } else if (texto.includes('Numero de contato do dono:')) {
      return texto.replace('Numero de contato do dono:', '<strong>Numero de contato do dono:</strong>');
    } else {
      return texto;
    }
  }

  return (
    <div className="perdidos-content1">
      <div className="perdidos-content">
        <img className="perdidos-image" src={imageSrc} alt="imagem" />
        <div className="perdidos-details">
          <h5 className="perdidos-title">{perdidostitle}</h5>
          <p className="perdidos-text">{textContent}</p>
          <p className="perdidos-contacts" dangerouslySetInnerHTML={{ __html: adicionarNegrito(contacts) }} />
          <p className="perdidos-contacts-dono" dangerouslySetInnerHTML={{ __html: adicionarNegrito(contactsdono) }} />
        </div>
      </div>
    </div>
  );
};

export default PerdidosID;
