import React from 'react';
import Gato from './GatosID';

import GatoPreto from "../../images/gato-preto.jpg"
import GataMalhada from "../../images/gato malhado.jpg"
import GatoLaranja from "../../images/gato-laranja.jpg"
import GatasSiames from "../../images/gato-siames.jpg"
import GatoFrajola from "../../images/gato-frajola.jpg"
import GataPretaCinza from "../../images/gata-preta-cinza.jpg"

export default function Gatos() {
    const gatosData = [
      {
        id: 1,
        name: 'Banguela',
        imageUrl: GatoPreto,
        description: <ul>
          <li>idade - 1 ano e 7 meses</li>
          <li>castrado - sim</li>
          <li>temperamento - arisco</li>
        </ul>
      },
      
      {
        id: 2,
        name: 'Nina',
        imageUrl: GataMalhada,
        description: <ul>
        <li>idade - 4 anos e 3 meses</li>
        <li>castrada - sim</li>
        <li>temperamento - dócil</li>
      </ul>
      },

      {
        id: 3,
        name: 'Yuri',
        imageUrl: GatoLaranja,
        description: <ul>
        <li>idade - 9 meses</li>
        <li>castrado - não</li>
        <li>temperamento - dócil</li>
      </ul>
      },

      {
        id: 4,
        name: 'Nira e Milka',
        imageUrl: GatasSiames,
        description: <ul>
        <li>idades - 2 anos e 5 meses ambas</li>
        <li>castradas - sim</li>
        <li>temperamento - dóceis</li>
      </ul>
      },

      {
        id: 5,
        name: 'Pluf',
        imageUrl: GatoFrajola,
        description: <ul>
        <li>idade - 3 anos e 2 meses</li>
        <li>castrado - sim</li>
        <li>temperamento - arisco</li>
      </ul>
      },

      {
        id: 6,
        name: 'Luna',
        imageUrl: GataPretaCinza,
        description: <ul>
        <li>idade - 1 ano e 2 meses</li>
        <li>castrada - sim</li>
        <li>temperamento - dócil</li>
      </ul>
      },
    ];

    return (
        <div className="gatos-container">
            {gatosData.map((gato, index) => (
                <Gato
                    key={index}
                    imageUrl={gato.imageUrl}
                    name={gato.name}
                    description={gato.description}
                />
            ))}
        </div>
    );
}