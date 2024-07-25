import React from 'react';
import PerdidosID from "./PerdidosID"
import "./Perdidos.css"

import GatoCinza from "../../images/gato-cinza.jpg"
import GataMalhada from "../../images/gata-malhada.jpg"

export default function Perdidos() {
    const perdidosData = [
      {
        id: 1,
        perdidostitle: 'Felix',
        imageSrc: GatoCinza,
        textContent: 'Descrição do gato perdido 1',
        contacts: 'Nosso numero de contato: 19 99657-5275',
        contactsdono:'Numero de contato do dono: (numero do dono)',
      },
      {
        id: 2,
        perdidostitle: 'Marcia',
        imageSrc: GataMalhada,
        textContent: 'Descrição do gato perdido 2',
        contacts: 'Nosso numero de contato: 19 99657-5275',
        contactsdono:'Numero de contato do dono: (numero do dono)',
      },
    ];

    return (
      <div className="perdidos-container">
        {perdidosData.map(perdido => (
          <PerdidosID
            key={perdido.id}
            perdidostitle={perdido.perdidostitle}
            imageSrc={perdido.imageSrc}
            textContent={perdido.textContent}
            contacts={perdido.contacts}
            contactsdono={perdido.contactsdono}
          />
        ))}
      </div>
    );
};
