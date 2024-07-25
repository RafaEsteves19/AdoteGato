import React from 'react';
import './SuccessMessage.css';

const SuccessMessage = ({ show }) => {
    return (
        <div className={`success-message ${show ? 'show' : ''}`}>
            {show ? 'Entrando...' : 'Sucesso!'}
        </div>
    );
};

export default SuccessMessage;
