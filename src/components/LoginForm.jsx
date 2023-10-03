import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://localhost:7062/api/auth/login', formData);
            const token = response.data.Value;
            setSuccess('Login realizado com sucesso');
            setError(null);
            localStorage.setItem('token', token)
            setTimeout(() => {
                navigate('/welcome');
            }, 1000);
        } catch (error) {
            console.error('Erro na chamada da API:', error);
            setError(error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth={true} margin="dense">
                <TextField
                    variant="filled"
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <TextField
                    variant="filled"
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    Log-In
                </Button>
                {error && (
                    <Alert severity="error">
                        <AlertTitle>Erro</AlertTitle>
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert severity="success">
                        <AlertTitle>Sucesso</AlertTitle>
                        {success}
                    </Alert>
                )}
            </FormControl>
        </form>
    );
}

export default LoginForm;
