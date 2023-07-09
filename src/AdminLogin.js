
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic here
    // For a static example, check if the username is "admin" and password is "password"
    if (username === 'admin' && password === 'password') {
      setLoggedIn(true);
      navigate('/Ath'); // Redirect to Home.js
    } else {
      alert('Invalid username or password');
      setUsername('');
      setPassword('');
    }
  };

  if (isLoggedIn) {
    return <div className="text-center mt-5">You are logged in as admin.</div>;
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: "url('https://w.forfun.com/fetch/0e/0e23ad64896003d1e47e0d899e178fab.jpeg?w=1470&r=0.5625')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card p-4">
        <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" className="btn btn-primary" >Log In</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
