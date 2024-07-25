import React, { useState, useEffect } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

let email = '';

const Login = ({ onLoginSuccess }) => {
    const [senha, setSenha] = useState('');
    const [error, setError] = useState({ email: false, senha: false });
    const [showPassword, setShowPassword] = useState(false);
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        fetchMensagens();
    }, []);

    const fetchMensagens = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/Messages');
            if (!response.ok) {
                throw new Error('Erro ao obter mensagens na API');
            }
            const data = await response.json();
            setMensagens(data);
        } catch (error) {
            console.error('Erro ao buscar mensagens na API:', error);
        }
    };

    const handleLogin = () => {
        let valid = true;
        const newError = { email: false, senha: false };

        if (email.trim() === '') {
            newError.email = true;
            valid = false;
        }

        if (senha.trim() === '') {
            newError.senha = true;
            valid = false;
        }

        setError(newError);

        if (valid) {
            onLoginSuccess();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e) => {
        email = e.target.value;
    };

    const handleModoVisitante = async () => {
        try {
            const mensagensComEmailVazio = mensagens.filter(msg => msg.email.trim() === '');

            if (mensagensComEmailVazio.length > 0) {
                await Promise.all(mensagensComEmailVazio.map(async msg => {
                    const deleteResponse = await fetch(`http://localhost:5000/api/Messages/${msg.id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!deleteResponse.ok) {
                        throw new Error(`Erro ao deletar mensagem na API com ID ${msg.id}`);
                    }
                }));

                console.log('Mensagens com email vazio deletadas com sucesso da API!');
                fetchMensagens();
            } else {
                console.log('Não há mensagens com email vazio na API para deletar.');
            }

            setMensagens([]);

            onLoginSuccess();
        } catch (error) {
            console.error('Erro ao deletar mensagens com email vazio da API:', error);
        }
    };

    return (
        <div className="login-section">
            <p className="login-label">Login:</p>
            <p className="login-instruction">Entre com seu email</p>
            <input
                type="text"
                className={`login-input ${error.email ? 'error' : ''}`}
                placeholder={error.email ? 'É necessário inserir um email' : 'Seu email'}
                onChange={handleEmailChange}
            />
            <p className="login-instruction">Insira sua senha</p>
            <div className="password-input-container">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`login-input ${error.senha ? 'error' : ''}`}
                    placeholder={error.senha ? 'É necessário inserir uma senha' : 'Sua senha'}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <span className="toggle-password-icon" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
            </div>
            <button className="login-button" onClick={handleLogin}>Entrar</button>
            <button className="login-button" onClick={handleModoVisitante}>Modo Visitante</button>
        </div>
    );
};

export default Login;
export { email as userEmail };
