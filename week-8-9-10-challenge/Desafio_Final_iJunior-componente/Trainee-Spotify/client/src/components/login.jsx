import React from 'react'
import { Button, Container, InputAdornment, TextField, Typography } from '@mui/material'
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';

export const Login = ({ handleLogin, handleInputChange, handleAuthChange }) => {

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant='h3'>Música para todos</Typography>
            <TextField
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <EmailOutlined />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField 
            type="password" 
            name="password" 
            placeholder="Senha" 
            onChange={handleInputChange} 
            InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <LockOutlined />
                        </InputAdornment>
                    ),
                }}
            />
            <Button onClick={handleLogin} variant='contained'>
                <Typography variant='button'>Login</Typography>
            </Button>
            <Typography variant='button'>
                Não tem uma conta?
                <Button variant='text' onClick={handleAuthChange}>
                    Inscreva-se
                </Button>
            </Typography>
        </Container>
    )
}
