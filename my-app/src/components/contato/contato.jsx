import React, { useState, useEffect } from 'react';
import './contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { userEmail } from '../login/login';

const apiUrl = 'https://localhost:7050/api/Messages';

const Contato = () => {
    const [mensagem, setMensagem] = useState('');
    const [mensagensEnviadas, setMensagensEnviadas] = useState([]);

    useEffect(() => {
        fetchMensagens();
    }, []);

    const fetchMensagens = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Erro ao buscar mensagens da API');
            }
            const data = await response.json();
            setMensagensEnviadas(data);
        } catch (error) {
            console.error('Erro ao buscar mensagens da API:', error);
        }
    };

    const handleChange = (event) => {
        setMensagem(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const dataHora = new Date().toISOString();
        const novaMensagem = { texto: mensagem, dataHora, email: userEmail };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(novaMensagem),
            });
            if (!response.ok) {
                throw new Error('Erro ao enviar mensagem para a API');
            }
            fetchMensagens();
        } catch (error) {
            console.error('Erro ao enviar mensagem para a API:', error);
        }

        setMensagem('');
    };

    const handleDeleteMessage = async (id) => {
        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Erro ao excluir mensagem na API');
            }
            fetchMensagens();
        } catch (error) {
            console.error('Erro ao excluir mensagem na API:', error);
        }
    };

    const mensagensFiltradas = mensagensEnviadas.filter(msg => msg.email === userEmail);

    return (
        <div className="display">
            <div>
                <h1 className="titulo">Contatos</h1>
                <h4 className="text">Caso tenha disponibilidade para adotar um amigo,</h4>
                <h4 className="text">ou queira saber mais sobre o nosso trabalho,</h4>
                <h4 className="text">entre em contato conosco pelas redes sociais</h4>
                <h4 className="text">ou através dessa caixa de mensagem</h4>
                <h4 className="text">
                    <a href="https://www.instagram.com/rafa.esteves.dev/?igsh=emxldXZlOXh1bHVk" target='_blank' rel="noreferrer">Instagram</a> <a href="https://www.facebook.com/share/p/iXM31Ppjyc9zZ4uR/?mibextid=oFDknk" target='_blank' rel="noreferrer">Facebook</a>
                </h4>
                <h3 className="ultimos-contatos">Seus Últimos Contatos:</h3>
                {mensagensFiltradas.map((msg) => (
                    <div key={msg.id} className="mensagem-enviada">
                        <div className="mensagem-texto">{msg.texto}</div>
                        <div className="mensagem-data">{new Date(msg.dataHora).toLocaleDateString()}</div>
                        <button className="delete-button" onClick={() => handleDeleteMessage(msg.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                ))}
            </div>
            <div className="text-area">
                <h3 className="text-area-title">Envie-nos uma mensagem</h3>
                <form className="display-" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={mensagem}
                        onChange={handleChange}
                        placeholder="Digite sua mensagem..."
                        required
                    />
                    <button className="text-area-btn" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contato;