import React from 'react'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import { Button, Container, InputAdornment, TextField, Typography } from '@mui/material'

export const Register = ({ handleRegister, handleInputChange, handleAuthChange }) => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography variant='h3' textAlign='center'>Inscreva-se em uma <br></br> conta grátis do <br></br> iSpotify®</Typography>
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
            <TextField 
            type="text" 
            name="username" 
            placeholder="Como devemos chamar você?" 
            onChange={handleInputChange} 
            InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <AccountCircleOutlined />
                        </InputAdornment>
                    ),
                }}
            />

            <Button onClick={handleRegister} variant='contained'>
                <Typography variant='button'>Login</Typography>
            </Button>
            <Typography variant='subtitle1'>
                Já é usuário do iSpotify?
                <Button variant='text' onClick={handleAuthChange}>
                    Faça Login
                </Button>
            </Typography>
        </Container>
    )
}
