import React, { useState } from 'react';
import Modal from 'react-modal';
import './notificationsWindows.css'

Modal.setAppElement('#root')
const Welcome = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    let nombre = "Andres Caro"

    const customStyles = {
        content: {
            top: '20%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '600px',
            transform: 'translate(-40%, -10%)',
            padding: '0',
        },
    };

    return (
        <div >
            <button onClick={() => setModalIsOpen(true)}>Crear un Usuario</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>
                <header className='headerWelcome'></header>
                <div className='bodyWelcome'>
                    <h1>¡Bienvenido {nombre}! </h1>
                    <p>"Estamos felices de tenerte como un nuevo integrante, esperamos que podamos aprender de tus aportes"</p>
                </div>
                <div className='imageWelcome'>
                    <img src="https://www.sofka.com.co/wp-content/uploads/2020/08/sofka-logo-gradient-white.png" alt="logo-sofka"></img>
                </div>
                <footer className='footerWelcome'></footer>
            </Modal>
        </div>
    )
}

export default Welcome;