import { useState } from 'react';
import { SForm, SButton, STextField } from './style';

interface Event {
    preventDefault: Function;
}

interface LoginProps {
    onSubmit: (username: string, password: string) => void;
}

export default function Login({ onSubmit }: LoginProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        onSubmit(username, password);
    };

    return (
        <SForm component="form" onSubmit={handleSubmit}>
            <STextField
                label="User Name"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <STextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <SButton
                variant="contained"
                type="submit"
                disabled={!username || !password}
            >
                Iniciar sesión
            </SButton>
        </SForm>
    );
}
