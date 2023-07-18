import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <div className="login-form">
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
                        <button className='btn-shine' onClick={handleLogin}>
                            <span>Show my gift</span></button>

                    </div>
                

            </div>

        </div>
    );
};

export default Login;