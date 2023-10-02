import React, { useState } from 'react';
import { FormControl, TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        cpassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Verifica se as senhas coincidem
        if (formData.password !== formData.cpassword) {
            setError('As senhas não coincidem');
            setSuccess('');
            return;
        }


        try {

            await axios.post('https://localhost:7062/api/Users/cadastro', formData);
            setSuccess('Cadastro realizado com sucesso');
            setError('');
            setTimeout(() => {
                navigate('/'); // Redireciona para a página de login após o cadastro
            }, 1000);
        } catch (error) {
            console.error('Erro na chamada da API:', error);
            setError('Erro ao cadastrar usuário');
            setSuccess('');
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
                    type="text"
                    name="name"
                    label="Nome"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextField
                    variant="filled"
                    type="password"
                    name="password"
                    label="Senha"
                    placeholder="Senha"
                    value={formData.password}
                    onChange={handleChange}
                />
                <TextField
                    variant="filled"
                    type="password"
                    name="cpassword"
                    label="Confirmar senha"
                    placeholder="Confirmar senha"
                    value={formData.cpassword}
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                    Cadastrar
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

export default SignUpForm;
