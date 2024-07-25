import React, { useState, useEffect, useCallback } from 'react';
import './events.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as faSolidEnvelope, faTrashAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { userEmail } from '../login/login';
import { v4 as uuidv4 } from 'uuid';

import GatoPreto from "../../images/gato-preto.jpg";

const Events = () => {
    const events = [
        { id: 1, name: 'Nome do Evento 1', image: GatoPreto },
        { id: 2, name: 'Nome do Evento 2', image: GatoPreto },
    ];

    const [comments, setComments] = useState([]);
    const [showAllComments, setShowAllComments] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const fetchComments = useCallback(async () => {
        try {
            const response = await fetch('https://localhost:7050/api/Comments');
            if (!response.ok) {
                throw new Error('Falha ao carregar os comentários.');
            }
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error('Erro ao carregar os comentários:', error);
        }
    }, []);

    const handleCommentSubmit = useCallback(async (eventId, commentText) => {
        try {
            const newCommentId = 0;
            const dataHora = new Date().toISOString();
            const response = await fetch('https://localhost:7050/api/Comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: newCommentId, eventId, del: uuidv4(), dataHora, text: commentText, email: userEmail }),
            });
            if (!response.ok) {
                throw new Error('Falha ao enviar o comentário.');
            }
            const newComment = await response.json();
            setComments((prevComments) => [...prevComments, newComment]);
        } catch (error) {
            console.error('Erro ao enviar o comentário:', error);
        }
    }, []);

    const handleDeleteComment = useCallback(async (commentId) => {
        try {
            const response = await fetch(`https://localhost:7050/api/Comments/${commentId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Falha ao deletar o comentário.');
            }
            setComments((prevComments) => prevComments.filter(comment => comment.id !== commentId));
        } catch (error) {
            console.error('Erro ao deletar o comentário:', error);
        }
    }, []);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    const toggleComments = () => {
        setShowAllComments(!showAllComments);
    };

    return (
        <div className="events">
            <div className="sidebar">
                <h1 className="title">Eventos</h1>
                <h5 className='text'>Aqui temos alguns</h5>
                <h5 className="text-end">eventos que fizemos!</h5>
                <h5 className='text'>Esses eventos ajudam-nos </h5>
                <h5 className='text'>arrecadar dinheiro e</h5>
                <h5 className="text-end">ração para esses bichinhos.</h5>
                <h5 className='text'>Se quiser saber mais sobre</h5>
                <h5 className='text'>nossos eventos, nos</h5>
                <h5 className='text'>acompanhe nas redes sociais!</h5>
                <div className="social-icons">
                    <a href="https://www.instagram.com/rafa.esteves.dev/?igsh=emxldXZlOXh1bHVk" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/share/p/iXM31Ppjyc9zZ4uR/?mibextid=oFDknk" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="mailto:rafaeldev019@gmail.com" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faSolidEnvelope} /></a>
                </div>
            </div>
            <div className="posts">
                {events.map(event => (
                    <div key={event.id} className="event">
                        <div className="padding">
                            <h3>{event.name}</h3>
                            <img src={event.image} className="img" alt={`imagem do evento ${event.id}`} />
                        </div>
                        <div className='comments-container'>
                            <div className="comments">
                                <h4>Comentários:</h4>
                                <ul>
                                    <div>
                                    {comments
                                        .filter(comment => comment.eventId === event.id)
                                        .slice(0, showAllComments ? comments.length : 2)
                                        .map(comment => (
                                            <li key={comment.id}>
                                                <div className='author-div'>
                                                    <p className='author'>{comment.email ? comment.email : 'Anônimo'} -</p>
                                                    <p className='author'>- {new Date(comment.dataHora).toLocaleDateString()}</p>
                                                </div>
                                                <div className='comment-div'>
                                                    <p className="comment-text" style={{ 
                                                        wordWrap: 'break-word', 
                                                        maxWidth: windowWidth < 500 ? '100px' : '220px' 
                                                    }}>{comment.text}</p>
                                                    {comment.email === userEmail && (
                                                        <button className="btn-del" onClick={() => handleDeleteComment(comment.id)}>
                                                            <FontAwesomeIcon icon={faTrashAlt} />
                                                        </button>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                        </div>
                                </ul>
                                {(comments.length > 2 && !showAllComments) && (
                                    <button className='show-more' onClick={toggleComments}>Mostrar mais</button>
                                )}
                                {(comments.length > 2 && showAllComments) && (
                                    <button className='show-more' onClick={toggleComments}>Mostrar menos</button>
                                )}
                                <CommentForm eventId={event.id} onCommentSubmit={handleCommentSubmit} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CommentForm = ({ eventId, onCommentSubmit }) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim() === '') return;
        onCommentSubmit(eventId, commentText);
        setCommentText('');
    };

    return (
        <form onSubmit={handleSubmit} className="input-area">
            <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Digite seu comentário..."
            />
            <button className='send' type="submit">
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
};

export default Events;
