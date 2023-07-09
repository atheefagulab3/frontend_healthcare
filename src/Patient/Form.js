import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button,  } from '@mui/material';

const PatientLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7205/api/Login/Patient', {
        Username: username,
        Password: password
      });

      const { token, patientId } = response.data;
        console.log(token); // Log the token for debugging
        console.log(patientId); // Log the doctorId for debugging
        localStorage.setItem('token', token);
        localStorage.setItem('patientId', patientId);

      window.location.href = '/Home';
      localStorage.setItem('username', username);
      alert.message('Thank you for logging in');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>

      <TextField
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br></br>
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="error">{error}</p>}
      <br/>
      <Button type="submit" variant="contained">Login</Button>
      <Button type="submit" variant="contained" ><a href='/Regp'>Register</a></Button>
    </form>
  );
};

export default PatientLogin;