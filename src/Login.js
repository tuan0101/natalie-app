import React, { useState } from 'react';
import './Login.css';
import Gift from './Gift';

const Login = () => {
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(password === '0714'){
            closeCard();
        }
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const closeCard = () => {
        // Implement your logic to close the card here
        openPopup();
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const Card = () => {



        return (
            <div className="card">
                <div class="bg"></div>
                <div class="blob"></div>
                <img className="avatar" src="natalie-avatar.jpg" alt="Avatar">

                </img >
                <h3 class="card-title">Happy birthday to Natalie</h3>
                <p>Enter your birthday</p>

                <input
                    className='input'
                    type="password"
                    placeholder="4-digit number"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='div-button'>
                    <button className='btn-shine' onClick={(e)=>handleLogin(e.target.value)}>
                        <span>Show my gift</span></button>

                </div>



            </div>
        );
    };

    return (

        <div >
            {Card() }
            {isPopupOpen && (
                <Gift />
            )}
        </div>

    );
};

export default Login;