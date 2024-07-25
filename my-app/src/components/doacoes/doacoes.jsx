import React from 'react';
import "./doacoes.css"

import DoacaoImg from "../../images/fome.jpg";

const Doacoes = () => {
    return (
        <div>
            <div className="doacao">
                <div className="doacao-title-container">
                        <h1 >Tem uma moedinha?</h1>
                </div>
                    <div className="img-container">
                        <img className="doacao-img" src={DoacaoImg} alt="Gato Pedindo Doação" />
                    </div>
                    <div>
                        <h4 className="txt-space">— Ajude a encher a minha barriguinha!</h4>
                        <h4 className="txt-space">Você pode fazer a sua doação atraves de pix ou ração.</h4>
                        <h4 className="txt-space">
                            <a href="https://www.google.com/maps" target='_blank' rel="noreferrer" className="link-style">
                                (Entregar nos postos de coleta)
                            </a>
                        </h4>
                        <h4 className="txt-space-end">CHAVE PIX 19 99657-5275 (Cláudia Beatriz)</h4>
                    </div>
            </div>
        </div>
    );
};

export default Doacoes;