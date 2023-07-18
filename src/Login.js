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
                    <img className="avatar" src="data:image/jpeg;base64,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" alt="Avatar">

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