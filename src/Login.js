import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <div>
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

                    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VsTZikuF7V8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
                

            </div>

        </div>
    );
};

export default Login;