import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

import styles from '@app/styles/login';
import type { LoginProps, LoginState, LoginErrors } from '@app/types/login';

const initialLoginState: LoginState = {
    username: '',
    password: ''
}

const initialLoginErrors: LoginErrors = {
    username: { isValid: false, message: '' },
    password: { isValid: false, message: '' }
}

const validate = (name: string, value: string): ['username' | 'password', boolean, String] => {
    let isValid = false;
    let mesagge = '';
    switch (name) {
        case 'username':
            isValid = /^[A-Z]{4,12}/i.test(value);
            mesagge = !isValid ? 'Nombre de usuario no valido' : '';
            break;
        case 'password':
            isValid = /^[a-z0-9]{6,32}/i.test(value);
            mesagge = !isValid ? 'Contraseña no valida' : '';
            break;
        default:
            throw new Error('No existe el campo ' + name);
    }
    return [name, isValid, mesagge];
}

export default function Login({ onSubmit }: LoginProps) {
    const [values, setValues] = useState(initialLoginState);
    const [errors, setErrors] = useState(initialLoginErrors);
    const [disabled, setDisabled] = useState(2);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        const [inputName, isValid, message] = validate(name, value);
        if (!errors[inputName].isValid && isValid) setDisabled(s => s - 1);
        if (errors[inputName].isValid && !isValid) setDisabled(s => s + 1);
        setErrors(s => ({ ...s, [inputName]: { isValid, message } }));
        setValues(s => ({ ...s, [inputName]: value }));
    }

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const { username, password } = values;
        onSubmit(username, password);
    }

    return (
        <Box css={styles} component="form" onSubmit={handleSubmit}>
            <TextField
                label="Nombre de usuario"
                variant="outlined"
                name="username"
                error={!errors.username.isValid && Boolean(values.username)}
                helperText={errors.username.message}
                value={values.username.toUpperCase()}
                onChange={handleChange}
            />
            <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                name="password"
                error={!errors.password.isValid && Boolean(values.password)}
                helperText={errors.password.message}
                value={values.password}
                onChange={handleChange}
            />
            <Button
                variant="contained"
                type="submit"
                disabled={disabled !== 0}
            >
                Iniciar sesión
            </Button>
            <div className='miDiv'>Mi div</div>
        </Box>
    );
}
